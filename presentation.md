### **Decoding Behavioural Patterns**

**ML Across Temporal & Visual Domains**

![logo](assets/images/logoFii.png)

**Adrian Valentin Panaintescu**

_Assistant Dr. Vlad Constantin Crăciun_

Master's Thesis - July 2025

---

### Motivation and Overview

- Initial goal: _Create framework for universal binary unpacking_
  - why? to help researchers to understand malware better
- Phase01: **Behavioural analysis** as key for cybersecurity and biomedical research

--

### Shift: static to dynamic analysis

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
