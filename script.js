:root {
  --primary: #0b3d91;
  --secondary: #2d9cdb;
  --accent: #f39c12;
  --bg: #eef6ff;
  --light: #f8fbff;
  --dark: #1f2937;
  --muted: #64748b;
  --line: #dfeaf6;
  --green: #2e8b57;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: linear-gradient(180deg, #edf5ff 0%, #dfeeff 100%);
  font-family: "Segoe UI", Arial, sans-serif;
  color: var(--dark);
}

.page-wrap {
  padding: 24px;
}

.page {
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  background: #fff;
  padding: 16mm;
  box-shadow: 0 12px 30px rgba(10, 45, 88, 0.12);
}

.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 10px 24px rgba(11, 61, 145, 0.18);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.badge {
  min-width: 62px;
  text-align: center;
  padding: 11px 14px;
  font-weight: 700;
  border-radius: 12px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.25);
}

.mini-label {
  margin: 0;
  font-size: 12px;
  letter-spacing: 1px;
  opacity: 0.9;
}

.header-card h1 {
  margin: 4px 0 0;
  font-size: clamp(1.5rem, 2.2vw, 2.3rem);
}

.school-meta {
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.95;
}

.school-meta p {
  margin: 0;
}

.card {
  margin-top: 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 18px 20px;
  background: #fff;
}

.card h2 {
  margin: 0 0 16px;
  padding: 10px 12px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 10px;
  font-size: 15px;
  letter-spacing: 0.6px;
}

.grid.two {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-weight: 700;
  color: var(--primary);
  font-size: 12px;
}

.blank {
  display: block;
  min-height: 26px;
  border-bottom: 2px solid var(--dark);
  font-size: 12px;
  padding: 4px 2px 0;
}

.goal-box,
.tool-box,
.problem-box,
.formula-box,
.example-box,
.result-box {
  border-radius: 12px;
  padding: 14px 16px;
  margin-top: 14px;
}

.goal-box {
  background: rgba(45, 156, 219, 0.06);
  border-left: 4px solid var(--secondary);
}

.goal-box h3,
.tool-box h3 {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--primary);
}

.goal-box ul,
.tool-box ul,
.tool-box ol,
.question-list {
  margin: 0;
  padding-left: 20px;
  line-height: 1.7;
  font-size: 12px;
}

.problem-box {
  background: rgba(243, 156, 18, 0.08);
  border-left: 4px solid var(--accent);
}

.problem-box p {
  margin: 0 0 10px;
  font-size: 12px;
  line-height: 1.7;
}

.problem-box p:last-child {
  margin-bottom: 0;
}

.lead {
  margin: 0 0 10px;
  font-size: 12px;
  color: var(--muted);
}

.long-box textarea {
  width: 100%;
  resize: none;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fbfdff;
  padding: 12px;
  font: inherit;
  font-size: 12px;
}

.diagram-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 12px;
  border-radius: 12px;
  background: rgba(11, 61, 145, 0.03);
}

.bottle {
  position: relative;
  width: 170px;
  height: 220px;
  background: linear-gradient(180deg, #edf8ff, #dfeaf6);
  border: 3px solid #244c7c;
  border-radius: 18px 18px 22px 22px;
}

.water {
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 58%;
  background: linear-gradient(180deg, rgba(45,156,219,0.8), rgba(11,61,145,0.9));
  border-radius: 0 0 18px 18px;
}

.hole {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #243b53;
  border-radius: 50%;
}

.h1 { left: 20px; top: 90px; }
.h2 { left: 78px; top: 110px; }
.h3 { left: 134px; top: 150px; }

.stream {
  position: absolute;
  width: 4px;
  height: 55px;
  background: linear-gradient(180deg, rgba(45,156,219,0.6), rgba(11,61,145,0.9));
  border-radius: 999px;
  transform-origin: top center;
}

.s1 { left: 22px; top: 95px; transform: rotate(26deg); }
.s2 { left: 80px; top: 116px; transform: rotate(18deg); }
.s3 { left: 136px; top: 156px; transform: rotate(10deg); }

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}

th,
td {
  border: 1px solid var(--line);
  padding: 9px 8px;
  text-align: center;
}

th {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  color: white;
}

.formula-box {
  background: rgba(46, 139, 87, 0.06);
  border-left: 4px solid var(--green);
}

.formula-box p {
  margin: 0 0 8px;
  font-size: 12px;
}

.formula {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--green);
  letter-spacing: 1px;
  font-family: "Courier New", monospace;
}

.example-box {
  background: rgba(243, 156, 18, 0.08);
  border-left: 4px solid var(--accent);
  margin-top: 16px;
}

.example-box p {
  margin: 0 0 8px;
  font-size: 12px;
}

.calc-box {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
  align-items: end;
}

.field.small input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 10px 12px;
  font: inherit;
  font-size: 12px;
}

button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
}

.result-box {
  margin-top: 16px;
  background: rgba(46, 139, 87, 0.08);
  border: 1px solid rgba(46, 139, 87, 0.2);
  color: var(--green);
  font-weight: 700;
  font-size: 13px;
}

.question-list li {
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.7;
}

@media print {
  body {
    background: white;
  }

  .page-wrap {
    padding: 0;
  }

  .page {
    box-shadow: none;
    max-width: none;
    width: 100%;
    margin: 0;
    padding: 16mm;
  }
}

@media (max-width: 720px) {
  .header-card,
  .grid.two,
  .calc-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .header-card {
    display: grid;
  }
}
