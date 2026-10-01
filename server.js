const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KHODAIR CHANGE MANAGEMENT TOOLKIT</title>
<style>
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #0a1410; color: #eef4f8; }
header { padding: 18px 30px; background: #0d1f18; border-bottom: 2px solid #2d7a4f; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
.header-left { display: flex; align-items: center; gap: 15px; }
.logo-icon { width: 50px; height: 50px; }
.logo-text { color: #4fd18b; font-size: 21px; font-weight: bold; }
.subtitle { margin-top: 5px; color: #9fc8b3; font-size: 13px; }
.header-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.header-actions button { margin: 0; padding: 8px 14px; font-size: 13px; }
.layout { display: flex; min-height: calc(100vh - 90px); }
aside { width: 280px; background: #0c1f18; padding: 20px 15px; border-right: 1px solid #1d4a35; }
.stage { padding: 13px 15px; margin-bottom: 7px; border-left: 3px solid #1d4a35; color: #9fc8b3; border-radius: 3px; cursor: pointer; transition: 0.2s; font-size: 13px; }
.stage.active { border-left-color: #4fd18b; background: #14342a; color: #ffffff; }
.stage.unlocked { opacity: 1; }
.stage.locked { opacity: 0.45; cursor: not-allowed; }
main { flex: 1; padding: 30px; max-width: 1200px; }
.card { background: #0f2520; border: 1px solid #1d4a35; border-radius: 10px; padding: 28px; }
h2 { margin-top: 0; color: #4fd18b; }
h3 { color: #4fd18b; }
.section-title { color: #c9e5d5; margin-top: 25px; }
textarea, input, select { width: 100%; background: #0a1f18; color: white; border: 1px solid #2d5a45; border-radius: 6px; padding: 12px; font-size: 15px; margin-bottom: 10px; font-family: Arial, sans-serif; }
textarea { height: 100px; resize: vertical; }
input[type="checkbox"] { width: auto; margin: 0 8px 0 0; vertical-align: middle; cursor: pointer; }
input[type="radio"] { width: auto; margin: 0 6px 0 0; vertical-align: middle; cursor: pointer; }
button { margin-top: 16px; margin-right: 8px; padding: 12px 22px; background: #2d7a4f; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
button:hover { opacity: 0.9; }
.secondary { background: #1d4a35; color: white; }
.accent-btn { background: #4fd18b; color: #0a1410; }
.danger-btn { background: #a03b3b; color: white; }
.gold-btn { background: #d6b85a; color: #0a1410; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px; }
.three { grid-template-columns: repeat(3, 1fr); }
.box { background: #0a1f18; border: 1px solid #1d4a35; border-radius: 7px; padding: 17px; margin-top: 15px; }
.box h3 { margin-top: 0; font-size: 16px; }
.result { display: none; margin-top: 25px; }
.gate { margin-top: 25px; padding: 18px; border-left: 4px solid #4fd18b; background: #14342a; }
.gate strong { color: #4fd18b; }
.gate.gold { border-left-color: #d6b85a; background: #2a2418; }
.gate.gold strong { color: #d6b85a; }
.hidden { display: none; }
.tool-note { color: #9fc8b3; font-size: 13px; }.adkar-group { margin-top: 15px; padding: 12px; background: #0a1f18; border-left: 3px solid #4fd18b; border-radius: 6px; }
.adkar-group h4 { color: #4fd18b; margin: 10px 0 8px 0; font-size: 14px; }
.adkar-q { display: flex; align-items: center; gap: 10px; padding: 6px 0; border-bottom: 1px dashed #1d4a35; }
.adkar-q:last-child { border-bottom: none; }
.adkar-q label { flex: 1; margin: 0; font-size: 13px; color: #c9e5d5; }
.adkar-q input { width: 70px; margin: 0; text-align: center; padding: 6px; }
.chart-container { background: #0a1f18; border: 1px solid #1d4a35; border-radius: 8px; padding: 20px; margin-top: 15px; display: flex; justify-content: center; align-items: center; }
.chart-container svg { max-width: 100%; height: auto; }
.force-field-viz { background: #0a1f18; border: 1px solid #1d4a35; border-radius: 8px; padding: 20px; margin-top: 15px; }
.timeline { position: relative; padding: 40px 0 30px 0; margin-top: 20px; min-height: 220px; }
.timeline-line { position: absolute; top: 50px; left: 10%; right: 10%; height: 4px; background: linear-gradient(90deg, #4fd18b, #d6b85a, #7ab8e0); z-index: 1; border-radius: 2px; }
.timeline-items { display: flex; justify-content: space-between; position: relative; z-index: 2; }
.timeline-item { flex: 1; text-align: center; padding: 0 10px; }
.timeline-dot { width: 26px; height: 26px; border-radius: 50%; margin: 0 auto 15px; border: 4px solid #0f2520; position: relative; z-index: 3; }
.timeline-dot.phase1 { background: #4fd18b; box-shadow: 0 0 12px rgba(79, 209, 139, 0.5); }
.timeline-dot.phase2 { background: #d6b85a; box-shadow: 0 0 12px rgba(214, 184, 90, 0.5); }
.timeline-dot.phase3 { background: #7ab8e0; box-shadow: 0 0 12px rgba(122, 184, 224, 0.5); }
.timeline-label { color: #4fd18b; font-weight: bold; font-size: 13px; margin-bottom: 5px; }
.timeline-date { color: #9fc8b3; font-size: 12px; }
.timeline-desc { color: #c9e5d5; font-size: 12px; margin-top: 10px; line-height: 1.5; }/* ADKAR */
.adkar-group { margin-top: 15px; padding: 12px; background: #0a1f18; border-left: 3px solid #4fd18b; border-radius: 6px; }
.adkar-group h4 { color: #4fd18b; margin: 0 0 10px 0; font-size: 14px; }
.adkar-q { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px dashed #1d4a35; }
.adkar-q:last-child { border-bottom: none; }
.adkar-q label { flex: 1; margin: 0; font-size: 13px; color: #c9e5d5; }
.adkar-q input { width: 70px; margin: 0; text-align: center; padding: 6px; }

/* Charts */
.chart-container { background: #0a1f18; border: 1px solid #1d4a35; border-radius: 8px; padding: 20px; margin-top: 15px; display: flex; justify-content: center; align-items: center; }
.chart-container svg { max-width: 100%; height: auto; }

/* Force Field Viz */
.force-field-viz { background: #0a1f18; border: 1px solid #1d4a35; border-radius: 8px; padding: 20px; margin-top: 15px; }
.ff-header-row { display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #1d4a35; }
.ff-header-row span { font-weight: bold; color: #4fd18b; font-size: 14px; }
.ff-header-row .restrain-header { color: #ff6b6b; }
.ff-columns { display: flex; gap: 20px; position: relative; }
.ff-column { flex: 1; }
.ff-bar { display: flex; align-items: center; gap: 8px; margin: 8px 0; }
.ff-bar-fill { height: 22px; border-radius: 4px; transition: width 0.4s; }
.ff-bar-fill.drive { background: linear-gradient(90deg, #2d7a4f, #4fd18b); }
.ff-bar-fill.restrain { background: linear-gradient(90deg, #ff6b6b, #a03b3b); }
.ff-bar-label { font-size: 12px; color: #c9e5d5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }
.ff-center-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #d6b85a; transform: translateX(-50%); }

/* Timeline */
.timeline { position: relative; padding: 40px 0; margin-top: 20px; }
.timeline-line { position: absolute; top: 50px; left: 5%; right: 5%; height: 4px; background: linear-gradient(90deg, #4fd18b, #d6b85a, #7ab8e0); z-index: 1; border-radius: 2px; }
.timeline-items { display: flex; justify-content: space-between; position: relative; z-index: 2; }
.timeline-item { flex: 1; text-align: center; padding: 0 10px; }
.timeline-dot { width: 26px; height: 26px; border-radius: 50%; margin: 0 auto 15px; border: 4px solid #0f2520; position: relative; z-index: 3; }
.timeline-dot.phase1 { background: #4fd18b; box-shadow: 0 0 12px rgba(79, 209, 139, 0.5); }
.timeline-dot.phase2 { background: #d6b85a; box-shadow: 0 0 12px rgba(214, 184, 90, 0.5); }
.timeline-dot.phase3 { background: #7ab8e0; box-shadow: 0 0 12px rgba(122, 184, 224, 0.5); }
.timeline-label { color: #4fd18b; font-weight: bold; font-size: 13px; margin-bottom: 5px; }
.timeline-date { color: #9fc8b3; font-size: 12px; }
.timeline-desc { color: #c9e5d5; font-size: 12px; margin-top: 10px; line-height: 1.5; text-align: center; }
label { display: block; margin-top: 10px; color: #c9e5d5; font-size: 14px; }
label.instr { display: flex; align-items: center; padding: 8px 10px; background: #0f2520; border: 1px solid #1d4a35; border-radius: 6px; cursor: pointer; margin: 0; font-size: 13px; }
label.instr:hover { background: #14342a; border-color: #4fd18b; }
label.radio-opt { display: flex; align-items: center; padding: 10px 12px; background: #0f2520; border: 1px solid #1d4a35; border-radius: 6px; cursor: pointer; margin: 0; font-size: 14px; }
label.radio-opt:hover { background: #14342a; border-color: #4fd18b; }
table { border-collapse: collapse; width: 100%; }
th, td { text-align: right; }
.warning { background: #4a1a1a; border: 1px solid #ff6b6b; color: #ffb3b3; padding: 12px; border-radius: 6px; margin-top: 12px; display: none; }
.warning.show { display: block; }
.ok-msg { background: #1a3a1a; border: 1px solid #6bff6b; color: #b3ffb3; padding: 12px; border-radius: 6px; margin-top: 12px; display: none; }
.ok-msg.show { display: block; }
.rec-card { border-left: 4px solid #4fd18b; background: #14342a; padding: 18px; border-radius: 8px; margin-bottom: 20px; }
.rec-card h3 { margin-top: 0; }
.summary-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #1d4a35; }
.summary-row:last-child { border-bottom: none; }
.summary-label { color: #9fc8b3; }
.summary-value { color: #4fd18b; font-weight: bold; }
.progress-bar { position: fixed; top: 0; left: 0; right: 0; height: 4px; background: #0a1410; z-index: 9999; }
.progress-fill { height: 100%; background: linear-gradient(90deg, #4fd18b, #d6b85a); width: 0%; transition: width 0.4s; }
.login-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, #0a1410 0%, #0d1f18 100%); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.login-box { background: #0f2520; border: 2px solid #4fd18b; border-radius: 12px; padding: 40px; max-width: 420px; width: 90%; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
.login-box h1 { color: #4fd18b; font-size: 20px; margin: 0 0 10px 0; line-height: 1.4; }
.login-box p { color: #9fc8b3; font-size: 13px; margin-bottom: 25px; }
.login-box input { width: 100%; padding: 14px; font-size: 15px; text-align: center; letter-spacing: 2px; margin-bottom: 15px; }
.login-box button { width: 100%; padding: 14px; font-size: 15px; margin: 0; }
.login-error { color: #ff6b6b; font-size: 13px; margin-top: 10px; display: none; }
.login-error.show { display: block; }
body.rtl { direction: rtl; }
body.rtl aside { border-right: none; border-left: 1px solid #1d4a35; }
body.rtl .stage { border-left: none; border-right: 3px solid #1d4a35; }
body.rtl .stage.active { border-right-color: #4fd18b; border-left: none; }
body.rtl .box, body.rtl .rec-card, body.rtl .gate, body.rtl .warning, body.rtl .ok-msg { border-left: none; border-right: 4px solid #4fd18b; }
body.rtl .summary-row { flex-direction: row-reverse; }
body.rtl label.instr, body.rtl label.radio-opt { direction: rtl; }
body.rtl input, body.rtl textarea { direction: rtl; text-align: right; }
body.rtl input[type="number"] { direction: ltr; text-align: center; }
.rtl-toggle { position: fixed; bottom: 20px; left: 20px; background: #4fd18b; color: #0a1410; border: none; border-radius: 50%; width: 50px; height: 50px; font-size: 18px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.4); z-index: 9998; padding: 0; margin: 0; }
.rtl-toggle:hover { transform: scale(1.1); opacity: 1; }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.75); display: none; align-items: center; justify-content: center; z-index: 10000; }
.modal-overlay.show { display: flex; }
.modal-box { background: #0f2520; border: 2px solid #4fd18b; border-radius: 12px; padding: 35px; max-width: 620px; width: 90%; max-height: 85vh; overflow-y: auto; text-align: center; }
.modal-box h1 { color: #4fd18b; font-size: 22px; margin: 0 0 5px 0; }
.modal-box .tagline { color: #9fc8b3; font-size: 13px; margin-bottom: 25px; font-style: italic; }
.modal-box .about-section { background: #0a1f18; border: 1px solid #1d4a35; border-radius: 8px; padding: 18px; margin-top: 15px; text-align: left; }
body.rtl .modal-box .about-section { text-align: right; }
.modal-box .about-section h3 { color: #4fd18b; margin-top: 0; font-size: 15px; }
.modal-box .about-section p { color: #c9e5d5; font-size: 14px; line-height: 1.6; margin: 6px 0; }
.modal-box .about-section strong { color: #4fd18b; }
.modal-box .close-btn { margin-top: 20px; width: 100%; padding: 12px; }
.save-status { position: fixed; bottom: 20px; right: 20px; background: #1a3a1a; color: #b3ffb3; border: 1px solid #6bff6b; padding: 10px 16px; border-radius: 6px; font-size: 13px; z-index: 9997; opacity: 0; transition: opacity 0.3s; }
.save-status.show { opacity: 1; }
body.rtl .save-status { right: auto; left: 80px; }
.score-meter { background: #0a1f18; border: 1px solid #1d4a35; border-radius: 8px; padding: 15px; margin-top: 10px; }
.score-meter-header { display: flex; justify-content: space-between; margin-bottom: 8px; }
.score-meter-bar { background: #0a1410; height: 20px; border-radius: 10px; overflow: hidden; }
.score-meter-fill { height: 100%; transition: width 0.5s; }
.score-low { background: #a03b3b; }
.score-med { background: #d6b85a; }
.score-high { background: #4fd18b; }
@media print {
  header, aside, .header-actions, .rtl-toggle, .save-status, .login-overlay, .modal-overlay, button, .progress-bar { display: none !important; }
  body { background: white !important; color: black !important; }
  .layout { display: block !important; }
  main { padding: 0 !important; max-width: 100% !important; }
  .card { display: block !important; page-break-after: always; border: 1px solid #999 !important; background: white !important; color: black !important; margin: 0 0 30px 0 !important; padding: 20px !important; box-shadow: none !important; }
  .card.hidden { display: block !important; }
  .result { display: block !important; }
  h2, h3, .gate strong, .summary-label, .summary-value, .logo-text { color: #2d7a4f !important; }
  .box, .rec-card, .gate, .warning, .ok-msg { border: 1px solid #999 !important; background: #f9f9f9 !important; color: black !important; }
  textarea, input, select { background: white !important; color: black !important; border: 1px solid #999 !important; }
  th, td { border: 1px solid #999 !important; color: black !important; padding: 6px !important; }
}
@media(max-width: 850px) {
  .layout { flex-direction: column; }
  aside { width: 100%; display: flex; overflow-x: auto; }
  .stage { min-width: 180px; }
  main { padding: 15px; }
  .grid, .three { grid-template-columns: 1fr; }
  .header-left { flex-direction: column; align-items: flex-start; }
}
</style>
</head>
<body>

<div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>

<div class="login-overlay" id="loginOverlay">
  <div class="login-box">
    <h1>KHODAIR CHANGE MANAGEMENT TOOLKIT</h1>
    <p>Restricted access — Authorized users only</p>
    <input type="password" id="accessPassword" placeholder="Enter access password" onkeydown="if(event.key==='Enter') checkPassword()">
    <button onclick="checkPassword()">Enter</button>
    <div class="login-error" id="loginError">Incorrect password. Please try again.</div>
  </div>
</div>

<div class="modal-overlay" id="aboutModal">
  <div class="modal-box">
    <h1>KHODAIR CHANGE MANAGEMENT TOOLKIT</h1>
    <p class="tagline">A guided journey from change context to institutional learning</p>

    <div class="about-section">
      <h3>About the Toolkit</h3>
      <p>An interactive 6-stage toolkit that guides change leaders, government officials, and postgraduate students through a disciplined change management process — from understanding the context to embedding lessons learned.</p>
    </div>

    <div class="about-section">
      <h3>Methodology</h3>
      <p>• <strong>Organizational Diagnosis</strong> — Star Model &amp; McKinsey 7S</p>
      <p>• <strong>Change Formulation</strong> — Problem, Vision, Alternatives, Weighted Selection</p>
      <p>• <strong>Stakeholder Analysis</strong> — Influence × Interest Matrix</p>
      <p>• <strong>Resistance Management</strong> — Force Field &amp; Multi-type Classification</p>
      <p>• <strong>Effectiveness Dimensions</strong> — Success, Satisfaction, Impact, Cost, Creativity, Sustainability</p>
      <p>• <strong>Auto-Suggest Engine</strong> — Generates recommendations based on your inputs</p>
    </div>

    <div class="about-section">
      <h3>Developed By</h3>
      <p><strong>Ahmed Mahrous Khodair</strong></p>
      <p>Faculty of Tourism and Hotels, University of Sadat City</p>
    </div>

    <div class="about-section">
      <h3>Version</h3>
      <p><strong>v2.0</strong> — 2026</p>
    </div>

    <button class="close-btn" onclick="closeAbout()">Close</button>
  </div>
</div>

<button class="rtl-toggle" id="rtlToggle" onclick="toggleRTL()" title="Toggle RTL / LTR">ع</button>
<div class="save-status" id="saveStatus">✓ Saved</div>

<header>
  <div class="header-left">
    <svg class="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="none" stroke="#4fd18b" stroke-width="3"/>
      <text x="50" y="50" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="#4fd18b" text-anchor="middle" dominant-baseline="central">K</text>
    </svg>
    <div>
      <div class="logo-text">KHODAIR CHANGE MANAGEMENT TOOLKIT</div>
      <div class="subtitle">From change context to institutional learning</div>
    </div>
  </div>
  <div class="header-actions">
    <button class="secondary" onclick="openAbout()">About</button>
    <button class="secondary" onclick="saveData(true)">Save</button>
    <button class="secondary" onclick="loadData(true)">Load</button>
    <button class="danger-btn" onclick="clearData()">Clear</button>
  </div>
</header>

<div class="layout">
<aside>
  <div class="stage active" id="nav1" onclick="goTo(1)">01 - Change Context</div>
  <div class="stage locked" id="nav2" onclick="goTo(2)">02 - Organizational Diagnosis</div>
  <div class="stage locked" id="nav3" onclick="goTo(3)">03 - Change Formulation</div>
  <div class="stage locked" id="nav4" onclick="goTo(4)">04 - Stakeholders &amp; Communication</div>
  <div class="stage locked" id="nav5" onclick="goTo(5)">05 - Implementation &amp; Resistance</div>
  <div class="stage locked" id="nav6" onclick="goTo(6)">06 - Evaluation &amp; Learning</div>
</aside>

<main><!-- ================= STAGE 1: Change Context ================= -->
<div class="card" id="stage1">
  <h2>01 - Change Context &amp; Urgency</h2>
  <p>Establish the context of change and the sense of urgency before moving to any solution.</p>

  <div class="box">
    <h3>Change Context</h3>
    <label>Organizational Unit</label>
    <textarea id="ctxUnit" placeholder="Which department / unit / organization?"></textarea>
    <label>Current Situation (Point A)</label>
    <textarea id="ctxCurrent" placeholder="Describe the current situation as it is today."></textarea>
    <label>Desired Future State (Point B)</label>
    <textarea id="ctxDesired" placeholder="Describe the desired future state."></textarea>
    <label>Drivers of Change</label>
    <textarea id="ctxDrivers" placeholder="What forces are driving this change? (external / internal)"></textarea>
    <label>Why Now?</label>
    <textarea id="ctxWhyNow" placeholder="Why must change happen now and not later?"></textarea>
    <label>Cost of Inaction</label>
    <textarea id="ctxCostOfInaction" placeholder="What happens if we do nothing?"></textarea>
  </div>

  <div class="box">
    <h3>Types of Change</h3>
    <div class="grid">
      <div>
        <label>Direction</label>
        <label class="radio-opt"><input type="radio" name="ctxDirection" value="Incremental"> Incremental (تدريجي)</label>
        <label class="radio-opt"><input type="radio" name="ctxDirection" value="Radical"> Radical (جذري)</label>
      </div>
      <div>
        <label>Scope</label>
        <label class="radio-opt"><input type="radio" name="ctxScope" value="Partial"> Partial (جزئي)</label>
        <label class="radio-opt"><input type="radio" name="ctxScope" value="Total"> Total (كلي)</label>
      </div>
      <div>
        <label>Purpose</label>
        <label class="radio-opt"><input type="radio" name="ctxPurpose" value="Reactive"> Reactive (علاجي)</label>
        <label class="radio-opt"><input type="radio" name="ctxPurpose" value="Proactive"> Proactive (وقائي)</label>
      </div>
      <div>
        <label>Participation</label>
        <label class="radio-opt"><input type="radio" name="ctxParticipation" value="Top-down"> Top-down (مفروض)</label>
        <label class="radio-opt"><input type="radio" name="ctxParticipation" value="Bottom-up"> Bottom-up (بالمشاركة)</label>
      </div>
    </div>
  </div>

  <button onclick="runContext()">Analyze Context</button>

  <div id="contextResult" class="result">
    <div id="contextSuggestBox" class="box" style="border-left: 4px solid #d6b85a; background: #2a2418;">
      <h3>Suggested Approach</h3>
      <div id="contextSuggest"></div>
    </div>
    <div class="gate">
      <strong>QUALITY GATE 01</strong>
      <p>Change context and urgency established.</p>
      <p>Status: <strong>READY FOR DIAGNOSIS</strong></p>
    </div>
    <button onclick="goTo(2)">Proceed to Diagnosis -></button>
  </div>
</div>

<!-- ================= STAGE 2: Diagnosis ================= -->
<div class="card hidden" id="stage2">
  <h2>02 - Organizational Diagnosis</h2>
  <p>Diagnose the organization using the Star Model and McKinsey 7S to identify gaps and intervention areas.</p>

  <div class="box">
    <h3>Star Model (5 Dimensions)</h3>
    <p class="tool-note">Rate each dimension from 1 (weak) to 5 (strong).</p>
    <div class="grid">
      <div><label>Strategy (الاستراتيجية)</label><input type="number" id="starStrategy" min="1" max="5" value="3" oninput="updateStarScore()"></div>
      <div><label>Structure (الهيكل)</label><input type="number" id="starStructure" min="1" max="5" value="3" oninput="updateStarScore()"></div>
      <div><label>Processes (العمليات)</label><input type="number" id="starProcesses" min="1" max="5" value="3" oninput="updateStarScore()"></div>
      <div><label>Rewards (المكافآت)</label><input type="number" id="starRewards" min="1" max="5" value="3" oninput="updateStarScore()"></div>
      <div><label>People (البشر)</label><input type="number" id="starPeople" min="1" max="5" value="3" oninput="updateStarScore()"></div>
    </div>
    <div id="starScoreDisplay" class="score-meter">
      <div class="score-meter-header"><span>Star Model Average:</span><span id="starScoreValue">3.00 / 5</span></div>
      <div class="score-meter-bar"><div class="score-meter-fill" id="starScoreBar"></div></div>
    </div>
  </div>

  <div class="box">
    <h3>McKinsey 7S Assessment</h3>
    <div class="grid three">
      <div><label>Strategy</label><input type="number" id="s7Strategy" min="1" max="5" value="3"></div>
      <div><label>Structure</label><input type="number" id="s7Structure" min="1" max="5" value="3"></div>
      <div><label>Systems</label><input type="number" id="s7Systems" min="1" max="5" value="3"></div>
      <div><label>Shared Values</label><input type="number" id="s7SharedValues" min="1" max="5" value="3"></div>
      <div><label>Style</label><input type="number" id="s7Style" min="1" max="5" value="3"></div>
      <div><label>Staff</label><input type="number" id="s7Staff" min="1" max="5" value="3"></div>
      <div><label>Skills</label><input type="number" id="s7Skills" min="1" max="5" value="3"></div>
    </div>
    <div id="s7ScoreDisplay" class="score-meter">
      <div class="score-meter-header"><span>7S Average:</span><span id="s7ScoreValue">— / 5</span></div>
      <div class="score-meter-bar"><div class="score-meter-fill" id="s7ScoreBar"></div></div>
    </div>
  </div>

  <div class="box">
    <h3>Gaps &amp; Intervention Areas</h3>
    <label>Key Organizational Gaps</label>
    <textarea id="diagGaps" placeholder="What are the biggest gaps revealed by the diagnosis?"></textarea>
    <label>Priority Intervention Areas</label>
    <textarea id="diagInterventions" placeholder="Where should the change intervention focus first?"></textarea>
    <div class="adkar-group" style="margin-top:20px;">
      <h4>📊 ADKAR Readiness Self-Assessment</h4>
      <p class="tool-note">Rate each from 1 (weak) to 5 (strong).</p>
      <h4 style="color:#d6b85a;">A - Awareness (الوعي)</h4>
      <div class="adkar-q"><label>A1. Employees understand why change is needed.</label><input type="number" id="adkarA1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>A2. The rationale has been communicated.</label><input type="number" id="adkarA2" min="1" max="5" value="3"></div>
      <h4 style="color:#d6b85a;">D - Desire (الرغبة)</h4>
      <div class="adkar-q"><label>D1. Employees are motivated to support the change.</label><input type="number" id="adkarD1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>D2. Personal benefits are clear.</label><input type="number" id="adkarD2" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>D3. Leadership commitment is visible.</label><input type="number" id="adkarD3" min="1" max="5" value="3"></div>
      <h4 style="color:#d6b85a;">K - Knowledge (المعرفة)</h4>
      <div class="adkar-q"><label>K1. Employees know how to implement the change.</label><input type="number" id="adkarK1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>K2. Adequate training is available.</label><input type="number" id="adkarK2" min="1" max="5" value="3"></div>
      <h4 style="color:#d6b85a;">A - Ability (القدرة)</h4>
      <div class="adkar-q"><label>A3. Employees have the skills to apply the change.</label><input type="number" id="adkarA3" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>A4. Time and resources are available.</label><input type="number" id="adkarA4" min="1" max="5" value="3"></div>
      <h4 style="color:#d6b85a;">R - Reinforcement (التعزيز)</h4>
      <div class="adkar-q"><label>R1. Mechanisms exist to sustain the change.</label><input type="number" id="adkarR1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>R2. Successes are recognized and celebrated.</label><input type="number" id="adkarR2" min="1" max="5" value="3"></div>
      <button onclick="calculateADKAR()">Calculate ADKAR Score</button>
      <div id="adkarScoreDisplay" class="score-meter">
        <div class="score-meter-header"><span>ADKAR Readiness:</span><span id="adkarScoreValue">- / 5</span></div>
        <div class="score-meter-bar"><div class="score-meter-fill" id="adkarScoreBar"></div></div>
      </div>
    </div>
  </div>

    <div class="adkar-group" style="margin-top:20px;">
      <h4>📊 ADKAR Readiness Self-Assessment</h4>
      <p class="tool-note">Rate each statement from 1 (strongly disagree) to 5 (strongly agree).</p>
      
      <h4 style="color:#d6b85a; margin-top:15px;">A — Awareness (الوعي)</h4>
      <div class="adkar-q"><label>A1. Employees understand why change is needed.</label><input type="number" id="adkarA1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>A2. The rationale for change has been clearly communicated.</label><input type="number" id="adkarA2" min="1" max="5" value="3"></div>
      
      <h4 style="color:#d6b85a;">D — Desire (الرغبة)</h4>
      <div class="adkar-q"><label>D1. Employees are motivated to support the change.</label><input type="number" id="adkarD1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>D2. Personal benefits of the change are clear.</label><input type="number" id="adkarD2" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>D3. There is visible leadership commitment.</label><input type="number" id="adkarD3" min="1" max="5" value="3"></div>
      
      <h4 style="color:#d6b85a;">K — Knowledge (المعرفة)</h4>
      <div class="adkar-q"><label>K1. Employees know how to implement the change.</label><input type="number" id="adkarK1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>K2. Adequate training is available.</label><input type="number" id="adkarK2" min="1" max="5" value="3"></div>
      
      <h4 style="color:#d6b85a;">A — Ability (القدرة)</h4>
      <div class="adkar-q"><label>A3. Employees have the skills to apply the change.</label><input type="number" id="adkarA3" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>A4. Time and resources are available.</label><input type="number" id="adkarA4" min="1" max="5" value="3"></div>
      
      <h4 style="color:#d6b85a;">R — Reinforcement (التعزيز)</h4>
      <div class="adkar-q"><label>R1. Mechanisms exist to sustain the change.</label><input type="number" id="adkarR1" min="1" max="5" value="3"></div>
      <div class="adkar-q"><label>R2. Successes are recognized and celebrated.</label><input type="number" id="adkarR2" min="1" max="5" value="3"></div>
      
      <button onclick="calculateADKAR()">Calculate ADKAR Score</button>
      <div id="adkarScoreDisplay" class="score-meter">
        <div class="score-meter-header"><span>ADKAR Readiness:</span><span id="adkarScoreValue">— / 5</span></div>
        <div class="score-meter-bar"><div class="score-meter-fill" id="adkarScoreBar"></div></div>
      </div>
    </div>
    <div class="box">
    <h3>📈 Star Model Visualization</h3>
    <button onclick="renderStarChart()">Generate Star Model Radar</button>
    <div id="starChartContainer" class="chart-container hidden"></div>
  </div>
  <div class="box">
    <h3>📈 Star Model Radar Visualization</h3>
    <button onclick="renderStarChart()">Generate Star Radar</button>
    <div id="starChartContainer" class="chart-container hidden"></div>
  </div>
<button onclick="runDiagnosis()">Analyze Diagnosis</button>

  <div id="diagnosisResult" class="result">
    <div id="diagnosisSuggestBox" class="box" style="border-left: 4px solid #d6b85a; background: #2a2418;">
      <h3>Suggested Intervention Focus</h3>
      <div id="diagnosisSuggest"></div>
    </div>
    <div class="gate">
      <strong>QUALITY GATE 02</strong>
      <p>Organizational diagnosis completed.</p>
      <p>Status: <strong>READY FOR CHANGE FORMULATION</strong></p>
    </div>
    <button class="secondary" onclick="goTo(1)"><- Back</button>
    <button onclick="goTo(3)">Proceed to Change Formulation -></button>
  </div>
</div>

<!-- ================= STAGE 3: Change Formulation ================= -->
<div class="card hidden" id="stage3">
  <h2>03 - Change Formulation</h2>
  <p>Define the problem, vision, and alternatives — then select the best intervention using weighted criteria.</p>

  <div class="box">
    <h3>Problem &amp; Vision</h3>
    <label>Core Change Problem</label>
    <textarea id="cfProblem" placeholder="State the central problem that this change will address."></textarea>
    <label>Root Causes</label>
    <textarea id="cfCauses" placeholder="What are the underlying causes?"></textarea>
    <label>Change Vision Statement</label>
    <textarea id="cfVision" placeholder="Write a clear, inspiring vision of the future state."></textarea>
    <label>Objectives (SMART)</label>
    <textarea id="cfObjectives" placeholder="List 3-5 SMART objectives."></textarea>
  </div>

  <div class="box">
    <h3>Alternatives</h3>
    <label>Option A - Description</label>
    <textarea id="cfOptionA" placeholder="Describe alternative A"></textarea>
    <label>Option B - Description</label>
    <textarea id="cfOptionB" placeholder="Describe alternative B"></textarea>
    <label>Option C - Description</label>
    <textarea id="cfOptionC" placeholder="Describe alternative C"></textarea>
  </div>

  <div class="box" style="border-left: 4px solid #d6b85a;">
    <h3>Weighted Decision Matrix</h3>
    <p class="tool-note">Weights must sum to 100. Score each option from 1 to 10.</p>
    <table style="margin-top:10px; font-size: 14px;">
      <thead>
        <tr style="background:#14342a;">
          <th style="padding:8px; border:1px solid #1d4a35;">Criterion</th>
          <th style="padding:8px; border:1px solid #1d4a35;">Weight %</th>
          <th style="padding:8px; border:1px solid #1d4a35;">A</th>
          <th style="padding:8px; border:1px solid #1d4a35;">B</th>
          <th style="padding:8px; border:1px solid #1d4a35;">C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:6px; border:1px solid #1d4a35;">Feasibility</td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfWFeas" value="25" oninput="updateCFWeight()" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfAFeas" value="7" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfBFeas" value="6" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfCFeas" value="8" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #1d4a35;">Impact</td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfWImpact" value="30" oninput="updateCFWeight()" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfAImpact" value="8" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfBImpact" value="9" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfCImpact" value="6" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #1d4a35;">Cost</td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfWCost" value="20" oninput="updateCFWeight()" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfACost" value="6" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfBCost" value="5" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfCCost" value="8" style="margin:0;"></td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #1d4a35;">Acceptability</td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfWAccept" value="25" oninput="updateCFWeight()" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfAAccept" value="5" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfBAccept" value="8" style="margin:0;"></td>
          <td style="border:1px solid #1d4a35;"><input type="number" id="cfCAccept" value="7" style="margin:0;"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr style="background:#14342a; font-weight:bold; color:#4fd18b;">
          <td style="padding:8px; border:1px solid #1d4a35;">Total</td>
          <td style="border:1px solid #1d4a35; padding:6px;"><span id="cfTotalWeight">100</span>%</td>
          <td style="border:1px solid #1d4a35; padding:6px;"><span id="cfScoreA">0</span></td>
          <td style="border:1px solid #1d4a35; padding:6px;"><span id="cfScoreB">0</span></td>
          <td style="border:1px solid #1d4a35; padding:6px;"><span id="cfScoreC">0</span></td>
        </tr>
      </tfoot>
    </table>
    <button onclick="calculateCFMatrix()">Calculate Matrix</button>
    <button class="accent-btn" onclick="autoSuggestFormulation()">Auto-Suggest Recommendation</button>
  </div>

  <div id="cfSuggestBox" class="result">
    <div class="box" style="border-left: 4px solid #6bb85a; background: #0d2a17;">
      <h3>Auto-Generated Recommendation</h3>
      <div id="cfSuggest"></div>
    </div>
  </div>

  <button onclick="runFormulation()">Confirm &amp; Proceed</button>

  <div id="formulationResult" class="result">
    <div class="gate gold">
      <strong>FORMULATION COMPLETE</strong>
      <p>Change formulation completed with vision, alternatives, and selection.</p>
      <p>Status: <strong>READY FOR STAKEHOLDER MAPPING</strong></p>
    </div>
    <button class="secondary" onclick="goTo(2)"><- Back</button>
    <button onclick="goTo(4)">Proceed to Stakeholders -></button>
  </div>
</div>

<!-- ================= STAGE 4: Stakeholders & Communication ================= -->
<div class="card hidden" id="stage4">
  <h2>04 - Stakeholders &amp; Communication</h2>
  <p>Identify stakeholders, plan engagement, and design the communication strategy.</p>

  <div class="box">
    <h3>Stakeholder Registry</h3>
    <label>Key Stakeholders</label>
    <textarea id="shList" placeholder="List all key stakeholders, one per line."></textarea>
  </div>

  <div class="box">
    <h3>Influence × Interest Matrix</h3>
    <label>High Influence × High Interest (Manage Closely)</label>
    <textarea id="shHighHigh" placeholder="Key players - engage closely"></textarea>
    <label>High Influence × Low Interest (Keep Satisfied)</label>
    <textarea id="shHighLow" placeholder="Keep informed, don't overload"></textarea>
    <label>Low Influence × High Interest (Keep Informed)</label>
    <textarea id="shLowHigh" placeholder="Engage as supporters"></textarea>
    <label>Low Influence × Low Interest (Monitor)</label>
    <textarea id="shLowLow" placeholder="Monitor only"></textarea>
  </div>

  <div class="box">
    <h3>Communication Plan</h3>
    <label>Champions (active supporters)</label>
    <textarea id="shChampions" placeholder="Who will champion this change?"></textarea>
    <label>Blockers (active resisters)</label>
    <textarea id="shBlockers" placeholder="Who may actively resist?"></textarea>
    <label>Core Message</label>
    <textarea id="commCoreMessage" placeholder="The single most important message."></textarea>
    <label>Communication Channels</label>
    <textarea id="commChannels" placeholder="Town halls, emails, workshops, etc."></textarea>
    <label>Frequency &amp; Feedback</label>
    <textarea id="commFrequency" placeholder="How often? How will you gather feedback?"></textarea>
  </div>

  <button onclick="runStakeholder()">Analyze Stakeholders</button>

  <div id="stakeholderResult" class="result">
    <div id="stakeholderSuggestBox" class="box" style="border-left: 4px solid #d6b85a; background: #2a2418;">
      <h3>Suggested Engagement Strategy</h3>
      <div id="stakeholderSuggest"></div>
    </div>
    <div class="gate">
      <strong>QUALITY GATE 04</strong>
      <p>Stakeholders mapped and communication plan established.</p>
      <p>Status: <strong>READY FOR IMPLEMENTATION</strong></p>
    </div>
    <button class="secondary" onclick="goTo(3)"><- Back</button>
    <button onclick="goTo(5)">Proceed to Implementation -></button>
  </div>
</div>

<!-- ================= STAGE 5: Implementation & Resistance ================= -->
<div class="card hidden" id="stage5">
  <h2>05 - Implementation &amp; Resistance</h2>
  <p>Plan the implementation and design strategies to manage resistance.</p>

  <div class="box">
    <h3>Implementation Plan</h3>
    <label>Short-term (0-6 months)</label>
    <textarea id="implShort" placeholder="What will happen in the first 6 months?"></textarea>
    <label>Mid-term (6-18 months)</label>
    <textarea id="implMid" placeholder="What will happen in 6-18 months?"></textarea>
    <label>Long-term (18+ months)</label>
    <textarea id="implLong" placeholder="What will happen beyond 18 months?"></textarea>
  </div>

  <div class="box">
    <h3>Responsibilities &amp; Quick Wins</h3>
    <label>Responsibilities</label>
    <textarea id="implResponsibility" placeholder="List responsibilities by role/unit."></textarea>
    <label>Quick Wins Planned</label>
    <textarea id="implQuickWins" placeholder="What early victories will you deliver in the first 3-6 months?"></textarea>
    <button onclick="renderTimeline()">Generate Timeline</button>
    <div id="timelineContainer" class="timeline hidden"></div>
    <button onclick="renderTimeline()">Generate Timeline</button>
    <div id="timelineContainer" class="timeline hidden"></div>
  </div>

  <div class="box">
    <h3>Force Field Analysis</h3>
    <label>Driving Forces (قوى دافعة)</label>
    <textarea id="ffDriving" placeholder="List driving forces, one per line."></textarea>
    <label>Restraining Forces (قوى مقاومة)</label>
    <textarea id="ffRestraining" placeholder="List restraining forces, one per line."></textarea>
    <label>Net Assessment</label>
    <textarea id="ffNet" placeholder="Is the balance in favor of change? What must shift?"></textarea>
    <button onclick="renderForceField()">Visualize Force Field</button>
    <div id="forceFieldContainer" class="force-field-viz hidden"></div>
    <button onclick="renderForceField()">Visualize Force Field</button>
    <div id="forceFieldContainer" class="force-field-viz hidden"></div>
  </div>

  <div class="box">
    <h3>Resistance Types Observed</h3>
    <div class="grid three">
      <label class="instr"><input type="checkbox" id="rtActive"> Active (نشطة)</label>
      <label class="instr"><input type="checkbox" id="rtPassive"> Passive (سلبية)</label>
      <label class="instr"><input type="checkbox" id="rtOpen"> Open (ظاهرة)</label>
      <label class="instr"><input type="checkbox" id="rtHidden"> Hidden (خفية)</label>
      <label class="instr"><input type="checkbox" id="rtCognitive"> Cognitive (معرفية)</label>
      <label class="instr"><input type="checkbox" id="rtEmotional"> Emotional (عاطفية)</label>
      <label class="instr"><input type="checkbox" id="rtBehavioral"> Behavioral (سلوكية)</label>
      <label class="instr"><input type="checkbox" id="rtPolitical"> Political (سياسية)</label>
      <label class="instr"><input type="checkbox" id="rtIndividual"> Individual (فردية)</label>
      <label class="instr"><input type="checkbox" id="rtGroup"> Group (جماعية)</label>
    </div>
  </div>

  <div class="box">
    <h3>Resistance Levels (Rick Maurer)</h3>
    <label>Level 1 - "I don't get it" (Information gap)</label>
    <textarea id="rmLevel1" placeholder="Who doesn't understand? What info do they need?"></textarea>
    <label>Level 2 - "I don't like it" (Emotional reaction)</label>
    <textarea id="rmLevel2" placeholder="Who is emotionally reacting? What are their fears?"></textarea>
    <label>Level 3 - "I don't like you" (Trust issue)</label>
    <textarea id="rmLevel3" placeholder="Who distrusts the leadership? Why?"></textarea>
  </div>

  <button onclick="runImplementation()">Analyze Implementation</button>

  <div id="implementationResult" class="result">
    <div id="implementationSuggestBox" class="box" style="border-left: 4px solid #d6b85a; background: #2a2418;">
      <h3>Suggested Implementation Approach</h3>
      <div id="implementationSuggest"></div>
    </div>
    <div class="gate">
      <strong>QUALITY GATE 05</strong>
      <p>Implementation plan and resistance strategies prepared.</p>
      <p>Status: <strong>READY FOR EVALUATION</strong></p>
    </div>
    <button class="secondary" onclick="goTo(4)"><- Back</button>
    <button onclick="goTo(6)">Proceed to Evaluation -></button>
  </div>
</div>

<!-- ================= STAGE 6: Evaluation & Learning ================= -->
<div class="card hidden" id="stage6">
  <h2>06 - Evaluation &amp; Learning</h2>
  <p>Evaluate across six effectiveness dimensions and capture lessons for future change.</p>

  <div class="box">
    <h3>Six Effectiveness Dimensions</h3>
    <p class="tool-note">Rate each dimension from 1 (poor) to 5 (excellent).</p>
    <div class="grid">
      <div><label>Success (النجاح)</label><input type="number" id="evalSuccess" min="1" max="5" value="3" oninput="updateEvalScore()"></div>
      <div><label>Satisfaction (الرضا)</label><input type="number" id="evalSatisfaction" min="1" max="5" value="3" oninput="updateEvalScore()"></div>
      <div><label>Desired Impact (الأثر)</label><input type="number" id="evalImpact" min="1" max="5" value="3" oninput="updateEvalScore()"></div>
      <div><label>Cost-effectiveness (التكلفة)</label><input type="number" id="evalCost" min="1" max="5" value="3" oninput="updateEvalScore()"></div>
      <div><label>Creativity (الإبداع)</label><input type="number" id="evalCreativity" min="1" max="5" value="3" oninput="updateEvalScore()"></div>
      <div><label>Sustainability (الاستدامة)</label><input type="number" id="evalSustainability" min="1" max="5" value="3" oninput="updateEvalScore()"></div>
    </div>
    <div id="evalScoreDisplay" class="score-meter">
      <div class="score-meter-header"><span>Effectiveness Score:</span><span id="evalScoreValue">3.00 / 5</span></div>
      <div class="score-meter-bar"><div class="score-meter-fill" id="evalScoreBar"></div></div>
    </div>
  </div>

  <div class="box">
    <h3>KPI Assessment</h3>
    <label>KPIs Defined</label>
    <textarea id="evalKPIs" placeholder="List KPIs used to measure success."></textarea>
    <label>Before / After Comparison</label>
    <textarea id="evalBeforeAfter" placeholder="What changed before vs after the intervention?"></textarea>
  </div>

  <div class="box">
    <h3>Learning</h3>
    <label>Single-loop Learning (what to fix)</label>
    <textarea id="learnSingle" placeholder="What actions or assumptions need adjustment?"></textarea>
    <label>Double-loop Learning (what to rethink)</label>
    <textarea id="learnDouble" placeholder="What deeper values or systems need to change?"></textarea>
    <label>Key Lessons Learned</label>
    <textarea id="learnLessons" placeholder="Summarize the most important lessons."></textarea>
    <label>Recommendations for Future Cycles</label>
    <textarea id="learnRecommendations" placeholder="What should be done differently next time?"></textarea>
  </div>

  <button onclick="runEvaluation()">Generate Final Report</button>

  <div id="evaluationResult" class="result">
    <div id="finalReportBox" class="box" style="border-left: 4px solid #6bb85a; background: #0d2a17;">
      <h3>Executive Summary - Auto-Generated</h3>
      <div id="finalReport"></div>
    </div>
    <div class="gate gold">
      <strong>CHANGE CYCLE COMPLETE ✓</strong>
      <p>Evaluation and learning captured for future cycles.</p>
      <p>Status: <strong>READY TO EXPORT</strong></p>
    </div>
    <button class="secondary" onclick="goTo(5)"><- Back</button>
    <button onclick="window.print()">Print / Export Full Report</button>
  </div>
</div>

</main>
</div><script>

// ========== Navigation ==========
function goTo(n) {
  for (let i = 1; i <= 6; i++) {
    const stage = document.getElementById("stage" + i);
    const nav = document.getElementById("nav" + i);
    if (stage) stage.classList.add("hidden");
    if (nav) nav.classList.remove("active");
  }
  const target = document.getElementById("stage" + n);
  const targetNav = document.getElementById("nav" + n);
  if (target) target.classList.remove("hidden");
  if (targetNav) {
    targetNav.classList.remove("locked");
    targetNav.classList.add("active", "unlocked");
  }
  const nextNav = document.getElementById("nav" + (n + 1));
  if (nextNav) nextNav.classList.remove("locked");
  updateProgress();
  window.scrollTo(0, 0);
}

function updateProgress() {
  let current = 1;
  for (let i = 1; i <= 6; i++) {
    const stage = document.getElementById("stage" + i);
    if (stage && !stage.classList.contains("hidden")) { current = i; break; }
  }
  const percent = (current / 6) * 100;
  const fill = document.getElementById("progressFill");
  if (fill) fill.style.width = percent + "%";
}

// ========== STAGE 1: Context Auto-Suggest ==========
function runDiagnosis() {
  const gaps = document.getElementById("diagGaps").value.trim();
  if (!gaps) {
    alert("Please identify at least the key organizational gaps.");
    return;
  }

  const starDims = [
    { name: "الاستراتيجية", val: parseFloat(document.getElementById("starStrategy").value) || 0 },
    { name: "الهيكل", val: parseFloat(document.getElementById("starStructure").value) || 0 },
    { name: "العمليات", val: parseFloat(document.getElementById("starProcesses").value) || 0 },
    { name: "المكافآت", val: parseFloat(document.getElementById("starRewards").value) || 0 },
    { name: "البشر", val: parseFloat(document.getElementById("starPeople").value) || 0 }
  ];
  starDims.sort(function(a, b) { return a.val - b.val; });
  const weakest = starDims.filter(function(d) { return d.val <= 2; });

  const s7Dims = [
    { name: "الاستراتيجية", val: parseFloat(document.getElementById("s7Strategy").value) || 0 },
    { name: "الهيكل", val: parseFloat(document.getElementById("s7Structure").value) || 0 },
    { name: "الأنظمة", val: parseFloat(document.getElementById("s7Systems").value) || 0 },
    { name: "القيم المشتركة", val: parseFloat(document.getElementById("s7SharedValues").value) || 0 },
    { name: "أسلوب القيادة", val: parseFloat(document.getElementById("s7Style").value) || 0 },
    { name: "الكفاءات", val: parseFloat(document.getElementById("s7Staff").value) || 0 },
    { name: "المهارات", val: parseFloat(document.getElementById("s7Skills").value) || 0 }
  ];
  s7Dims.sort(function(a, b) { return a.val - b.val; });

  let suggest = "";
  suggest += "<p><strong>أضعف أبعاد نموذج النجمة:</strong> " + (weakest.length > 0 ? weakest.map(function(d) { return d.name + " (" + d.val + ")"; }).join("، ") : "لا توجد أبعاد حرجة — جاهزية معتدلة.") + "</p>";
  suggest += "<p><strong>أضعف أبعاد نموذج 7S:</strong> " + s7Dims.slice(0, 3).map(function(d) { return d.name + " (" + d.val + ")"; }).join("، ") + "</p>";

  let advice = "";
  if (weakest.length >= 3) {
    advice += "<p>⚠️ <strong>تم رصد ضعف في أبعاد متعددة.</strong> هذا يشير إلى مشكلة نظامية — قد يحتاج الأمر إلى إعادة تصميم تنظيمي شامل، وليس مجرد تدخل منفرد.</p>";
  } else if (weakest.length === 0) {
    advice += "<p>✅ <strong>لا توجد نقاط ضعف حرجة.</strong> المنظمة مستقرة نسبيًا — ركّز على التحسينات التدريجية والتثبيت.</p>";
  } else {
    advice += "<p>🎯 <strong>يُنصح بتدخل مركّز.</strong> اجعل جهد التغيير منصبًا على: " + weakest.map(function(d) { return d.name; }).join("، ") + ".</p>";
  }

  const weakestNames = weakest.map(function(d) { return d.name; });
  if (weakestNames.indexOf("المكافآت") >= 0) {
    advice += "<p>• ضعف المكافآت → فكّر في إدخال <strong>الحوافز وآليات التقدير</strong> قبل مطالبة الموظفين بجهد إضافي.</p>";
  }
  if (weakestNames.indexOf("الهيكل") >= 0) {
    advice += "<p>• ضعف الهيكل → فكّر في <strong>إعادة الهيكلة أو توضيح الأدوار والصلاحيات</strong> قبل تطبيق إجراءات جديدة.</p>";
  }
  if (weakestNames.indexOf("البشر") >= 0 || weakestNames.indexOf("الكفاءات") >= 0 || weakestNames.indexOf("المهارات") >= 0) {
    advice += "<p>• ضعف البشر/المهارات → استثمر في <strong>التدريب وبناء القدرات</strong> كأساس للتغيير.</p>";
  }
  if (weakestNames.indexOf("العمليات") >= 0 || weakestNames.indexOf("الأنظمة") >= 0) {
    advice += "<p>• ضعف العمليات/الأنظمة → قد يحتاج التغيير إلى <strong>تبسيط تشغيلي</strong> أولًا.</p>";
  }

  suggest += "<div style='margin-top:12px;'>" + advice + "</div>";

  document.getElementById("diagnosisSuggest").innerHTML = suggest;
  document.getElementById("diagnosisSuggestBox").style.display = "block";
  document.getElementById("diagnosisResult").style.display = "block";
  autoSave();
  window.scrollTo(0, document.body.scrollHeight);
}

// ========== STAGE 2: Diagnosis Auto-Suggest ==========
function updateStarScore() {
  const dims = ["starStrategy", "starStructure", "starProcesses", "starRewards", "starPeople"];
  let total = 0, count = 0;
  dims.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) { total += parseFloat(el.value) || 0; count++; }
  });
  const avg = count > 0 ? total / count : 0;
  document.getElementById("starScoreValue").innerText = avg.toFixed(2) + " / 5";
  const bar = document.getElementById("starScoreBar");
  bar.style.width = (avg / 5 * 100) + "%";
  bar.className = "score-meter-fill " + (avg < 2.5 ? "score-low" : (avg < 3.5 ? "score-med" : "score-high"));
}

function calculate7S() {
  const dims = ["s7Strategy","s7Structure","s7Systems","s7SharedValues","s7Style","s7Staff","s7Skills"];
  let total = 0;
  dims.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) total += parseFloat(el.value) || 0;
  });
  const avg = total / dims.length;
  document.getElementById("s7ScoreValue").innerText = avg.toFixed(2) + " / 5";
  const bar = document.getElementById("s7ScoreBar");
  bar.style.width = (avg / 5 * 100) + "%";
  bar.className = "score-meter-fill " + (avg < 2.5 ? "score-low" : (avg < 3.5 ? "score-med" : "score-high"));
  autoSave();
}

750// ========== STAGE 3: Formulation Auto-Suggest ==========
function updateCFWeight() {
  const weights = ["cfWFeas","cfWImpact","cfWCost","cfWAccept"];
  let total = 0;
  weights.forEach(function(id) {
    total += parseFloat(document.getElementById(id).value) || 0;
  });
  document.getElementById("cfTotalWeight").innerText = total;
}

function calculateCFMatrix() {
  const rows = [
    { w:"cfWFeas", a:"cfAFeas", b:"cfBFeas", c:"cfCFeas" },
    { w:"cfWImpact", a:"cfAImpact", b:"cfBImpact", c:"cfCImpact" },
    { w:"cfWCost", a:"cfACost", b:"cfBCost", c:"cfCCost" },
    { w:"cfWAccept", a:"cfAAccept", b:"cfBAccept", c:"cfCAccept" }
  ];
  let totalW = 0, totalA = 0, totalB = 0, totalC = 0;
  rows.forEach(function(r) {
    const w = parseFloat(document.getElementById(r.w).value) || 0;
    const a = parseFloat(document.getElementById(r.a).value) || 0;
    const b = parseFloat(document.getElementById(r.b).value) || 0;
    const c = parseFloat(document.getElementById(r.c).value) || 0;
    totalW += w;
    totalA += (w / 100) * a;
    totalB += (w / 100) * b;
    totalC += (w / 100) * c;
  });
  if (totalW > 0 && Math.abs(totalW - 100) > 0.01) {
    const f = 100 / totalW;
    totalA *= f; totalB *= f; totalC *= f;
  }
  document.getElementById("cfTotalWeight").innerText = totalW.toFixed(0);
  document.getElementById("cfScoreA").innerText = totalA.toFixed(2);
  document.getElementById("cfScoreB").innerText = totalB.toFixed(2);
  document.getElementById("cfScoreC").innerText = totalC.toFixed(2);
  autoSave();
  return { A: totalA, B: totalB, C: totalC };
}

function autoSuggestFormulation() {
  const scores = calculateCFMatrix();
  const problem = document.getElementById("cfProblem").value.trim() || "المشكلة المحددة";
  const optA = document.getElementById("cfOptionA").value.trim() || "البديل أ";
  const optB = document.getElementById("cfOptionB").value.trim() || "البديل ب";
  const optC = document.getElementById("cfOptionC").value.trim() || "البديل ج";

  const options = [
    { id: "A", name: optA, score: scores.A },
    { id: "B", name: optB, score: scores.B },
    { id: "C", name: optC, score: scores.C }
  ];
  options.sort(function(x, y) { return y.score - x.score; });
  const best = options[0];
  const second = options[1];

  let suggest = "";
  suggest += "<p><strong>البديل المُوصى به:</strong> <span style='color:#4fd18b; font-size:16px;'>البديل (" + best.id + ") — " + best.name + "</span></p>";
  suggest += "<p><strong>النتيجة المرجّحة:</strong> " + best.score.toFixed(2) + " من 10 (مقابل البديل الثاني (" + second.id + ") بـ " + second.score.toFixed(2) + ")</p>";
  suggest += "<hr style='border-color:#1d4a35; margin:15px 0;'>";
  suggest += "<p><strong>المبرر:</strong></p>";
  suggest += "<p>هذا البديل حقّق أعلى مجموع مرجّح بعد الأخذ في الاعتبار الجدوى، والأثر، والتكلفة، والقبول. وهو يمثل التوازن الأمثل بين معايير القرار.</p>";
  suggest += "<p><strong>صياغة التوصية:</strong></p>";
  suggest += "<p style='line-height:1.7; background:#0a1f18; padding:12px; border-radius:6px; border-left:3px solid #4fd18b;'>لمعالجة " + problem + "، نوصي بتبني <strong>البديل (" + best.id + "): " + best.name + "</strong> كتدخل التغيير الأساسي، وذلك بناءً على أدائه المتفوق في مصفوفة القرار المرجّحة.</p>";

  document.getElementById("cfSuggest").innerHTML = suggest;
  document.getElementById("cfSuggestBox").style.display = "block";
  document.getElementById("cfChosen").value = best.id;
  autoSave();
}
function runFormulation() {
  const problem = document.getElementById("cfProblem").value.trim();
  const vision = document.getElementById("cfVision").value.trim();
  if (!problem || !vision) {
    alert("Please fill at least the Core Problem and Vision.");
    return;
  }
  document.getElementById("formulationResult").style.display = "block";
  autoSave();
  window.scrollTo(0, document.body.scrollHeight);
}

// ========== STAGE 4: Stakeholder Auto-Suggest ==========
function runStakeholder() {
  const list = document.getElementById("shList").value.trim();
  if (!list) {
    alert("Please list at least the key stakeholders.");
    return;
  }

  const highHigh = document.getElementById("shHighHigh").value.trim();
  const highLow = document.getElementById("shHighLow").value.trim();
  const lowHigh = document.getElementById("shLowHigh").value.trim();
  const lowLow = document.getElementById("shLowLow").value.trim();
  const champions = document.getElementById("shChampions").value.trim();
  const blockers = document.getElementById("shBlockers").value.trim();

  let suggest = "";
  suggest += "<p><strong>استراتيجية الإشراك:</strong></p>";
  suggest += "<ul style='line-height:1.9; padding-right:20px;'>";
  if (highHigh) suggest += "<li><strong>إدارة وثيقة</strong> — " + highHigh + ": أشركهم في صنع القرار، واجتمع معهم أسبوعيًا بشكل فردي.</li>";
  if (highLow) suggest += "<li><strong>إبقاء راضين</strong> — " + highLow + ": إحاطات دورية، وإبراز الفوائد المباشرة لهم.</li>";
  if (lowHigh) suggest += "<li><strong>إبقاء على اطلاع</strong> — " + lowHigh + ": نشرات، جلسات جماعية، تمكينهم كسفراء للتغيير.</li>";
  if (lowLow) suggest += "<li><strong>المراقبة</strong> — " + lowLow + ": تواصل عام فقط، لا حاجة لإشراك نشط.</li>";
  suggest += "</ul>";

  suggest += "<hr style='border-color:#1d4a35; margin:15px 0;'>";
  suggest += "<p><strong>منهجية التواصل:</strong></p>";
  if (blockers) {
    suggest += "<p>⚠️ <strong>تم تحديد مقاومين نشطين:</strong> " + blockers + ". تواصل معهم <strong>مبكرًا ومباشرة</strong> قبل الإطلاق العلني. افهم مخاوفهم وشاركهم في الحل قدر المستطاع.</p>";
  }
  if (champions) {
    suggest += "<p>✅ <strong>تم تحديد مؤيدين:</strong> " + champions + ". أبرز دعمهم، امنحهم ظهورًا علنيًا، واستخدمهم كسفراء بين أقرانهم.</p>";
  }
  suggest += "<p>• أرسل رسالة موحّدة من تحالف القيادة.</p>";
  suggest += "<p>• استخدم قنوات متعددة (بريد إلكتروني، اجتماعات عامة، ورش عمل).</p>";
  suggest += "<p>• وفّر قناة تغذية راجعة مجهولة للكشف المبكر عن المقاومة الخفية.</p>";

  document.getElementById("stakeholderSuggest").innerHTML = suggest;
  document.getElementById("stakeholderSuggestBox").style.display = "block";
  document.getElementById("stakeholderResult").style.display = "block";
  autoSave();
  window.scrollTo(0, document.body.scrollHeight);
}
// ========== STAGE 5: Implementation Auto-Suggest ==========
function runImplementation() {
  const short = document.getElementById("implShort").value.trim();
  if (!short) {
    alert("Please provide at least the short-term implementation plan.");
    return;
  }

  // Analyze Force Field
  const driving = document.getElementById("ffDriving").value.trim();
  const restraining = document.getElementById("ffRestraining").value.trim();
  const drivingCount = driving ? driving.split(String.fromCharCode(10)).filter(function(l) { return l.trim(); }).length : 0;
  const restrainingCount = restraining ? restraining.split(String.fromCharCode(10)).filter(function(l) { return l.trim(); }).length : 0;
  const total = drivingCount + restrainingCount;
  const balance = total > 0 ? (drivingCount / total * 100) : 50;

  // Count resistance types
  const resistanceTypes = ["rtActive","rtPassive","rtOpen","rtHidden","rtCognitive","rtEmotional","rtBehavioral","rtPolitical","rtIndividual","rtGroup"];
  let selectedTypes = [];
  resistanceTypes.forEach(function(id) {
    const el = document.getElementById(id);
    if (el && el.checked) {
      selectedTypes.push(el.parentElement.textContent.trim());
    }
  });

  let suggest = "";
  suggest += "<p><strong>Force Field Analysis:</strong></p>";
  suggest += "<p>• Driving forces: <strong>" + drivingCount + "</strong> | Restraining forces: <strong>" + restrainingCount + "</strong></p>";

  const barWidth = Math.min(100, Math.max(0, balance));
  suggest += "<div style='background:#0a1410; height:24px; border-radius:12px; overflow:hidden; margin:10px 0; position:relative;'>";
  suggest += "<div style='height:100%; width:" + barWidth + "%; background:#4fd18b;'></div>";
  suggest += "<div style='position:absolute; top:0; left:" + barWidth + "%; height:100%; width:2px; background:#ff6b6b;'></div>";
  suggest += "</div>";
  suggest += "<p style='font-size:12px; color:#9fc8b3;'>Green = Driving | Red line = Restraining balance point</p>";

  suggest += "<hr style='border-color:#1d4a35; margin:15px 0;'>";
  suggest += "<p><strong>Feasibility Assessment:</strong></p>";
  if (balance >= 65) {
    suggest += "<p>✅ <strong>Strong case for change.</strong> Driving forces significantly outweigh restraining forces. Proceed with implementation confidently, but monitor the strongest restraining force.</p>";
  } else if (balance >= 45) {
    suggest += "<p>⚠️ <strong>Balanced situation.</strong> The change is feasible but fragile. Focus on strengthening driving forces (communication, incentives) and weakening key restraining forces.</p>";
  } else {
    suggest += "<p>🛑 <strong>Change is at risk.</strong> Restraining forces dominate. Do NOT proceed with full implementation yet. Address the top restraining forces first — especially those tied to fear and lack of trust.</p>";
  }

  if (selectedTypes.length > 0) {
    suggest += "<p><strong>Detected Resistance Types:</strong> " + selectedTypes.join(", ") + "</p>";
    suggest += "<p><strong>Suggested Handling:</strong></p>";
    suggest += "<ul style='line-height:1.8; padding-left:20px;'>";
    if (selectedTypes.join(",").indexOf("Active") >= 0 || selectedTypes.join(",").indexOf("Open") >= 0) {
      suggest += "<li><strong>Active/Open resistance:</strong> Engage directly, listen formally, address concerns in writing.</li>";
    }
    if (selectedTypes.join(",").indexOf("Passive") >= 0 || selectedTypes.join(",").indexOf("Hidden") >= 0) {
      suggest += "<li><strong>Passive/Hidden resistance:</strong> Use anonymous surveys, monitor productivity, address rumors proactively.</li>";
    }
    if (selectedTypes.join(",").indexOf("Cognitive") >= 0) {
      suggest += "<li><strong>Cognitive resistance:</strong> Provide data, case studies, and evidence-based briefs.</li>";
    }
    if (selectedTypes.join(",").indexOf("Emotional") >= 0) {
      suggest += "<li><strong>Emotional resistance:</strong> Invest in listening sessions, psychological support, and reassurance about job security.</li>";
    }
    if (selectedTypes.join(",").indexOf("Political") >= 0) {
      suggest += "<li><strong>Political resistance:</strong> Negotiate with power holders, offer alternatives that preserve their influence.</li>";
    }
    if (selectedTypes.join(",").indexOf("Group") >= 0) {
      suggest += "<li><strong>Group resistance:</strong> Involve group representatives in decision-making and create shared interests.</li>";
    }
    suggest += "</ul>";
  }

  document.getElementById("implementationSuggest").innerHTML = suggest;
  document.getElementById("implementationSuggestBox").style.display = "block";
  document.getElementById("implementationResult").style.display = "block";
  autoSave();
  window.scrollTo(0, document.body.scrollHeight);
}

// ========== STAGE 6: Evaluation Auto-Suggest ==========
function updateEvalScore() {
  const dims = ["evalSuccess","evalSatisfaction","evalImpact","evalCost","evalCreativity","evalSustainability"];
  let total = 0, count = 0;
  dims.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) { total += parseFloat(el.value) || 0; count++; }
  });
  const avg = count > 0 ? total / count : 0;
  document.getElementById("evalScoreValue").innerText = avg.toFixed(2) + " / 5";
  const bar = document.getElementById("evalScoreBar");
  bar.style.width = (avg / 5 * 100) + "%";
  bar.className = "score-meter-fill " + (avg < 2.5 ? "score-low" : (avg < 3.5 ? "score-med" : "score-high"));
}

function runEvaluation() {
  const lessons = document.getElementById("learnLessons").value.trim();
  if (!lessons) {
    alert("Please summarize the key lessons learned.");
    return;
  }

  // Gather data from all stages
  const unit = document.getElementById("ctxUnit").value.trim() || "the organizational unit";
  const current = document.getElementById("ctxCurrent").value.trim() || "the previous state";
  const desired = document.getElementById("ctxDesired").value.trim() || "the desired state";
  const problem = document.getElementById("cfProblem").value.trim() || "the identified problem";
  const vision = document.getElementById("cfVision").value.trim() || "the change vision";
  const chosen = document.getElementById("cfChosen").value;
  const short = document.getElementById("implShort").value.trim() || "the short-term plan";
  const quickWins = document.getElementById("implQuickWins").value.trim();

  const dims = {
    Success: parseFloat(document.getElementById("evalSuccess").value) || 0,
    Satisfaction: parseFloat(document.getElementById("evalSatisfaction").value) || 0,
    Impact: parseFloat(document.getElementById("evalImpact").value) || 0,
    Cost: parseFloat(document.getElementById("evalCost").value) || 0,
    Creativity: parseFloat(document.getElementById("evalCreativity").value) || 0,
    Sustainability: parseFloat(document.getElementById("evalSustainability").value) || 0
  };
  const dimNames = Object.keys(dims);
  const avg = dimNames.reduce(function(s, k) { return s + dims[k]; }, 0) / dimNames.length;
  const sorted = dimNames.sort(function(a, b) { return dims[b] - dims[a]; });
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];

  const single = document.getElementById("learnSingle").value.trim();
  const doubleL = document.getElementById("learnDouble").value.trim();
  const recs = document.getElementById("learnRecommendations").value.trim();

  let report = "";
  report += "<h3 style='color:#4fd18b; margin-top:0;'>Executive Summary</h3>";
  report += "<p style='line-height:1.8;'>The <strong>" + unit + "</strong> undertook a structured change initiative to address: <em>" + problem + "</em>. The change moved the organization from <em>" + current + "</em> toward <em>" + desired + "</em>, guided by the vision: <em>" + vision + "</em>.</p>";

  report += "<h3 style='color:#4fd18b;'>Overall Effectiveness</h3>";
  report += "<p style='line-height:1.8;'>Average effectiveness score across six dimensions: <strong style='font-size:16px; color:#4fd18b;'>" + avg.toFixed(2) + " / 5</strong></p>";
  report += "<p>• <strong>Strongest dimension:</strong> " + strongest + " (" + dims[strongest] + "/5)</p>";
  report += "<p>• <strong>Weakest dimension:</strong> " + weakest + " (" + dims[weakest] + "/5) — this is where future attention should focus.</p>";

  report += "<h3 style='color:#4fd18b;'>Implementation Highlights</h3>";
  report += "<p>• Short-term focus: " + short + "</p>";
  if (quickWins) report += "<p>• Quick wins delivered: " + quickWins + "</p>";

  report += "<h3 style='color:#4fd18b;'>Learning</h3>";
  if (single) report += "<p><strong>Single-loop learning (what to fix):</strong> " + single + "</p>";
  if (doubleL) report += "<p><strong>Double-loop learning (what to rethink):</strong> " + doubleL + "</p>";
  report += "<p><strong>Key lessons:</strong> " + lessons + "</p>";
  if (recs) report += "<p><strong>Recommendations for future cycles:</strong> " + recs + "</p>";

  report += "<h3 style='color:#4fd18b;'>Final Assessment</h3>";
  if (avg >= 4) {
    report += "<p style='color:#b3ffb3;'>✅ <strong>Highly successful change initiative.</strong> The change achieved strong results across multiple dimensions. Recommend institutionalizing it and using it as a model for future changes.</p>";
  } else if (avg >= 3) {
    report += "<p style='color:#d6b85a;'>⚠️ <strong>Moderately successful change.</strong> The change delivered results but has room for improvement — especially in " + weakest.toLowerCase() + ". Consider a follow-up cycle to consolidate.</p>";
  } else {
    report += "<p style='color:#ffb3b3;'>🛑 <strong>Change faced significant challenges.</strong> Overall effectiveness was low. Conduct a deep review to identify root causes and consider a redesign.</p>";
  }

  document.getElementById("finalReport").innerHTML = report;
  document.getElementById("finalReportBox").style.display = "block";
  document.getElementById("evaluationResult").style.display = "block";
  autoSave();
  window.scrollTo(0, document.body.scrollHeight);
}

// ========== Utilities ==========
function getRadio(name) {
  const el = document.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : "";
}

// ========== Login ==========
const ACCESS_PASSWORD = "change2026";

function checkPassword() {
  const entered = document.getElementById("accessPassword").value;
  if (entered === ACCESS_PASSWORD) {
    sessionStorage.setItem("khodair_change_auth", "true");
    document.getElementById("loginOverlay").style.display = "none";
  } else {
    document.getElementById("loginError").classList.add("show");
    document.getElementById("accessPassword").value = "";
  }
}

function checkAuthOnLoad() {
  if (sessionStorage.getItem("khodair_change_auth") === "true") {
    document.getElementById("loginOverlay").style.display = "none";
  }
}

// ========== Save / Load ==========
const STORAGE_KEY = "khodair_change_data";

const FIELDS = [
  "ctxUnit","ctxCurrent","ctxDesired","ctxDrivers","ctxWhyNow","ctxCostOfInaction",
  "starStrategy","starStructure","starProcesses","starRewards","starPeople",
  "s7Strategy","s7Structure","s7Systems","s7SharedValues","s7Style","s7Staff","s7Skills",
  "diagGaps","diagInterventions",
  "cfProblem","cfCauses","cfVision","cfObjectives","cfOptionA","cfOptionB","cfOptionC",
  "cfWFeas","cfAFeas","cfBFeas","cfCFeas","cfWImpact","cfAImpact","cfBImpact","cfCImpact",
  "cfWCost","cfACost","cfBCost","cfCCost","cfWAccept","cfAAccept","cfBAccept","cfCAccept",
  "cfChosen","cfJustification",
  "shList","shHighHigh","shHighLow","shLowHigh","shLowLow","shChampions","shBlockers",
  "commCoreMessage","commChannels","commFrequency",
  "implShort","implMid","implLong","implResponsibility","implQuickWins",
  "ffDriving","ffRestraining","ffNet","rmLevel1","rmLevel2","rmLevel3",
  "evalSuccess","evalSatisfaction","evalImpact","evalCost","evalCreativity","evalSustainability",
  "evalKPIs","evalBeforeAfter",
    "learnSingle","learnDouble","learnLessons","learnRecommendations",
  "adkarA1","adkarA2","adkarD1","adkarD2","adkarD3","adkarK1","adkarK2","adkarA3","adkarA4","adkarR1","adkarR2"
];

const RADIO_GROUPS = ["ctxDirection","ctxScope","ctxPurpose","ctxParticipation"];

const CHECKBOXES = [
  "rtActive","rtPassive","rtOpen","rtHidden","rtCognitive","rtEmotional","rtBehavioral","rtPolitical","rtIndividual","rtGroup"
];

function collectData() {
  const data = {};
  FIELDS.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });
  CHECKBOXES.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) data[id] = el.checked;
  });
  RADIO_GROUPS.forEach(function(name) {
    const el = document.querySelector('input[name="' + name + '"]:checked');
    if (el) data["_radio_" + name] = el.value;
  });
  data._currentStage = getCurrentStage();
  data._rtl = document.body.classList.contains("rtl");
  data._savedAt = new Date().toISOString();
  return data;
}

function applyData(data) {
  FIELDS.forEach(function(id) {
    const el = document.getElementById(id);
    if (el && data[id] !== undefined) el.value = data[id];
  });
  CHECKBOXES.forEach(function(id) {
    const el = document.getElementById(id);
    if (el && data[id] !== undefined) el.checked = data[id];
  });
  RADIO_GROUPS.forEach(function(name) {
    const val = data["_radio_" + name];
    if (val) {
      const el = document.querySelector('input[name="' + name + '"][value="' + val + '"]');
      if (el) el.checked = true;
    }
  });
  if (data._rtl) {
    document.body.classList.add("rtl");
    document.getElementById("rtlToggle").innerText = "EN";
  } else {
    document.body.classList.remove("rtl");
    document.getElementById("rtlToggle").innerText = "ع";
  }
  if (data._currentStage) goTo(data._currentStage);
  updateStarScore();
  updateCFWeight();
  updateEvalScore();
}

function saveData(manual) {
  try {
    const data = collectData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    if (manual) showSaveStatus("✓ Saved successfully");
  } catch (e) {
    if (manual) alert("Save failed: " + e.message);
  }
}

function autoSave() {
  saveData(false);
  showSaveStatus("✓ Auto-saved");
}

function loadData(manual) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      if (manual) alert("No saved data found.");
      return;
    }
    const data = JSON.parse(raw);
    applyData(data);
    if (manual) showSaveStatus("✓ Loaded");
  } catch (e) {
    if (manual) alert("Load failed: " + e.message);
  }
}

function clearData() {
  if (!confirm("Are you sure you want to clear all data? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  FIELDS.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  CHECKBOXES.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });
  RADIO_GROUPS.forEach(function(name) {
    document.querySelectorAll('input[name="' + name + '"]').forEach(function(el) { el.checked = false; });
  });
  document.querySelectorAll(".result").forEach(function(el) { el.style.display = "none"; });
  updateStarScore();
  updateCFWeight();
  updateEvalScore();
  goTo(1);
  showSaveStatus("✓ Cleared");
}

function showSaveStatus(msg) {
  const s = document.getElementById("saveStatus");
  s.innerText = msg;
  s.classList.add("show");
  clearTimeout(s._timeout);
  s._timeout = setTimeout(function() {
    s.classList.remove("show");
  }, 2000);
}

function getCurrentStage() {
  for (let i = 1; i <= 6; i++) {
    const stage = document.getElementById("stage" + i);
    if (stage && !stage.classList.contains("hidden")) return i;
  }
  return 1;
}

function attachAutoSaveListeners() {
  FIELDS.forEach(function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", function() {
      clearTimeout(window._autoSaveTimer);
      window._autoSaveTimer = setTimeout(autoSave, 800);
    });
    el.addEventListener("change", function() {
      clearTimeout(window._autoSaveTimer);
      window._autoSaveTimer = setTimeout(autoSave, 300);
    });
  });
  CHECKBOXES.forEach(function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("change", function() {
      clearTimeout(window._autoSaveTimer);
      window._autoSaveTimer = setTimeout(autoSave, 300);
    });
  });
  RADIO_GROUPS.forEach(function(name) {
    document.querySelectorAll('input[name="' + name + '"]').forEach(function(el) {
      el.addEventListener("change", function() {
        clearTimeout(window._autoSaveTimer);
        window._autoSaveTimer = setTimeout(autoSave, 300);
      });
    });
  });
}

function toggleRTL() {
  document.body.classList.toggle("rtl");
  const isRTL = document.body.classList.contains("rtl");
  document.getElementById("rtlToggle").innerText = isRTL ? "EN" : "ع";
  autoSave();
}

function openAbout() {
  document.getElementById("aboutModal").classList.add("show");
}

function closeAbout() {
  document.getElementById("aboutModal").classList.remove("show");
}

document.getElementById("aboutModal").addEventListener("click", function(e) {
  if (e.target === this) closeAbout();
});

window.addEventListener("load", function() {
  checkAuthOnLoad();
  loadData(false);
  updateStarScore();
  updateCFWeight();
  updateEvalScore();
  updateProgress();
  attachAutoSaveListeners();
});

// ========== ADKAR Self-Assessment ==========
function calculateADKAR() {
  const fields = ["adkarA1","adkarA2","adkarD1","adkarD2","adkarD3","adkarK1","adkarK2","adkarA3","adkarA4","adkarR1","adkarR2"];
  let total = 0;
  fields.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) total += parseFloat(el.value) || 0;
  });
  const avg = total / fields.length;
  document.getElementById("adkarScoreValue").innerText = avg.toFixed(2) + " / 5";
  const bar = document.getElementById("adkarScoreBar");
  bar.style.width = (avg / 5 * 100) + "%";
  bar.className = "score-meter-fill " + (avg < 2.5 ? "score-low" : (avg < 3.5 ? "score-med" : "score-high"));

  let verdict = "";
  if (avg >= 4) verdict = "جاهزية عالية — يمكن المضي في التغيير";
  else if (avg >= 3) verdict = "جاهزية متوسطة — يحتاج تعزيز في بعض العناصر";
  else verdict = "جاهزية منخفضة — يجب معالجة الفجوات قبل التنفيذ";

  const adkarBox = document.getElementById("adkarScoreDisplay");
  if (adkarBox && !document.getElementById("adkarVerdict")) {
    const v = document.createElement("p");
    v.id = "adkarVerdict";
    v.style.marginTop = "10px";
    v.style.color = "#d6b85a";
    v.style.fontWeight = "bold";
    adkarBox.appendChild(v);
  }
  const verdictEl = document.getElementById("adkarVerdict");
  if (verdictEl) verdictEl.innerText = verdict;

  autoSave();
}

// ========== Star Model Radar Chart ==========
function renderStarChart() {
  const dims = [
    { name: "Strategy", val: parseFloat(document.getElementById("starStrategy").value) || 0 },
    { name: "Structure", val: parseFloat(document.getElementById("starStructure").value) || 0 },
    { name: "Processes", val: parseFloat(document.getElementById("starProcesses").value) || 0 },
    { name: "Rewards", val: parseFloat(document.getElementById("starRewards").value) || 0 },
    { name: "People", val: parseFloat(document.getElementById("starPeople").value) || 0 }
  ];

  const cx = 200, cy = 200, maxR = 140;
  const n = dims.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  let svg = "<svg viewBox='0 0 400 400' width='400' height='400'>";

  for (let ring = 1; ring <= 5; ring++) {
    const r = (maxR / 5) * ring;
    let points = "";
    for (let i = 0; i < n; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points += x.toFixed(1) + "," + y.toFixed(1) + " ";
    }
    svg += "<polygon points='" + points + "' fill='none' stroke='#1d4a35' stroke-width='1'/>";
  }

  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    const x = cx + maxR * Math.cos(angle);
    const y = cy + maxR * Math.sin(angle);
    svg += "<line x1='" + cx + "' y1='" + cy + "' x2='" + x.toFixed(1) + "' y2='" + y.toFixed(1) + "' stroke='#1d4a35' stroke-width='1'/>";
  }

  let dataPoints = "";
  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    const r = (dims[i].val / 5) * maxR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    dataPoints += x.toFixed(1) + "," + y.toFixed(1) + " ";
  }
  svg += "<polygon points='" + dataPoints + "' fill='rgba(79, 209, 139, 0.3)' stroke='#4fd18b' stroke-width='3'/>";

  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    const r = (dims[i].val / 5) * maxR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    svg += "<circle cx='" + x.toFixed(1) + "' cy='" + y.toFixed(1) + "' r='6' fill='#4fd18b'/>";

    const labelR = maxR + 25;
    const lx = cx + labelR * Math.cos(angle);
    const ly = cy + labelR * Math.sin(angle);
    svg += "<text x='" + lx.toFixed(1) + "' y='" + ly.toFixed(1) + "' fill='#c9e5d5' font-size='12' text-anchor='middle' dominant-baseline='central'>" + dims[i].name + "</text>";
    svg += "<text x='" + lx.toFixed(1) + "' y='" + (ly + 14).toFixed(1) + "' fill='#4fd18b' font-size='11' font-weight='bold' text-anchor='middle'>" + dims[i].val + "/5</text>";
  }

  svg += "</svg>";

  const container = document.getElementById("starChartContainer");
  container.innerHTML = svg;
  container.classList.remove("hidden");
}

// ========== Force Field Visualization ==========
function renderForceField() {
  const drivingText = document.getElementById("ffDriving").value.trim();
  const restrainingText = document.getElementById("ffRestraining").value.trim();
  
  const drivingLines = drivingText ? drivingText.split(String.fromCharCode(10)).filter(function(l) { return l.trim(); }) : [];
  const restrainingLines = restrainingText ? restrainingText.split(String.fromCharCode(10)).filter(function(l) { return l.trim(); }) : [];

  function parseLine(line) {
    const match = line.match(/^(.*?)[\s]*\((\d)\)/);
    if (match) {
      return { text: match[1].trim(), val: parseInt(match[2]) };
    }
    return { text: line.trim(), val: 3 };
  }

  const driving = drivingLines.map(parseLine);
  const restraining = restrainingLines.map(parseLine);

  let html = "";
  html += "<div class='ff-header-row'>";
  html += "<span>← القوى الدافعة (" + driving.length + ")</span>";
  html += "<span class='restrain-header'>القوى المقاومة (" + restraining.length + ") →</span>";
  html += "</div>";

  const maxItems = Math.max(driving.length, restraining.length);
  html += "<div style='display: grid; grid-template-columns: 1fr 1fr; gap: 30px;'>";
  
  html += "<div>";
  driving.forEach(function(d) {
    const w = (d.val / 5) * 100;
    html += "<div style='margin: 8px 0;'>";
    html += "<div style='background: linear-gradient(90deg, #2d7a4f, #4fd18b); height: 22px; width: " + w + "%; border-radius: 4px; margin-left: auto; min-width: 30px;'></div>";
    html += "<div style='font-size: 12px; color: #c9e5d5; margin-top: 3px; text-align: right;'>" + d.text + " <span style='color:#4fd18b;'>(" + d.val + ")</span></div>";
    html += "</div>";
  });
  html += "</div>";

  html += "<div>";
  restraining.forEach(function(r) {
    const w = (r.val / 5) * 100;
    html += "<div style='margin: 8px 0;'>";
    html += "<div style='background: linear-gradient(90deg, #ff6b6b, #a03b3b); height: 22px; width: " + w + "%; border-radius: 4px; min-width: 30px;'></div>";
    html += "<div style='font-size: 12px; color: #c9e5d5; margin-top: 3px;'>" + r.text + " <span style='color:#ff6b6b;'>(" + r.val + ")</span></div>";
    html += "</div>";
  });
  html += "</div>";

  html += "</div>";

  let driveTotal = driving.reduce(function(s, d) { return s + d.val; }, 0);
  let restrainTotal = restraining.reduce(function(s, r) { return s + r.val; }, 0);
  const grand = driveTotal + restrainTotal;
  const drivePct = grand > 0 ? (driveTotal / grand * 100) : 50;

  html += "<div style='margin-top:25px; padding-top:20px; border-top:1px dashed #1d4a35;'>";
  html += "<div style='display:flex; justify-content:space-between; margin-bottom:10px;'>";
  html += "<span style='color:#4fd18b;'>إجمالي الدافعة: <strong>" + driveTotal + "</strong></span>";
  html += "<span style='color:#ff6b6b;'>إجمالي المقاومة: <strong>" + restrainTotal + "</strong></span>";
  html += "</div>";
  html += "<div style='position:relative; height:24px; background:#0a1410; border-radius:12px; overflow:hidden;'>";
  html += "<div style='position:absolute; left:0; top:0; bottom:0; width:" + drivePct.toFixed(0) + "%; background: linear-gradient(90deg, #2d7a4f, #4fd18b);'></div>";
  html += "<div style='position:absolute; left:" + drivePct.toFixed(0) + "%; top:0; bottom:0; width:2px; background:#d6b85a;'></div>";
  html += "</div>";
  html += "<p style='text-align:center; margin-top:8px; color:#9fc8b3; font-size:12px;'>" + drivePct.toFixed(0) + "% من القوى في صالح التغيير</p>";
  html += "</div>";

  const container = document.getElementById("forceFieldContainer");
  container.innerHTML = html;
  container.classList.remove("hidden");
}

// ========== Timeline Visualization ==========
function renderTimeline() {
  const shortText = document.getElementById("implShort").value.trim() || "(لم تُحدّد)";
  const midText = document.getElementById("implMid").value.trim() || "(لم تُحدّد)";
  const longText = document.getElementById("implLong").value.trim() || "(لم تُحدّد)";

  function truncate(text, len) {
    if (text.length <= len) return text;
    return text.substring(0, len) + "...";
  }

  let html = "";
  html += "<div class='timeline-line'></div>";
  html += "<div class='timeline-items'>";

  html += "<div class='timeline-item'>";
  html += "<div class='timeline-dot phase1'></div>";
  html += "<div class='timeline-label'>المرحلة الأولى</div>";
  html += "<div class='timeline-date'>0 - 6 شهور</div>";
  html += "<div class='timeline-desc'>" + truncate(shortText, 120) + "</div>";
  html += "</div>";

  html += "<div class='timeline-item'>";
  html += "<div class='timeline-dot phase2'></div>";
  html += "<div class='timeline-label'>المرحلة الثانية</div>";
  html += "<div class='timeline-date'>6 - 18 شهر</div>";
  html += "<div class='timeline-desc'>" + truncate(midText, 120) + "</div>";
  html += "</div>";

  html += "<div class='timeline-item'>";
  html += "<div class='timeline-dot phase3'></div>";
  html += "<div class='timeline-label'>المرحلة الثالثة</div>";
  html += "<div class='timeline-date'>18+ شهر</div>";
  html += "<div class='timeline-desc'>" + truncate(longText, 120) + "</div>";
  html += "</div>";

  html += "</div>";

  const container = document.getElementById("timelineContainer");
  container.innerHTML = html;
  container.classList.remove("hidden");
}
/// ADKAR Self-Assessment
function calculateADKAR() {
  var fields = ["adkarA1","adkarA2","adkarD1","adkarD2","adkarD3","adkarK1","adkarK2","adkarA3","adkarA4","adkarR1","adkarR2"];
  var total = 0;
  for (var i = 0; i < fields.length; i++) {
    var el = document.getElementById(fields[i]);
    if (el) total = total + (parseFloat(el.value) || 0);
  }
  var avg = total / fields.length;
  document.getElementById("adkarScoreValue").innerText = avg.toFixed(2) + " / 5";
  var bar = document.getElementById("adkarScoreBar");
  bar.style.width = (avg / 5 * 100) + "%";
  if (avg < 2.5) bar.className = "score-meter-fill score-low";
  else if (avg < 3.5) bar.className = "score-meter-fill score-med";
  else bar.className = "score-meter-fill score-high";
  var verdict = "";
  if (avg >= 4) verdict = "High readiness";
  else if (avg >= 3) verdict = "Medium readiness";
  else verdict = "Low readiness";
  alert("ADKAR Score: " + avg.toFixed(2) + " / 5 - " + verdict);
  autoSave();
}

// Star Model Radar Chart
function renderStarChart() {
  var dims = [
    { name: "Strategy", val: parseFloat(document.getElementById("starStrategy").value) || 0 },
    { name: "Structure", val: parseFloat(document.getElementById("starStructure").value) || 0 },
    { name: "Processes", val: parseFloat(document.getElementById("starProcesses").value) || 0 },
    { name: "Rewards", val: parseFloat(document.getElementById("starRewards").value) || 0 },
    { name: "People", val: parseFloat(document.getElementById("starPeople").value) || 0 }
  ];
  var cx = 200, cy = 200, maxR = 130;
  var n = dims.length;
  var angleStep = (2 * Math.PI) / n;
  var startAngle = -Math.PI / 2;
  var svg = "<svg viewBox='0 0 400 400' width='400' height='400'>";
  for (var ring = 1; ring <= 5; ring++) {
    var r = (maxR / 5) * ring;
    var points = "";
    for (var i = 0; i < n; i++) {
      var angle = startAngle + i * angleStep;
      var x = cx + r * Math.cos(angle);
      var y = cy + r * Math.sin(angle);
      points += x.toFixed(1) + "," + y.toFixed(1) + " ";
    }
    svg += "<polygon points='" + points + "' fill='none' stroke='#1d4a35' stroke-width='1'/>";
  }
  for (var i = 0; i < n; i++) {
    var angle = startAngle + i * angleStep;
    var x = cx + maxR * Math.cos(angle);
    var y = cy + maxR * Math.sin(angle);
    svg += "<line x1='" + cx + "' y1='" + cy + "' x2='" + x.toFixed(1) + "' y2='" + y.toFixed(1) + "' stroke='#1d4a35' stroke-width='1'/>";
  }
  var dataPoints = "";
  for (var i = 0; i < n; i++) {
    var angle = startAngle + i * angleStep;
    var r = (dims[i].val / 5) * maxR;
    var x = cx + r * Math.cos(angle);
    var y = cy + r * Math.sin(angle);
    dataPoints += x.toFixed(1) + "," + y.toFixed(1) + " ";
  }
  svg += "<polygon points='" + dataPoints + "' fill='rgba(79, 209, 139, 0.3)' stroke='#4fd18b' stroke-width='3'/>";
  for (var i = 0; i < n; i++) {
    var angle = startAngle + i * angleStep;
    var r = (dims[i].val / 5) * maxR;
    var x = cx + r * Math.cos(angle);
    var y = cy + r * Math.sin(angle);
    svg += "<circle cx='" + x.toFixed(1) + "' cy='" + y.toFixed(1) + "' r='6' fill='#4fd18b'/>";
    var labelR = maxR + 30;
    var lx = cx + labelR * Math.cos(angle);
    var ly = cy + labelR * Math.sin(angle);
    svg += "<text x='" + lx.toFixed(1) + "' y='" + ly.toFixed(1) + "' fill='#c9e5d5' font-size='12' text-anchor='middle' dominant-baseline='central'>" + dims[i].name + "</text>";
    svg += "<text x='" + lx.toFixed(1) + "' y='" + (ly + 14).toFixed(1) + "' fill='#4fd18b' font-size='11' font-weight='bold' text-anchor='middle'>" + dims[i].val + "/5</text>";
  }
  svg += "</svg>";
  var container = document.getElementById("starChartContainer");
  container.innerHTML = svg;
  container.classList.remove("hidden");
}

// Force Field Visualization
function renderForceField() {
  var drivingText = document.getElementById("ffDriving").value.trim();
  var restrainingText = document.getElementById("ffRestraining").value.trim();
  var newline = String.fromCharCode(10);
  var drivingLines = drivingText ? drivingText.split(newline).filter(function(l) { return l.trim(); }) : [];
  var restrainingLines = restrainingText ? restrainingText.split(newline).filter(function(l) { return l.trim(); }) : [];
  function parseLine(line) {
    var match = line.match(/^(.*?)[\s]*\((\d)\)/);
    if (match) {
      return { text: match[1].trim(), val: parseInt(match[2]) };
    }
    return { text: line.trim(), val: 3 };
  }
  var driving = drivingLines.map(parseLine);
  var restraining = restrainingLines.map(parseLine);
  var html = "";
  html += "<div style='display:grid; grid-template-columns: 1fr 1fr; gap: 30px;'>";
  html += "<div>";
  html += "<h4 style='color:#4fd18b; margin: 0 0 12px 0; text-align: right;'>Driving Forces (" + driving.length + ")</h4>";
  driving.forEach(function(d) {
    var w = (d.val / 5) * 100;
    html += "<div style='margin: 8px 0;'>";
    html += "<div style='background: linear-gradient(90deg, #2d7a4f, #4fd18b); height: 22px; width: " + w + "%; border-radius: 4px; margin-left: auto; min-width: 30px;'></div>";
    html += "<div style='font-size: 12px; color: #c9e5d5; margin-top: 3px; text-align: right;'>" + d.text + " <span style='color:#4fd18b;'>(" + d.val + ")</span></div>";
    html += "</div>";
  });
  html += "</div>";
  html += "<div>";
  html += "<h4 style='color:#ff6b6b; margin: 0 0 12px 0; text-align: left;'>Restraining Forces (" + restraining.length + ")</h4>";
  restraining.forEach(function(r) {
    var w = (r.val / 5) * 100;
    html += "<div style='margin: 8px 0;'>";
    html += "<div style='background: linear-gradient(90deg, #a03b3b, #ff6b6b); height: 22px; width: " + w + "%; border-radius: 4px; min-width: 30px;'></div>";
    html += "<div style='font-size: 12px; color: #c9e5d5; margin-top: 3px;'>" + r.text + " <span style='color:#ff6b6b;'>(" + r.val + ")</span></div>";
    html += "</div>";
  });
  html += "</div>";
  html += "</div>";
  var driveTotal = driving.reduce(function(s, d) { return s + d.val; }, 0);
  var restrainTotal = restraining.reduce(function(s, r) { return s + r.val; }, 0);
  var grand = driveTotal + restrainTotal;
  var drivePct = grand > 0 ? (driveTotal / grand * 100) : 50;
  html += "<div style='margin-top:25px; padding-top:20px; border-top:1px dashed #1d4a35;'>";
  html += "<div style='display:flex; justify-content:space-between; margin-bottom:10px;'>";
  html += "<span style='color:#4fd18b;'>Driving total: <strong>" + driveTotal + "</strong></span>";
  html += "<span style='color:#ff6b6b;'>Restraining total: <strong>" + restrainTotal + "</strong></span>";
  html += "</div>";
  html += "<div style='position:relative; height:24px; background:#0a1410; border-radius:12px; overflow:hidden;'>";
  html += "<div style='position:absolute; left:0; top:0; bottom:0; width:" + drivePct.toFixed(0) + "%; background: linear-gradient(90deg, #2d7a4f, #4fd18b);'></div>";
  html += "<div style='position:absolute; left:" + drivePct.toFixed(0) + "%; top:0; bottom:0; width:2px; background:#d6b85a;'></div>";
  html += "</div>";
  html += "<p style='text-align:center; margin-top:8px; color:#9fc8b3; font-size:12px;'>" + drivePct.toFixed(0) + "% of forces favor change</p>";
  html += "</div>";
  var container = document.getElementById("forceFieldContainer");
  container.innerHTML = html;
  container.classList.remove("hidden");
}

// Timeline Visualization
function renderTimeline() {
  var shortText = document.getElementById("implShort").value.trim() || "(not set)";
  var midText = document.getElementById("implMid").value.trim() || "(not set)";
  var longText = document.getElementById("implLong").value.trim() || "(not set)";
  function truncate(text, len) {
    if (text.length <= len) return text;
    return text.substring(0, len) + "...";
  }
  var html = "";
  html += "<div class='timeline-line'></div>";
  html += "<div class='timeline-items'>";
  html += "<div class='timeline-item'>";
  html += "<div class='timeline-dot phase1'></div>";
  html += "<div class='timeline-label'>Phase 1</div>";
  html += "<div class='timeline-date'>0 - 6 months</div>";
  html += "<div class='timeline-desc'>" + truncate(shortText, 120) + "</div>";
  html += "</div>";
  html += "<div class='timeline-item'>";
  html += "<div class='timeline-dot phase2'></div>";
  html += "<div class='timeline-label'>Phase 2</div>";
  html += "<div class='timeline-date'>6 - 18 months</div>";
  html += "<div class='timeline-desc'>" + truncate(midText, 120) + "</div>";
  html += "</div>";
  html += "<div class='timeline-item'>";
  html += "<div class='timeline-dot phase3'></div>";
  html += "<div class='timeline-label'>Phase 3</div>";
  html += "<div class='timeline-date'>18+ months</div>";
  html += "<div class='timeline-desc'>" + truncate(longText, 120) + "</div>";
  html += "</div>";
  html += "</div>";
  var container = document.getElementById("timelineContainer");
  container.innerHTML = html;
  container.classList.remove("hidden");
}</script>

</body>
</html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log("KHODAIR CHANGE MANAGEMENT TOOLKIT running on port " + PORT);
});
module.exports = app;