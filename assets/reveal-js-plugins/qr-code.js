window.RevealQRCodePlugin = {
  id: "qrcode",
  init: async function (reveal) {
    // Load QRCode library if not already present
    if (!window.QRCode) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js";
        script.onload = resolve;
        script.onerror = () => reject("Failed to load QRCode");
        document.head.appendChild(script);
      });
    }

    // === Settings from Reveal config ===
    const options = reveal.getConfig().qrcode || {};
    const visible = options.show !== false;
    const position = options.position || "top-right";
    let currentSize = parseInt(options.size || 100);

    // === Create QR container ===
    const container = document.createElement("div");
    Object.assign(container.style, {
      position: "fixed",
      zIndex: "9999",
      width: `${currentSize}px`,
      height: `${currentSize}px`,
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "4px",
      overflow: "hidden",
      transition: "border-color 0.3s",
    });

    const [v, h] = position.split("-");
    container.style[v] = "10px";
    container.style[h] = "10px";

    // === Canvas ===
    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.style.background = "transparent";
    container.style.border = "none";
    container.appendChild(canvas);
    document.body.appendChild(container);

    // === Buttons on hover ===
    const controls = document.createElement("div");
    Object.assign(controls.style, {
      position: "absolute",
      top: "4px",
      right: "4px",
      display: "none",
      flexDirection: "row",
      gap: "4px",
      background: "rgba(255,255,255,0.85)",
      padding: "2px",
      borderRadius: "4px",
    });

    const btnUp = document.createElement("button");
    btnUp.textContent = "+";
    const btnDown = document.createElement("button");
    btnDown.textContent = "-";

    [btnDown, btnUp].forEach((btn) => {
      Object.assign(btn.style, {
        fontSize: "16px",
        padding: "2px 6px",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "3px",
        background: "#eee",
      });
      controls.appendChild(btn);
    });

    container.appendChild(controls);

    container.addEventListener("mouseenter", () => {
      controls.style.display = "flex";
      container.style.borderColor = "#888";
    });

    container.addEventListener("mouseleave", () => {
      controls.style.display = "none";
      container.style.borderColor = "#ccc";
    });

    // === QR rendering ===
    function updateQRCode() {
      const size = container.clientWidth;
      const offscreen = document.createElement("canvas");
      offscreen.width = size;
      offscreen.height = size;

      // Construct slide-aware URL manually
      const baseUrl = window.location.origin + window.location.pathname;
      const { h, v, f } = Reveal.getIndices();
      let slideUrl = `${baseUrl}#/${h}/${v}`;
      if (typeof f === "number") {
        slideUrl += `/${f}`;
      }

      QRCode.toCanvas(offscreen, slideUrl, { width: size }, (err) => {
        if (err) return console.error(err);

        const ctx = canvas.getContext("2d");
        const offCtx = offscreen.getContext("2d");
        const imageData = offCtx.getImageData(0, 0, size, size);
        const data = imageData.data;

        // Loop through pixels and make white pixels fully transparent
        for (let i = 0; i < data.length; i += 4) {
          if (
            data[i] === 255 && // R
            data[i + 1] === 255 && // G
            data[i + 2] === 255 && // B
            data[i + 3] === 255 // A
          ) {
            data[i + 3] = 0; // set alpha to 0
          }
        }

        canvas.width = size;
        canvas.height = size;
        ctx.clearRect(0, 0, size, size);
        ctx.putImageData(imageData, 0, 0);
      });
    }

    function resize(delta) {
      currentSize = Math.max(50, Math.min(500, currentSize + delta));
      container.style.width = `${currentSize}px`;
      container.style.height = `${currentSize}px`;
      updateQRCode();
    }

    btnUp.onclick = () => resize(10);
    btnDown.onclick = () => resize(-10);

    // === Key bindings ===
    let isVisible = visible;
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "q") {
        isVisible = !isVisible;
        container.style.display = isVisible ? "block" : "none";
        if (isVisible) updateQRCode();
      }
    });

    // === Initial render ===
    if (!visible) container.style.display = "none";
    updateQRCode();

    reveal.on("slidechanged", () => {
      if (isVisible) updateQRCode();
    });
  },
};
