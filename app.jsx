const { useState, useMemo } = React;

function TelecomMaterialCalculator() {
  const [siteType, setSiteType] = useState("civil");
  const [canopy, setCanopy] = useState("included");
  const [cableRun, setCableRun] = useState(60);
  const [microwave, setMicrowave] = useState("no");
  const [siteId, setSiteId] = useState("");

  const isMicrowave = microwave === "yes";
  const pvc3Length = useMemo(() => Math.ceil((Number(cableRun) || 0) / 10) * 10, [cableRun]);
  const pvc2Length = useMemo(() => (isMicrowave ? 60 : (Number(cableRun) || 0) + 60), [cableRun, isMicrowave]);

  const wireItems = useMemo(() => ([
    { name: `(${cableRun} ft) THHN 3/0 Red, Stranded Copper`, qty: 1 },
    { name: `(${cableRun} ft) THHN 3/0 Black, Stranded Copper (x2)`, qty: 1 },
    { name: `(${cableRun} ft) THHN 2 Green, Stranded Copper`, qty: 1 },
    { name: `(50 ft) THHN 3/0 Red, Stranded Copper`, qty: 1 },
    { name: `(50 ft) THHN 3/0 Black, Stranded Copper`, qty: 1 },
    { name: `(50 ft) THHN 2 Green, Stranded Copper`, qty: 1 },
    { name: `(50 ft) THHN 6 Green, Stranded Copper`, qty: 1 },
    { name: `(300 ft) BCW 2 SOL Tinned Bare Copper`, qty: 1 },
  ]), [cableRun]);

  const electricalItems = [
    { name: "QO120 BREAKER", qty: 2 },
    { name: "PAS 2097W 20A 125V GFCI Receptacle", qty: 1 },
    { name: "Single-Pole Timer", qty: 1 },
    { name: "2-Gang Extra Duty Horizontal/Vertical Non-Metallic Weatherproof In-Use Cover", qty: 1 },
    { name: "2-Gang Metallic Weatherproof Box with (5) 1/2 in. Holes", qty: 1 },
    { name: "EGS WRX50 ROUND WPRF BOX 5-1/2", qty: 2 },
    { name: "WESTGATE SL-20W-50K-WH-D (Light Fixture)", qty: 2 },
  ];

  const groundingItems = [
    { name: "GRD 581 5/8\" x 10' Ground Rods", qty: 4 },
    { name: "BUR GC22A Ground Clamps (for 6 AWG to 250 kcmil wire, 2-1/2\" to 4\" pipe)", qty: 2 },
    { name: "BUR GC18A Mechanical Grounding Connectors (for 6 AWG to 250 kcmil wire, 1-1/4\" to 2\" pipe)", qty: 12 },
  ];

  const conduitItems = useMemo(() => ([
    { name: 'PVC 3" Conduit', qty: `${pvc3Length} ft` },
    { name: 'GAL 3" Galvanized Conduit', qty: '10 ft' },
    { name: 'MADISON MNT-2757 3" Rigid Compression Connector', qty: 2 },
    { name: 'EGS HUB300DN 3" Zinc Die-Cast Hub', qty: 2 },
    { name: 'FTG 3" Galvanized 90-Degree Elbow', qty: 2 },
    { name: '3" PVC coupling', qty: 10 },
    { name: '3" PVC Female Adapter', qty: 2 },
    { name: '3" PVC 90-degree Elbow', qty: 4 },
    { name: 'PVC 2" Conduit', qty: `${pvc2Length} ft` },
    { name: 'GAL 2" Galvanized Conduit', qty: '90 ft' },
    { name: 'PVC 2" 90-Degree Elbow', qty: 28 },
    { name: 'PVC 2" 45-Degree Elbow', qty: 9 },
    { name: '2" Galvanized 90-Degree Elbow', qty: 21 },
    { name: 'PVC 2" Female Adapter', qty: 10 },
    { name: '2" rigid conduit coupling', qty: 12 },
    { name: '2" rigid compression connectors straight', qty: 21 },
    { name: '2" rigid myers hub', qty: 21 },
    { name: '2" Conduit body threaded for rigid conduit LR', qty: 3 },
    { name: '2" Conduit body threaded for rigid conduit LB', qty: 3 },
    { name: 'PVC 2" Coupling', qty: 28 },
    { name: '2" Close Nipple', qty: 8 },
    { name: 'FTG 2" x 6" Nipple', qty: 4 },
    { name: 'FTG 2" x 8" Nipple', qty: 2 },
    { name: 'EGS HUB125DN 1-1/4" Zinc Die-Cast Hub', qty: 6, microwave: false },
    { name: 'LQT 1-1/4" Non-Metallic Sealtight Conduit', qty: '30 ft', microwave: false },
    { name: 'TPZ P474 1-1/4" Non-Metallic Sealtight Straight Connector', qty: 6, microwave: false },
    { name: 'GAL 1/2" Galvanized Conduit', qty: '40 ft' },
    { name: 'PVC 1/2" Conduit', qty: '20 ft' },
    { name: 'PVC 1/2" 90-degree Elbow', qty: 4 },
    { name: 'Rigid 1/2" 90-degree Elbow', qty: 4 },
    { name: 'PVC 1/2" coupling', qty: 10 },
    { name: '1/2" PVC Female adapter', qty: 3 },
    { name: 'MAD MNT2750-B 1/2" No-Thread Connector', qty: 10 },
    { name: 'FTG 1/2" Close Nipple', qty: 2 },
    { name: '1/2" rigid threaded coupling', qty: 2 },
    { name: '1/2" liquid tight conduit', qty: '100 ft' },
    { name: '1/2" Myers Hub', qty: 5 },
    { name: '1/2" liquid tight straight connector', qty: 5 },
  ]), [pvc2Length, pvc3Length]);

  const mountingItems = [
    { name: 'HAY H-134-OS 1-5/8" x 10\' Deep Slotted Strut, 14 GA', qty: '110 ft' },
    { name: 'HAY H-164-OS 1-5/8" x 10\' Shallow Strut, 13/16", 14 GA', qty: '10 ft' },
    { name: 'HAY C-1104 x 2" EG Strut Strap', qty: 20 },
    { name: 'HAY C-1102 x 3" EG Strut Strap', qty: 2 },
    { name: 'HAY C-1104 x 1/2" EG Strut Strap', qty: 12 },
    { name: '1-1/4 strut strap', qty: 6, microwave: false },
    { name: 'Conduit & Pipe Strap Clamp, One-Hole (1/2" Trade Size, Steel, EMT)', qty: 6 },
  ];

  const miscItems = [
    { name: 'IDE 31-601 1 lb. Duct Seal', qty: 7 },
    { name: 'Master Ground Bar + 2 Cherry(for each ground bar)', qty: 2 },
    { name: 'Gray Lugs for solid', qty: 14 },
    { name: 'Gray Lugs for Cabinet', qty: 2 },
    { name: '200Amp Breaker', qty: 1 },
    { name: 'U-strut caps', qty: 30 },
    { name: 'Spring Nuts', qty: 30 },
    { name: 'Ground clamps for Frame', qty: 2 },
    { name: '5 amp FUSE', qty: 3, microwave: false },
    { name: '1/2" LB, LL, LR', qty: 1 },
    { name: 'Trim Block', qty: 1, microwave: false },
    { name: 'Cadweld shots', qty: '4 packs' },
    { name: 'Block 66', qty: 1 },
    { name: 'Gaskets', qty: 22 },
    { name: 'Telco Box', qty: 1 },
    { name: 'Ground bar for Telco', qty: 1 },
    { name: 'Tmobile label', qty: 1 },
    { name: 'Post shoe', qty: 1 },
    { name: '3" U-Bolts', qty: 20 },
    { name: 'Building Permit (need to Print)', qty: 1 },
    { name: 'Green cap for 6" PVC Pipe', qty: 1 },
  ];

  const sections = [
    { title: 'Wire (THHN - Copper)', items: wireItems },
    { title: 'Electrical Components', items: electricalItems },
    { title: 'Grounding Materials', items: groundingItems },
    { title: 'Conduit and Conduit Accessories', items: conduitItems },
    { title: 'Mounting, Strut, and Support Materials', items: mountingItems },
    { title: 'Miscellaneous Components', items: miscItems },
  ];

  function isExcluded(item) {
    return isMicrowave && item?.microwave === false;
  }

  const siteInfoLine = `Site: ${siteId || 'N/A'} | Type: ${siteType.toUpperCase()} | Canopy: ${canopy.toUpperCase()} | Cable Run: ${cableRun} ft | Microwave: ${isMicrowave ? 'YES' : 'NO'}`;

  const printableText = useMemo(() => {
    let text = `Material List - ${siteInfoLine}\n\n`;
    for (const s of sections) {
      text += `${s.title}:\n`;
      s.items.forEach((item, idx) => {
        if (!isExcluded(item)) {
          text += `${idx + 1}. ${item.name} - ${item.qty}\n`;
        }
      });
      text += "\n";
    }
    return text;
  }, [sections, siteInfoLine, microwave]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(printableText);
      alert("Material list copied to clipboard!");
    } catch (e) {
      console.error(e);
      alert("Copy failed. Your browser may block clipboard access.");
    }
  }

  function handleDownload() {
    const blob = new Blob([printableText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const name = siteId ? `material_list_${siteId}.txt` : "material_list.txt";
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function handlePrint() {
    const w = window.open("", "_blank");
    if (!w) return;
    const safe = printableText.replace(/\n/g, "<br/>");
    w.document.write(`<html><head><title>Material List</title></head><body style="font-family:Arial, sans-serif; padding:24px; white-space:normal;">`);
    w.document.write(`<h2>🗼 Telecom Site Material List</h2><div>${safe}</div>`);
    w.document.write("</body></html>");
    w.document.close();
    w.focus();
    w.print();
  }

  function savePreset() {
    const preset = { siteType, canopy, cableRun, microwave, siteId };
    localStorage.setItem("telecom_calc_preset", JSON.stringify(preset));
    alert("Preset saved.");
  }

  function loadPreset() {
    const raw = localStorage.getItem("telecom_calc_preset");
    if (!raw) return alert("No preset saved yet.");
    try {
      const p = JSON.parse(raw);
      setSiteType(p.siteType ?? "civil");
      setCanopy(p.canopy ?? "included");
      setCableRun(Number(p.cableRun ?? 60));
      setMicrowave(p.microwave ?? "no");
      setSiteId(p.siteId ?? "");
    } catch (e) {
      alert("Failed to load preset.");
    }
  }

  return (
    <div className="container">
      <h1>🗼 Telecom Site Material Calculator</h1>
      <fieldset>
        <legend>Site Specifications</legend>
        <div>
          <label>Site Type </label>
          <select value={siteType} onChange={e => setSiteType(e.target.value)}>
            <option value="civil">Civil</option>
            <option value="tower">Tower</option>
          </select>
        </div>
        <div>
          <label>Canopy </label>
          <select value={canopy} onChange={e => setCanopy(e.target.value)}>
            <option value="included">Included (order with civil)</option>
            <option value="separate">Separate order</option>
          </select>
        </div>
        <div>
          <label>Cable Run Length (feet) </label>
          <input type="number" min="10" max="500" value={cableRun} onChange={e => setCableRun(Number(e.target.value))} />
          <div style={{ fontSize: '0.8rem', color: '#555' }}>
            3" PVC rounded up to nearest 10 ft. 2" PVC is cable run + 60 ft (or 60 ft if microwave).
          </div>
        </div>
        <div>
          <label>Microwave Site </label>
          <select value={microwave} onChange={e => setMicrowave(e.target.value)}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label>Site ID (optional) </label>
          <input value={siteId} onChange={e => setSiteId(e.target.value)} placeholder="e.g., 9AT7217A" />
        </div>
      </fieldset>

      <div>
        <button onClick={() => {}}>Generate</button>
        <button onClick={handleCopy}>Copy List</button>
        <button onClick={handleDownload}>Download .txt</button>
        <button onClick={handlePrint}>Print</button>
        <button onClick={savePreset}>Save Preset</button>
        <button onClick={loadPreset}>Load Preset</button>
      </div>

      <div className="site-info">
        <strong>Site:</strong> {siteId || 'N/A'} | <strong>Type:</strong> {siteType.toUpperCase()} | <strong>Canopy:</strong> {canopy.toUpperCase()} | <strong>Cable Run:</strong> {cableRun} ft | <strong>Microwave:</strong> {isMicrowave ? 'YES' : 'NO'}
      </div>

      {sections.map(section => (
        <div key={section.title} className="section">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, idx) => {
              const excluded = isExcluded(item);
              return (
                <li key={idx} className={excluded ? 'excluded' : ''}>
                  <span>{idx + 1}. {item.name}</span>
                  <span className="qty">{String(item.qty)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TelecomMaterialCalculator />);
