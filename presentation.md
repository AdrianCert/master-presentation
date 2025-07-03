### **Decoding Behavioural Patterns**

**ML Across Temporal & Visual Domains**

![logo](assets/images/logoFii.png)

**Adrian Valentin Panaintescu**

_Assistant Dr. Vlad Constantin Crăciun_

Master's Thesis - July 2025

---

### Motivation and Overview

- **Behavioural analysis** as key for cybersecurity and biomedical research
- Shift from static approaches towards dynamic runtime analysis
- Goal: Create generalized behavioural models for diverse domains

---

### Malware Behaviour Profiling

- Challenges in static malware analysis
- Why behavioural (dynamic) approaches matter
- Dynamic Binary Instrumentation (**DBI**) as a solution

---

### DBI and Feature Extraction

- Custom Intel **PIN tool** developed for execution tracing
- From raw execution traces to **Partial Control Flow Graphs (PFGs)**
- Behaviour encoded as structured time series data

---

### Malware Classification via CNN-LSTM

- Deep learning model: hybrid CNN-LSTM architecture
- Classification accuracy: **99.83%**
- High performance even in large-scale datasets (135k samples)

---

### Zebrafish Tracking and Biomedical Relevance

- Zebrafish as biomedical models
- Automated behavioural analysis necessity
- Limitations of existing commercial and open-source solutions

---

### FARM Framework for Real-time Monitoring

- Modular and open-source solution: **FARM**
- Real-time 2D/3D behavioural metrics
- Simple, low-cost setup for reproducibility

---

### Behavioural Pattern Analysis in FARM

- Temporal and spatial feature extraction
- Clustering (K-means, k-shape) and supervised classification (HMMs)
- Framework tested in controlled lab settings

--

**The k-Means silhouette analysis**

![](assets/images/silhouette-zebrafish.png)

**zebrafish**

--

**The k-Means silhouette analysis**

![](assets/images/silhouette-goldfish.png)

**goldfish**

---

### Vision Transformers (ViT) for Medical Classification

- ViT’s applicability in medical image analysis (colonoscopy)
- Dataset: Colonoscopic images (CVC-ClinicDB, C3VD)
- Benchmarking: 20 ViT variants compared on accuracy and performance

---

### Top ViT Models and Observations

- Best performing models (Tiny ViT 5M, ViT Small ResNet50d)
- Practical insights on medical deployment
- Trade-offs between accuracy, complexity, and speed

--

| Model                        | Accuracy | F1 Score |
|------------------------------|----------|----------|
| Swin Tiny Patch4 Window7 224 | 90.48%   | 0.33     |
| ViT Small ResNet50d S16 224  | 90.43%   | 0.46     |
| Vitamin Small 224            | 90.42%   | 0.33     |
| ViT Base MCI 224             | 90.40%   | 0.32     |
| ConViT Base                  | 90.46%   | 0.33     |

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

---

## Q&A

**Thank you for your attention!**

Questions and discussions
