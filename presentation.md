## **Decoding Behavioural Patterns**

**ML Across Temporal & Visual Domains**

![logo](assets/images/logoFii.png)

**Adrian Valentin Panaintescu**

_Assistant Dr. Vlad Constantin Crăciun_

Master's Thesis

July 2025

---

## Contributions

<div style="display: flex; justify-content: space-between; gap: 10px; text-align: center;">

  <div style="flex: 1;">
    <a href="#about-paper-farm">
      <img src="assets/images/paper-farm-2d.png" style="height: 33vh; border-radius: 6px;" />
      <div style="font-size:0.8em; line-height: 1em;">Improving Automated Behaviour Analysis in Zebrafish Laboratory Trials</div>
    </a>
  </div>

  <div style="flex: 1;">
    <a href="#about-paper-farm">
      <img src="assets/images/paper-farm-3d.png" style="height: 33vh; border-radius: 6px;" />
      <div>
      <div style="font-size:0.8em; line-height: 1em;">Clustering 3D Tracking in Zebrafish Laboratory Trials</div>
      </div>
    </a>
  </div>

  <div style="flex: 1;">
    <a href="#about-paper-cfg">
      <img src="assets/images/paper-cfg-dbi.png" style="height: 33vh; border-radius: 6px;" />
      <div style="font-size:0.8em; line-height: 1em;">DBI-Assisted Behaviour Classification of Malicious Binary Applications</div>
    </a>
  </div>

  <div style="flex: 1;">
    <a href="#about-paper-vit">
      <img src="assets/images/paper-vit.png" style="height: 33vh; border-radius: 6px;" />
      <div style="font-size:0.8em; line-height: 1em;">Comparing Vision Transformers Towards Automatic Bowel  Cleansing: A discussion</div>
    </a>
  </div>

</div>

---

### Motivation and How I started

- Initial goal: _Create an universal binary unpacking framework_
  - why? to help security researchers
- Phase01: **Behavioural analysis** as key for cybersecurity and biomedical research
- Shift from static approaches towards dynamic runtime analysis
- Goal: Create generalized behavioural models for diverse domains

---

### DBI-Assisted Behaviour Classification

<div
  style="display: flex; justify-content: space-between; gap: 10px; text-align: center;"
  id="about-paper-cfg">

  <img src="assets/images/paper-cfg-dbi.png"
    style="height: 33vh; border-radius: 6px;" />

  <div style="flex: 1; display: flex;  align-items: center;">
    <ul style="text-align: left; font-size: 1em;">
      <li><strong>Goal</strong>: Detect malware via runtime behaviour, avoiding
        static fingerprinting.</li>
      <li><strong>Approach</strong>:
        <ul>
          <li>Trace execution using <strong>Intel PIN DBI</strong></li>
          <li>Extract <strong>Partial Control Flow Graphs (PFGs)</strong></li>
          <li>Convert traces to time series</li>
        </ul>
      </li>
      <li><strong>ML Pipeline</strong>:
        <ul>
          <li><strong>k-Means + DTW</strong> for family clustering</li>
          <li><strong>CNN-LSTM</strong> for supervised classification</li>
        </ul>
      </li>
      <li><strong>Results</strong>:
        <ul>
          <li>Identified 6 malware families</li>
          <li><strong>99.83%</strong> test accuracy</li>
        </ul>
      </li>
      <li><strong>Impact</strong>: Resilient to obfuscation; enables behavioural
        profiling</li>
    </ul>
  </div>
</div>

---

### DBI and Feature Extraction

- Custom Intel **PIN tool** developed for execution tracing
- From raw execution traces to **Partial Control Flow Graphs (PFGs)**
- Behaviour encoded as structured time series data

--

![](assets/images/proctracer-snapshot.png)

--

![](assets/images/flow.png)

---

### Dataset & Normalization

- DFS traversals of PFG using queue
- Queue size values yield on each node visit
- Normalization PFG traversals lengths 500 with Haar Wavele

<img src="assets/images/cfg-initial-datasets.png" alt="cfg-initial-datasets.png" width="60%" />

--

- 641 sample (115 GB)
- 6 families of ransomware
  - Akira
  - Lockbit
  - Avaddon
  - Phobos
  - Crysis
  - Rhadamanthys
- clean samples
  - 18k for train
  - 135k for test

---

### Malware Clustering with k-Means

- Time series clustered using DTW Barycenter Averaging
- 6 clusters discovered, aligned with AV families
- Good separation observed

<img src="assets/images/cfg-silhouette.png" alt="cfg-silhouette.png" width="50%" />

--

**k-Means with euclidean**

![](assets/images/cfg-k-means-euclidian.png)

--

**k-Means with k-Shape**

![](assets/images/cfg-k-means-kshape.png)

--

**k-Means with DBA**

![](assets/images/cfg-k-means-dba.png)

---

### Malware Classification via CNN-LSTM

- Deep learning model: hybrid CNN-LSTM architecture
- Classification accuracy: **99.83%**
- High performance even in large-scale datasets (135k samples)

---

### ML-Driven Zebrafish Behaviour Tracking

<div
  style="display: flex; justify-content: space-between; gap: 5px; text-align: center;"
  id="about-paper-farm">

  <div style="display: flex; flex-direction: column; align-items: center; gap: 0px;">
    <img src="assets/images/paper-farm-2d.png" style="height: 25vh; border-radius: 6px;" />
    <img src="assets/images/paper-farm-3d.png" style="height: 25vh; border-radius: 6px;" />
  </div>

  <div style="flex: 1; display: flex; align-items: center;">
    <ul style="text-align: left; font-size: 0.8em;">
      <li><strong>Goal</strong>: Enable automated analysis of fish behaviour in lab settings</li>
      <li><strong>Approach</strong>:
        <ul>
          <li>Real-time tracking via <strong>FARM system</strong></li>
          <li>Extract 2D/3D movement features (speed, turns, trajectories)</li>
          <li>Detect patterns using <strong>K-Means</strong> and <strong>HMM</strong></li>
        </ul>
      </li>
      <li><strong>Experiments</strong>:
        <ul>
          <li>Zebrafish (95) and Goldfish (80) trials</li>
          <li>Unknown subjects: Healthy vs Sick vs Treated</li>
        </ul>
      </li>
      <li><strong>Results</strong>:
        <ul>
          <li>Robust multi-dimensional clustering</li>
          <li>Cross-species generalisation</li>
        </ul>
      </li>
      <li><strong>Impact</strong>: Provides reproducible ML pipeline for behavioural neuroscience</li>
    </ul>
  </div>
</div>

---

### Zebrafish Tracking and Biomedical Relevance

- Zebrafish as biomedical models
- Automated behavioural analysis necessity
- Limitations of existing commercial and open-source solutions

--

### Dataset Composition

- Two main datasets collected:
  - **Zebrafish trials**: 95 video samples
  - **Goldfish trials**: 80 video samples
- Each trial consists of ~30–60 seconds of 3D movement
- Unknown subjects: Healthy vs Sick vs Treated

---

### FARM Framework for Real-time Monitoring

- Modular and open-source solution: **FARM**
- Real-time 2D/3D behavioural metrics
- Simple, low-cost setup for reproducibility

--

![](assets/images/farm-segmentation.png)

--

![](assets/images/farm-trial01-heatmap.png)

--

![](assets/images/farm-trial01-tracking.png)

---

#### Behavioural Pattern Analysis in FARM

- **Temporal and spatial features** extracted from 2D/3D motion data:
  - Speed, direction, turning angles, acceleration
- **Unsupervised clustering**:
  - K-means for initial behavioural grouping
  - K-shape for time-series clustering with shape-based distance
- **Supervised classification**:
  - Hidden Markov Models (HMMs) trained on clustered sequences

--

**The k-Means silhouette analysis**

![](assets/images/silhouette-zebrafish.png)

**zebrafish**

--

**The k-Means silhouette analysis**

![](assets/images/silhouette-goldfish.png)

**goldfish**

--

![](assets/images/kmeans-2d-zebra.png)

---

### Farm: 3D motion data

<img src="assets/images/cubes-segmentation.png" alt="cubes-segmentation.png" width="60%" />

--

<img src="assets/images/plot-hmm-60-zebrafish.png" alt="plot-hmm-60-zebrafish.png" width="60%" />

**hmm on 60/40 for zebrafish**

--

<img src="assets/images/plot-hmm-60-goldfish.png" alt="plot-hmm-60-goldfish.png" width="60%" />

**hmm on 60/40 for goldfish**

---

### FARM System Results

- **High clustering cohesion** observed using silhouette scores on K-means and K-shape clusters
- **Accurate behaviour classification** using HMM:
  - Precision and recall over 90% on labelled zebrafish data
- **Cross-species applicability**:
  - Successfully extended from zebrafish to goldfish trials

---

### ViT benchmarking on BBPS clasification

<div
  style="display: flex; justify-content: space-between; gap: 10px; text-align: center;"
  id="about-paper-vit">

  <img src="assets/images/paper-vit.png"
    style="height: 33vh; border-radius: 6px;" />

  <div style="flex: 1; display: flex; align-items: center;">
    <ul style="text-align: left; font-size: 1em;">
      <li><strong>Goal</strong>: Benchmark <strong>Vision Transformer (ViT)</strong> models on medical image classification.</li>
      <li><strong>Use Case</strong>: Frame-level classification of colonoscopy images using <strong>BBPS scale</strong>.</li>
      <li><strong>Datasets</strong>: CVC-ClinicDB, C3VD</li>
      <li>20 ViT-based and non-ViT models</li>
      <li><strong>Hardware</strong>: RTX 4080, A100</li>
      <li><strong>Best by F1 Score on C3VD</strong>:
      <ul>
        <li>0.456 <strong>ViT Small ResNet50d S16 224</strong> (timm): best overall</li>
        <li>0.376 <strong>SAMViT Base Patch16</strong> (Meta): strong performance without pretraining</li>
        <li>0.333 <strong>Tiny ViT 5M</strong> (Microsoft): best-performing small pretrained ViT</li>
      </ul>
      </li>
    </ul>
  </div>
</div>

---

### Vision Transformers (ViT) for Medical Classification

- Target task: classify colonoscopy frames based on **Boston Bowel Preparation Scale (BBPS)**
- Motivation:
  - Frame-level predictions aid in automated quality assessment
  - Supports real-time feedback during colonoscopy procedures
- Dataset: Frame-labelled images from colonoscopic videos

---

### ViT Dataset Characteristics

- **CVC-ClinicDB**: Polyp and clean colonoscopy frames, 612 images
- **C3VD**: More diverse content, multi-class setup
- Frames annotated by clinicians based on BBPS scale
- Distribution:
  - Class imbalance addressed via stratified sampling and augmentation

---

### Vision Transformer Models

- 20 models benchmarked:
  - MaxViT, SAMViT, ViT variants (Base, Tiny, RelPos), ConViT, MobileViT, etc.
- All models trained with:
  - Resolution: 224×224
  - Optimizer: AdamW
- Evaluated for:
  - Accuracy
  - Per-class F1-score
  - AUC

---

### ViT Benchmarking Results

- Best performing models clearly identified
- Highest accuracy on multi-class colonoscopy dataset
- Practical insights for model deployment

---

### Cross-Domain Analysis and Generalization

- Behavioural modelling techniques successfully adapted across:
  - Cybersecurity (malware analysis)
  - Biomedical (zebrafish)
  - Medical imaging (colonoscopy classification)
- Shared methods (CNN-LSTM, ViT) and domain-specific adjustments

---

### Conclusion and Contributions

- Unified behavioural analysis using ML
- DBI for robust malware detection
- FARM as an accessible biomedical research tool
- ViT benchmarking for medical classification

---

### Future Work

- Extending DBI analysis for evasive malware
- FARM enhancements: broader species and behaviors
- Fine-tuning ViTs and multimodal approaches
- Explainability and interpretability in ML models

--

Acknowledgements

- Faculty of Computer Science, Alexandru Ioan Cuza University

- Institute of Computer Science, Romanian Academy, Iași Branch

- Center of Biomedical Research, Romanian Academy, Iași Branch

---

## Q&A

**Thank you for your attention!**

Questions and discussions
