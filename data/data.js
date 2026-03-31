// Lern-App Datenbank

const FAECHER = {
  "steuerrecht": {
    name: "Steuerrecht",
    icon: "\u2696\uFE0F",
    color: "#3B82F6",
    colorLight: "#DBEAFE",
    themen: {}
  },
  "rechnungslegung": {
    name: "Rechnungslegung",
    icon: "\uD83D\uDCCA",
    color: "#10B981",
    colorLight: "#D1FAE5",
    themen: {}
  },
  "winf-seidlmeier": {
    name: "Wirtschaftsinformatik \u2013 Seidlmeier",
    icon: "\uD83D\uDCBB",
    color: "#8B5CF6",
    colorLight: "#EDE9FE",
    themen: {}
  },
  "winf-kuehn": {
    name: "Wirtschaftsinformatik \u2013 K\u00FChn",
    icon: "\uD83D\uDD27",
    color: "#F59E0B",
    colorLight: "#FEF3C7",
    themen: {}
  }
};

// ============================================================
// RECHNUNGSLEGUNG - Konzernrechnungslegung Grundlagen
// ============================================================
FAECHER["rechnungslegung"].themen["konzernrechnungslegung-grundlagen"] = {
  name: "Konzernrechnungslegung – Grundlagen",
  zusammenfassung: "Die Konzernrechnungslegung regelt die konsolidierte Betrachtung von Unternehmensgruppen. Sie umfasst Rechtsgrundlagen, Konzernarten und die Pflicht zur Konsolidierung nach Größe und Struktur der Gruppe.",
  erklaerungen: [
    {
      titel: "📚 Grundlagen der Konzernrechnungslegung",
      inhalt: `<p>Die <strong>Konzernrechnungslegung</strong> stellt eine Unternehmensgruppe als wirtschaftliche Einheit dar. Sie erfasst die <strong>Muttergesellschaft</strong> und alle <strong>Tochterunternehmen</strong> als konsolidierte Gesamtheit.</p>
<div class="def-box"><div class="def-label">Konzernrechnungslegung</div>Rechnungslegung einer Unternehmensgruppe, die die wirtschaftliche Realität einer zusammenhängenden Unternehmensorganisation widerspiegelt und mehrere separate Einzelunternehmen als eine Einheit behandelt.</div>
<h5>Rechtsgrundlagen</h5>
<ul>
<li><strong>HGB (deutsches Recht):</strong> §§ 290-313 für die Konzernbilanz und Konzerngewinn- und Verlustrechnung</li>
<li><strong>IFRS (international):</strong> IFRS 10 für Konsolidierung, IFRS 12 für Angabepflichten</li>
<li><strong>EU-Richtlinie:</strong> Konzernrichtlinie 2013/34/EU für europäische Harmonisierung</li>
</ul>`,
      beispiel: "Beispiel: Die Daimler AG als Muttergesellschaft mit ihren zahlreichen Töchtern (Mercedes-Benz, Vito, Sprinter) wird in der Konzernbilanz als eine wirtschaftliche Einheit dargestellt, obwohl es rechtlich separate Unternehmen sind.",
      merke: "Konzernrechnungslegung = wirtschaftliche Einheit statt rechtliche Einzelunternehmen.",
      flipcards: [
        { vorne: "Muttergesellschaft", hinten: "Unternehmen, das ein oder mehrere andere Unternehmen kontrolliert" },
        { vorne: "Tochtergesellschaft", hinten: "Unternehmen, das unter der Kontrolle einer Muttergesellschaft steht" },
        { vorne: "Konsolidierung", hinten: "Zusammenfassung von Einzel- zu Konzernabschlüssen" }
      ],
      details: [
        { titel: "📖 Konzernarten nach Struktur", inhalt: "Vertikal integrierte Konzerne (Muttergesellschaft auf der Spitze), Horizontale Konzerne (Unternehmen gleicher Ebene), Diagonale Konzerne (gemischte Struktur), Finanzkonzerne (Holdinggesellschaft)." }
      ],
      interaktion: [
        { frage: "Welche Aussage über die Konzernrechnungslegung ist korrekt?", optionen: ["Sie ersetzt die Einzelabschlüsse der Tochterunternehmen", "Sie stellt eine Unternehmensgruppe als wirtschaftliche Einheit dar", "Sie ist nur für kapitalmarktorientierte Unternehmen verpflichtend", "Sie wird nur in der Bilanz, nicht in der GuV dargestellt"], richtig: 1, erklaerung: "Die Konzernrechnungslegung fasst mehrere rechtlich selbstständige Unternehmen als eine wirtschaftliche Einheit zusammen. Sie ersetzt nicht die Einzelabschlüsse, sondern ergänzt diese." },
        { frage: "Welche Institution setzt die internationalen Standards für Konzernrechnungslegung?", optionen: ["Der IASB (International Accounting Standards Board)", "Die nationale Finanzbehörde", "Das Bundeszentralamt für Steuern", "Die Europäische Zentralbank"], richtig: 0, erklaerung: "Der IASB verabschiedet die IFRS-Standards, die international gültig sind." },
        { frage: "Wie wird ein vertikal integrierter Konzern charakterisiert?", optionen: ["Unternehmen auf gleicher hierarchischer Ebene", "Muttergesellschaft an der Spitze mit untergeordneten Töchtern", "Mehrere unabhängige Unternehmen mit gleicher Kontrolle", "Ein großes Unternehmen mit vielen Standorten"], richtig: 1, erklaerung: "Vertikale Integration bedeutet, dass die Muttergesellschaft hierarchisch an der Spitze steht und Tochterunternehmen verschiedener Ebenen kontrolliert." },
        { frage: "In welchem HGB-Paragraphen sind die Regelungen zur Konzernbilanz zu finden?", optionen: ["§§ 100-150 HGB", "§§ 290-313 HGB", "§§ 400-450 HGB", "§§ 500-550 HGB"], richtig: 1, erklaerung: "Die Konzernrechnungslegung ist in den §§ 290-313 HGB geregelt." },
        { frage: "Welcher Konzerntyp wird auch als Holdinggesellschaft bezeichnet?", optionen: ["Vertikaler Konzern", "Horizontaler Konzern", "Finanzkonzern", "Gemischter Konzern"], richtig: 2, erklaerung: "Ein Finanzkonzern mit reiner Holdinggesellschaft dient nur der Verwaltung von Anteilen an anderen Unternehmen." }
      ]
    },
    {
      titel: "📚 Konsolidierungskreis und -vorbereitung",
      inhalt: `<p>Der <strong>Konsolidierungskreis</strong> bestimmt, welche Unternehmen in die Konsolidierung einbezogen werden. Dies hängt von <strong>Kontrolle</strong>, <strong>Größe</strong> und <strong>Art der Beteiligung</strong> ab.</p>
<div class="def-box"><div class="def-label">Konsolidierungskreis</div>Gesamtheit der Unternehmen, die in den Konzernabschluss einzubeziehen sind, bestimmt nach Kriterien wie Kontrolle, Quote und Wesentlichkeit.</div>
<h5>Kriterien für Konsolidierungspflicht</h5>
<table class="erk-table">
<tr><th>Kriterium</th><th>Regelung</th><th>Beispiel</th></tr>
<tr><td><strong>Kontrolle</strong></td><td>Mehrheit der Stimmrechte oder faktische Kontrolle</td><td>75% Beteiligung an Tochter-GmbH</td></tr>
<tr><td><strong>Größe</strong></td><td>Schwellwertüberschreitung (Bilanzsumme, Umsatz, Mitarbeiterzahl)</td><td>Bilanzsumme > 20 Mio. EUR</td></tr>
<tr><td><strong>Materialität</strong></td><td>Wesentlichkeit des Unternehmens für das Konzernbild</td><td>Umsatz > 5% des Konzernumsatzes</td></tr>
</table>`,
      beispiel: "Die Automobilgruppe VW konsolidiert Porsche AG (Beteiligung > 50%), muss aber kleinere Handelsunternehmen unter Schwellwerten nicht konsolidieren.",
      merke: "Konsolidierungskreis = Kontrolle + Größe + Wesentlichkeit entscheiden.",
      flipcards: [
        { vorne: "Konsolidierungskreis", hinten: "Summe aller Unternehmen, die in den Konzernabschluss einbezogen werden müssen" },
        { vorne: "Kontrolle (Konzern)", hinten: "Mehrheit der Stimmrechte oder faktische Beherrschung eines Unternehmens" },
        { vorne: "Schwellwert", hinten: "Größengrenzen, ab denen ein Unternehmen konsolidiert werden muss" }
      ],
      details: [
        { titel: "📖 Konsolidierungsvorbereitung", inhalt: "Vor der Konsolidierung müssen Einzelabschlüsse zum selben Stichtag vorliegen, gleiche Bilanzierungsmethoden angewendet werden, und Zwischenergebnisse eliminiert werden." }
      ],
      interaktion: [
        { frage: "Ab welcher Beteiligungsquote muss ein Unternehmen normalerweise konsolidiert werden?", optionen: ["Ab 20% Beteiligung", "Ab 25% Beteiligung", "Ab 50% Beteiligung", "Ab 75% Beteiligung"], richtig: 2, erklaerung: "Bei mehr als 50% Beteiligung hat das Mutterunternehmen die Kontrolle und Konsolidierungspflicht entsteht." },
        { frage: "Welche der folgenden Informationen wird NICHT zur Bestimmung des Konsolidierungskreises benötigt?", optionen: ["Beteiligungsquote", "Kontrolle des Unternehmens", "Farbdesign der Unternehmenswebseite", "Größe des Unternehmens"], richtig: 2, erklaerung: "Das Farbdesign der Webseite ist völlig irrelevant. Beteiligungsquote, Kontrolle und Größe sind entscheidende Kriterien." },
        { frage: "Was ist ein Schwellwert in der Konsolidierung?", optionen: ["Ein Mindestpreis für Unternehmensanteile", "Eine Größengrenze zur Bestimmung der Konsolidierungspflicht", "Ein Strafzins bei Verletzung von Regeln", "Ein Prüfbericht des Abschlussprüfers"], richtig: 1, erklaerung: "Schwellwerte sind Größengrenzen (Bilanzsumme, Umsatz, etc.), ab denen Unternehmen konsolidiert werden müssen." },
        { frage: "Für welchen Stichtag müssen alle Einzelabschlüsse in den Konsolidierungskreis einbezogen werden?", optionen: ["Jeweils für ihren eigenen Geschäftsjahresstichtag", "Für den Stichtag der Muttergesellschaft", "Für den 31.12. des Vorjahres", "Quartalsstichtage sind ausreichend"], richtig: 1, erklaerung: "Zur Konsolidierung müssen alle Einzelabschlüsse auf den Stichtag der Muttergesellschaft abgestimmt werden." },
        { frage: "Welche Bilanzierungsmethoden sind in einem Konzernabschluss zulässig?", optionen: ["Jedes Unternehmen wendet seine bevorzugte Methode an", "Alle Unternehmen müssen einheitliche Methoden anwenden", "BFH-Erlasse ersetzen IAS/IFRS", "Kleine Tochterunternehmen sind ausgenommen"], richtig: 1, erklaerung: "Ein Konzernabschluss erfordert einheitliche Bilanzierungsmethoden über alle Konzernunternehmen hinweg für Vergleichbarkeit." }
      ]
    }
  ]
};

// ============================================================
// RECHNUNGSLEGUNG - Kapitalkonsolidierung
// ============================================================
FAECHER["rechnungslegung"].themen["kapitalkonsolidierung"] = {
  name: "Kapitalkonsolidierung",
  zusammenfassung: "Die Kapitalkonsolidierung eliminiert die gegenseitigen Verflechtungen zwischen Muttergesellschaft und Tochterunternehmen durch Aufrechnung des Anteils mit dem Eigenkapital der Tochter.",
  erklaerungen: [
    {
      titel: "📚 Methoden der Kapitalkonsolidierung",
      inhalt: `<p>Die <strong>Kapitalkonsolidierung</strong> ist der erste Schritt der Konsolidierung. Sie eliminiert die gegenseitigen Verflechtungen zwischen Muttergesellschaft und Tochterunternehmen.</p>
<div class="def-box"><div class="def-label">Kapitalkonsolidierung</div>Elimination des Anteils des Mutterunternehmens an der Tochtergesellschaft gegen die Eigenkapitalquote der Tochter zum Akquisitionszeitpunkt.</div>
<h5>Zwei Konsolidierungsmethoden</h5>
<table class="erk-table">
<tr><th>Methode</th><th>Anwendung</th><th>Behandlung</th></tr>
<tr><td><strong>Neubewertungsmethode (Purchase Method)</strong></td><td>Erwerbung von Tochterunternehmen (typisch)</td><td>Aktiva/Passiva zu Zeitwerten bewertet, Goodwill entsteht bei Überzahlung</td></tr>
<tr><td><strong>Poolomethode (Pooling Method)</strong></td><td>Vereinigung unter gemeinsamer Leitung (selten)</td><td>Buchwertfortführung, kein Goodwill</td></tr>
</table>
<h5>Schritte der Kapitalkonsolidierung (Neubewertungsmethode)</h5>
<ol>
<li><strong>Zeitwertermittlung:</strong> Aktiva und Passiva der Tochter zum Akquisitionszeitpunkt bewerten</li>
<li><strong>Aufrechnung:</strong> Beteiligungsbuchwert gegen Eigenkapital aufrechnen</li>
<li><strong>Differenz buchen:</strong> Ist der Erwerbspreis > Eigenkapital → Goodwill; Ist Erwerbspreis < Eigenkapital → negative Goodwill (stille Lasten/Reserven)</li>
</ol>`,
      beispiel: "Die M-AG erwirbt 100% der T-GmbH für 1.000 EUR. Das Eigenkapital der T-GmbH beträgt 300 EUR, stille Reserven liegen bei 60 EUR in Aktiva und -20 EUR in Passiva. Goodwill = 1.000 - (300 + 60 - 20) = 660 EUR.",
      merke: "Kapitalkonsolidierung: Anteilbuchwert - Eigenkapital (zu Zeitwerten) = Goodwill.",
      flipcards: [
        { vorne: "Kapitalkonsolidierung", hinten: "Eliminierung des Beteiligungspostens durch Aufrechnung gegen Eigenkapital" },
        { vorne: "Goodwill", hinten: "Entsteht bei Erstkonsolidierung, wenn Erwerbspreis > Eigenkapital zu Zeitwerten" },
        { vorne: "Stille Reserven", hinten: "Nicht in der Bilanz ausgewiesene Wertdifferenzen bei der Konsolidierung" }
      ],
      details: [
        { titel: "📖 Zeitwertbewertung bei Konsolidierung", inhalt: "Bei der Konsolidierung müssen Vermögenswerte und Schulden der Tochter zu ihren Zeitwerten (Marktwerten) bewertet werden, nicht zu ihren Buchwerten. Beispiele: Immobilien zu Marktpreis, Markenrechte zu Lizenzwert." }
      ],
      interaktion: [
        { frage: "Wann entsteht ein positiver Goodwill?", optionen: ["Wenn der Buchwert der Tochter höher ist als der Erwerbspreis", "Wenn der Erwerbspreis höher ist als die Zeitwerte des Eigenkapitals", "Wenn stille Lasten eliminiert werden", "Wenn die Tochter Verluste macht"], richtig: 1, erklaerung: "Ein positiver Goodwill entsteht, wenn die Muttergesellschaft mehr für das Unternehmen zahlt, als dessen Netto-Vermögenswert (zu Zeitwerten) beträgt." },
        { frage: "Was ist die Poolomethode?", optionen: ["Eine Methode zur Bilanzierung von Bankenkonten", "Eine vereinfachte Konsolidierungsmethode für Vereinigungen unter gemeinsamer Leitung", "Eine Methode zur Eliminierung von Zwischenergebnissen", "Eine Technik zur Bewertung von Goodwill"], richtig: 1, erklaerung: "Die Poolomethode wird bei Vereinigungen unter gemeinsamer Leitung angewendet und führt Buchwerte fort, ohne Goodwill zu erzeugen." },
        { frage: "In welcher Reihenfolge wird die Kapitalkonsolidierung durchgeführt?", optionen: ["Aufrechnung → Bewertung → Goodwill", "Bewertung → Aufrechnung → Goodwill", "Goodwill → Aufrechnung → Bewertung", "Aufrechnung → Goodwill → Bewertung"], richtig: 1, erklaerung: "Zuerst werden die Vermögenswerte zu Zeitwerten bewertet, dann erfolgt die Aufrechnung, und schließlich wird eine mögliche Goodwill-Differenz ermittelt." },
        { frage: "Welche Auswirkung haben stille Reserven in Aktiva?", optionen: ["Sie reduzieren den Goodwill", "Sie erhöhen den Goodwill", "Sie haben keine Auswirkung", "Sie müssen eliminiert werden"], richtig: 0, erklaerung: "Stille Reserven in Aktiva werden bei der Zeitwertbewertung offengelegt und reduzieren damit den Goodwill." },
        { frage: "Was versteht man unter Erstkonsolidierung?", optionen: ["Die jährlich wiederkehrende Konsolidierung", "Die erste Konsolidierung bei Erwerb einer Tochtergesellschaft", "Die Konsolidierung bei Fusion von Unternehmen", "Die Konsolidierung von Bankengruppen"], richtig: 1, erklaerung: "Die Erstkonsolidierung findet bei der ersten Aufnahme einer Tochter in den Konzernkreis statt." }
      ]
    }
  ]
};

// ============================================================
// WIRTSCHAFTSINFORMATIK SEIDLMEIER - Kapitel 4: Datenbanksysteme
// ============================================================
FAECHER["winf-seidlmeier"].themen["datenbanksysteme"] = {
  name: "4. Datenbanksysteme",
  zusammenfassung: "Datenbanksysteme sind zentrale Informationsspeicher, die von verschiedenen Geschäftsfunktionen genutzt werden. Grundkonzepte sind Datenmodellierung (ER-Modell), Datenschichten und relationale Datenbanken.",
  erklaerungen: [
    {
      titel: "📚 Grundstrukturen und Datenmodellierung",
      inhalt: `<p><strong>Datenbanksysteme</strong> organisieren Informationen zentral für ein Unternehmen. Sie stellen sicher, dass verschiedene Abteilungen (Buchhaltung, Produktion, Marketing) auf eine <strong>gemeinsame Datengrundlage</strong> zugreifen.</p>
<div class="def-box"><div class="def-label">Datenbanksystem</div>Ein System zur zentralen Speicherung, Verwaltung und Bereitstellung von Daten für verschiedene Geschäftsprozesse mit konsistenten, integrierten Informationen.</div>
<h5>Datenschichten-Modell (ANSI-SPARC)</h5>
<table class="erk-table">
<tr><th>Schicht</th><th>Fokus</th><th>Beschreibung</th></tr>
<tr><td><strong>Externes Schema</strong></td><td>Benutzerblickwinkel</td><td>Verschiedene Sichtweisen für verschiedene Benutzer (was jeder sieht)</td></tr>
<tr><td><strong>Konzeptionelles Schema</strong></td><td>Logische Struktur</td><td>Gesamtmodell aller Daten unabhängig von der Implementierung</td></tr>
<tr><td><strong>Internes Schema</strong></td><td>Physische Speicherung</td><td>Wie Daten tatsächlich auf der Festplatte gespeichert sind</td></tr>
</table>
<h5>Das Entity-Relationship-Modell (ER-Modell)</h5>
<p>Das ER-Modell ist eine Methode zur Datenmodellierung:</p>
<ul>
<li><strong>Entity (Entität):</strong> Ein Objekt der Realität (z.B. Mitarbeiter, Projekt, Kunde)</li>
<li><strong>Attribute:</strong> Eigenschaften einer Entität (z.B. Name, Alter, Gehalt)</li>
<li><strong>Beziehung (Relationship):</strong> Verbindung zwischen Entitäten (z.B. Mitarbeiter arbeitet an Projekt)</li>
<li><strong>Kardinalität:</strong> Wie viele Entitäten zueinander in Beziehung stehen (1:1, 1:n, m:n)</li>
</ul>`,
      beispiel: "Beispiel ER-Modell: Entität Mitarbeiter (mit Attributen ID, Name, Gehalt) steht in 1:1-Beziehung zu PC (ID, Modell) und in m:n-Beziehung zu Projekt (Projektname, Budget). Ein Mitarbeiter nutzt einen PC, aber viele Mitarbeiter arbeiten an vielen Projekten.",
      merke: "ER-Modell: Entity = Objekt, Attribute = Eigenschaften, Relationships = Verbindungen mit Kardinalitäten.",
      flipcards: [
        { vorne: "Entity", hinten: "Ein Objekt der realen Welt, das modelliert wird (z.B. Kunde, Produkt)" },
        { vorne: "Attribut", hinten: "Eine Eigenschaft einer Entität (z.B. Name, Alter, Adresse)" },
        { vorne: "Kardinalität", hinten: "Beschreibt, wie viele Entitäten zueinander in Beziehung stehen (1:1, 1:n, m:n)" },
        { vorne: "Externes Schema", hinten: "Verschiedene Datensichten für verschiedene Benutzergruppen" }
      ],
      details: [
        { titel: "📖 Relationales Datenmodell", inhalt: "Das relationale Modell basiert auf Tabellen (Relationen), Zeilen (Tupel) und Spalten (Attribute). Jede Tabelle hat einen Primärschlüssel (eindeutig) und kann Fremdschlüssel (Verweise) zu anderen Tabellen haben." }
      ],
      interaktion: [
        { frage: "Welche Schicht des ANSI-SPARC-Modells beschreibt die physische Speicherung?", optionen: ["Externes Schema", "Konzeptionelles Schema", "Internes Schema", "Übergeordnetes Schema"], richtig: 2, erklaerung: "Das Interne Schema regelt die tatsächliche Speicherung auf der Festplatte." },
        { frage: "Was ist eine Entity-Relationship?", optionen: ["Ein Datensicherungsprozess", "Eine Verbindung zwischen zwei Objekten der realen Welt", "Ein SQL-Befehl", "Ein Benutzerkonto"], richtig: 1, erklaerung: "Ein Relationship verbindet zwei oder mehr Entitäten logisch miteinander." },
        { frage: "Welche Kardinalität bedeutet, dass ein Mitarbeiter genau einen Computer nutzt, aber mehrere Mitarbeiter denselben Computer nutzen können?", optionen: ["1:1", "1:n", "m:1", "m:n"], richtig: 2, erklaerung: "Die Kardinalität m:1 bedeutet: viele Mitarbeiter (m) zu einem Computer (1)." },
        { frage: "Welcher Schlüssel identifiziert eine Zeile in einer Relation eindeutig?", optionen: ["Fremdschlüssel", "Primärschlüssel", "Sekundärschlüssel", "Attributschlüssel"], richtig: 1, erklaerung: "Der Primärschlüssel (Primary Key) identifiziert jede Zeile einer Tabelle eindeutig." },
        { frage: "Was ist der Hauptzweck eines konzeptionellen Schemas in einem Datenbanksystem?", optionen: ["Die physische Speicherung zu beschreiben", "Das Gesamtmodell aller Daten unabhängig von der Implementierung zu definieren", "Benutzergruppen Zugriffsrechte zu erteilen", "SQL-Anfragen zu optimieren"], richtig: 1, erklaerung: "Das konzeptionelle Schema definiert die logische Struktur unabhängig davon, wie sie implementiert oder angezeigt wird." }
      ]
    }
  ]
};

// ============================================================
// WIRTSCHAFTSINFORMATIK SEIDLMEIER - Kapitel 5: Informations- und Anwendungssysteme
// ============================================================
FAECHER["winf-seidlmeier"].themen["applikationssysteme"] = {
  name: "5. Informations- und Anwendungssysteme",
  zusammenfassung: "Informationssysteme (IS) unterstützen Geschäftsprozesse durch Daten und Funktionen. Sie bestehen aus Hardware, Software und Menschen. ERP-Systeme integrieren alle Geschäftsfunktionen, CRM-Systeme verwalten Kundenbeziehungen.",
  erklaerungen: [
    {
      titel: "📚 Abgrenzung IS vs. AS und praktische Anwendungen",
      inhalt: `<p><strong>Informationssysteme (IS)</strong> sind soziotechnische Systeme, die menschliche und maschinelle Komponenten verbinden, um Geschäftsprozesse zu unterstützen.</p>
<div class="def-box"><div class="def-label">Informationssystem (IS)</div>Ein System aus menschlichen und technischen Komponenten (Hardware, Software, Daten), das Informationen verarbeitet, um Geschäftsziele zu unterstützen.</div>
<div class="def-box"><div class="def-label">Anwendungssystem (AS)</div>Automatisierte Teilsysteme eines IS. Die technische Komponente (Hardware, Systemsoftware, Anwendungssoftware) ohne die menschliche Komponente.</div>
<h5>ERP-Systeme (Enterprise Resource Planning)</h5>
<ul>
<li><strong>Definition:</strong> Integrierte Systeme, die alle Geschäftsfunktionen (Finanzen, Produktion, HR, Logistik) in einer zentralen Datenbank vereinen</li>
<li><strong>Vorteile:</strong> Echtzeit-Datenfluss, Eliminierung von Medienbrüchen, konsistente Daten über alle Bereiche</li>
<li><strong>Beispiele:</strong> SAP, Oracle, Microsoft Dynamics</li>
<li><strong>Module:</strong> FI (Finanzwesen), MM (Materialwirtschaft), SD (Vertrieb), HR (Personal)</li>
</ul>
<h5>CRM-Systeme (Customer Relationship Management)</h5>
<ul>
<li><strong>Definition:</strong> Systeme zur Verwaltung von Kundenbeziehungen und -daten</li>
<li><strong>Funktionen:</strong> Kundenhistorie, Kontaktmanagement, Vertriebspipeline, Marketing-Automation</li>
<li><strong>Beispiele:</strong> Salesforce, HubSpot, Microsoft Dynamics CRM</li>
</ul>`,
      beispiel: "ERP-Beispiel: Im SAP-System bucht der Verkauf einen Auftrag. Automatisch werden Lager-Bestände aktualisiert, eine Rechnung erstellt, Buchhaltung und Controlling informiert – alles in Echtzeit aus einer Datenbank.",
      merke: "IS = Mensch + Technik; AS = nur Technik. ERP = alle Prozesse integriert. CRM = Kundenbeziehungen.",
      flipcards: [
        { vorne: "Informationssystem (IS)", hinten: "Soziotechnisches System aus Mensch, Hardware, Software und Daten" },
        { vorne: "Anwendungssystem (AS)", hinten: "Technische Komponente eines IS: Hardware, Systemsoftware und Anwendungssoftware" },
        { vorne: "ERP-System", hinten: "Integriertes Unternehmenssystem für alle Geschäftsfunktionen in einer Datenbank" },
        { vorne: "CRM-System", hinten: "System zur Verwaltung aller Kundenbeziehungen und Kundeninteraktionen" }
      ],
      details: [
        { titel: "📖 Client-Server-Architektur", inhalt: "Moderne IS nutzen Client-Server-Modelle: Der Server speichert zentrale Daten und Geschäftslogik, Clients (PCs, Smartphones) greifen auf diese zu. Vorteil: zentrale Kontrolle, Nachteil: Abhängigkeit vom Server." },
        { titel: "📖 Cloud Computing in IS", inhalt: "Cloud-basierte IS verlagern Hard- und Software zum Anbieter. Vorteile: Skalierbarkeit, niedrige Anfangskosten, Zugriff von überall. Nachteile: Abhängigkeit vom Provider, Datenschutz, Verfügbarkeit." }
      ],
      interaktion: [
        { frage: "Welcher Unterschied besteht zwischen IS und AS?", optionen: ["IS ist älter als AS", "IS umfasst Menschen und Technik, AS nur Technik", "AS ist ein Teil von IS, aber IS kann ohne AS nicht funktionieren", "Sie sind synonyme Begriffe"], richtig: 1, erklaerung: "IS (Informationssystem) ist ein soziotechnisches System mit Menschen, Hardware und Software. AS (Anwendungssystem) ist nur die technische Komponente." },
        { frage: "Welche Module sind NICHT typischerweise in einem ERP-System enthalten?", optionen: ["Finanzwesen (FI)", "Produktion", "Personalabteilung (HR)", "Klimaanlage-Steuerung"], richtig: 3, erklaerung: "ERP-Systeme steuern geschäftliche Prozesse, nicht technische Gebäudeinstallationen wie Klimaanlagen." },
        { frage: "Welche Vorteile bietet die Zentralisierung von Daten in einem ERP-System?", optionen: ["Schnellere Computerprozesse", "Konsistente, aktuelle Daten für alle Bereiche", "Mehr Speicherplatz auf lokalen Rechnern", "Kürzere E-Mail-Wartezeiten"], richtig: 1, erklaerung: "Ein ERP gewährleistet, dass alle Bereiche mit den gleichen, aktuellen Daten arbeiten, ohne Redundanz und Widersprüche." },
        { frage: "Für welche Aufgabe ist ein CRM-System hauptsächlich geeignet?", optionen: ["Produktion von Waren", "Verwaltung von Kundenbeziehungen", "Lagerbestandsverwaltung", "Finanzbuchhaltung"], richtig: 1, erklaerung: "CRM-Systeme verwalten Kundenbeziehungen, Kundenhistorien, Verkaufspipelines und Kundeninteraktionen." },
        { frage: "Welche Aussage über Cloud Computing ist wahr?", optionen: ["Cloud Computing ist immer günstiger als lokale Server", "Cloud-Anbieter garantieren 100% Verfügbarkeit", "Cloud-Services bieten Flexibilität und Skalierbarkeit", "Cloud Computing erfordert weniger Sicherheitsmaßnahmen"], richtig: 2, erklaerung: "Cloud Computing bietet Flexibilität, Skalierbarkeit und niedrigere Anfangskosten, hat aber auch Risiken bei Datenschutz und Verfügbarkeit." }
      ]
    }
  ]
};

// ============================================================
// WIRTSCHAFTSINFORMATIK SEIDLMEIER - Kapitel 6: Standardsoftware
// ============================================================
FAECHER["winf-seidlmeier"].themen["standardsoftware"] = {
  name: "6. Standardsoftware",
  zusammenfassung: "Standardsoftware ist vorgefertigte Software für allgemeine Aufgaben (Kauf, Miete, Lizenz). Sie wird oft mit individueller Software verglichen, die speziell für Unternehmen entwickelt wird.",
  erklaerungen: [
    {
      titel: "📚 Standardsoftware vs. Individualsoftware",
      inhalt: `<p><strong>Standardsoftware</strong> ist vorgefertigte, am Markt verfügbare Software für typische Aufgaben. <strong>Individualsoftware</strong> wird speziell für die Anforderungen eines Unternehmens entwickelt.</p>
<div class="def-box"><div class="def-label">Standardsoftware</div>Vorgefertigte, am Markt angebotene Software, die für allgemeine Geschäftsfunktionen einsetzbar ist und von vielen Unternehmen genutzt wird.</div>
<div class="def-box"><div class="def-label">Individualsoftware</div>Speziell für die Anforderungen eines bestimmten Unternehmens entwickelte Software, die maßgeschneiderte Lösungen bietet.</div>
<h5>Vorteile Standardsoftware</h5>
<table class="erk-table">
<tr><th>Vorteil</th><th>Erklärung</th></tr>
<tr><td>Günstiger</td><td>Entwicklungskosten auf viele Nutzer verteilt</td></tr>
<tr><td>Schnelle Implementierung</td><td>Software ist sofort nutzbar</td></tr>
<tr><td>Support</td><td>Hersteller bietet Wartung und Updates</td></tr>
<tr><td>Bewährte Technologie</td><td>In vielen Unternehmen getestet</td></tr>
</table>
<h5>Nachteile Standardsoftware</h5>
<table class="erk-table">
<tr><th>Nachteil</th><th>Erklärung</th></tr>
<tr><td>Weniger Flexibilität</td><td>Nicht alle Spezifika können abgebildet werden</td></tr>
<tr><td>Höherer Anpassungsaufwand</td><td>Prozesse müssen oft an Software angepasst werden</td></tr>
<tr><td>Abhängigkeit vom Hersteller</td><td>Updates und Wartung sind zwingend erforderlich</td></tr>
</table>`,
      beispiel: "Beispiel Standardsoftware: Microsoft Office, Salesforce, SAP. Ein großer Maschinenbaukonzern nutzt SAP für alle Fabriken, muss aber seine speziellen Anforderungen durch Customizing anpassen.",
      merke: "Standard = vorgefertigt, günstig, weniger flexibel. Individual = maßgeschneidert, teuer, flexibel.",
      flipcards: [
        { vorne: "Standardsoftware", hinten: "Am Markt angebotene, vorgefertigte Software für allgemeine Aufgaben" },
        { vorne: "Individualsoftware", hinten: "Speziell für ein Unternehmen entwickelte maßgeschneiderte Software" },
        { vorne: "Customizing", hinten: "Anpassung von Standardsoftware an spezifische Anforderungen" },
        { vorne: "SaaS", hinten: "Software as a Service – gemietete Software über das Internet" }
      ],
      details: [
        { titel: "📖 Beschaffungsvarianten für Standardsoftware", inhalt: "Kauf (Kauf des Nutzungsrechts gegen einmalige Zahlung), Miete (monatliche/jährliche Gebühren, typisch für Cloud), Lizenz (Gebührenmodelle je nach Nutzer/Rechner)." }
      ],
      interaktion: [
        { frage: "Welcher Hauptvorteil hat Standardsoftware gegenüber Individualsoftware?", optionen: ["Sie ist immer flexibler", "Sie ist günstiger und schneller implementierbar", "Sie braucht keinen Support", "Sie ist sicherer"], richtig: 1, erklaerung: "Standardsoftware ist kostengünstiger (Entwicklung verteilt sich auf viele Nutzer) und schneller einsatzbereit." },
        { frage: "Für wen ist Individualsoftware besser geeignet?", optionen: ["Kleine Einzelhandelsketten", "Unternehmen mit speziellen, einzigartigen Anforderungen", "Startups mit kleinem Budget", "Unternehmen ohne IT-Abteilung"], richtig: 1, erklaerung: "Individualsoftware lohnt sich für Unternehmen, deren Prozesse sich wesentlich von Standard-Lösungen unterscheiden." },
        { frage: "Was versteht man unter Customizing?", optionen: ["Die Farbgestaltung der Benutzeroberfläche", "Anpassung von Standardsoftware an spezifische Unternehmensanforderungen", "Der Kundenservice des Softwareherstellers", "Eine monatliche Abrechnung der Softwarenutzung"], richtig: 1, erklaerung: "Customizing ist die Konfiguration und Anpassung von Standardsoftware an die speziellen Bedürfnisse eines Unternehmens." },
        { frage: "Welche Beschaffungsvariante ist typisch für Cloud-Software?", optionen: ["Kauf mit einmaliger Zahlung", "Miete mit monatlichen oder jährlichen Gebühren", "Kostenlose Downloads", "Tausch gegen andere Software"], richtig: 1, erklaerung: "Cloud-Software wird typischerweise als Service gemietete (Subscription-Modell) bezahlt, nicht gekauft." },
        { frage: "Welches Risiko besteht bei starker Abhängigkeit von einem Softwarehersteller?", optionen: ["Die Software wird zu teuer", "Preiserhöhungen, eingestellte Updates, Einstellung von Support", "Die Software wird zu langsam", "Die Sicherheit wird besser"], richtig: 1, erklaerung: "Abhängigkeit von einem Hersteller bedeutet, dass der Nutzer Updates, Preise und Support-Entscheidungen akzeptieren muss." }
      ]
    }
  ]
};

// ============================================================
// WIRTSCHAFTSINFORMATIK SEIDLMEIER - Kapitel 7: Prozessautomatisierung
// ============================================================
FAECHER["winf-seidlmeier"].themen["prozessautomatisierung"] = {
  name: "7. Prozessautomatisierung mit Workflowsystemen",
  zusammenfassung: "Prozessautomatisierung ersetzt manuelle Arbeitsschritte durch automatisierte Systeme. Workflowsysteme steuern und überwachen den Ablauf von Prozessschritten automatisch.",
  erklaerungen: [
    {
      titel: "📚 Prozessautomatisierung und Workflowsysteme",
      inhalt: `<p><strong>Prozessautomatisierung</strong> ist die Überführung von manuellen Arbeitsschritten in automatisierte Systemfunktionen. <strong>Workflowsysteme</strong> steuern die Ausführung und Überwachung dieser automatisierten Prozesse.</p>
<div class="def-box"><div class="def-label">Prozessautomatisierung</div>Vollständige oder teilweise Automatisierung von betrieblichen Prozessschritten durch Anwendungssysteme, die Aufgaben selbstständig ausführen und überwachen.</div>
<div class="def-box"><div class="def-label">Workflowsystem</div>Ein System zur Steuerung und Überwachung des Ablaufs von Prozessschritten, Aufgabenverweisung an Benutzer und Datenfluss zwischen Systemen.</div>
<h5>ERP und CRM vs. Workflowsysteme</h5>
<table class="erk-table">
<tr><th>System</th><th>Fokus</th><th>Automatisierung</th></tr>
<tr><td><strong>ERP/CRM</strong></td><td>Ausführung (Execution)</td><td>Automatisiert operative Tätigkeiten (Verkauf, Produktion, Kundeninteraktion)</td></tr>
<tr><td><strong>Workflowsystem</strong></td><td>Steuerung & Überwachung (Control)</td><td>Automatisiert Steuerung und Überwachung von Prozessabläufen</td></tr>
</table>
<h5>Wichtige Unterscheidung</h5>
<ul>
<li><strong>Automatisierung ≠ Digitalisierung:</strong> Automatisierung ersetzt manuelle Arbeitsschritte. Digitalisierung wandelt analoge Prozesse in digitale um, ohne sie zu automatisieren.</li>
<li><strong>Beispiel:</strong> Ein Papierformular einscannen = Digitalisierung. Den Genehmigungsprozess per Workflow automatisieren = Automatisierung.</li>
</ul>`,
      beispiel: "Beispiel Workflow: Ein Reiseantrag wird im System eingereicht → Automatisch geleitet an Vorgesetzer → Nach Genehmigung automatisch an Reisekostenstelle → Automatisch Erstattung gebucht. Ohne Workflow: manuelles Weiterreichen, Verzögerungen, Fehler.",
      merke: "Automatisierung: Maschine macht es. Digitalisierung: Papier → Digital. Workflow: Steuerung und Überwachung automatisieren.",
      flipcards: [
        { vorne: "Prozessautomatisierung", hinten: "Umwandlung manueller Arbeitsschritte in automatisierte Systemfunktionen" },
        { vorne: "Workflowsystem", hinten: "Steuert und überwacht den automatisierten Ablauf von Prozessschritten" },
        { vorne: "Digitalisierung", hinten: "Umwandlung von analogen (Papier) in digitale Formate" },
        { vorne: "Automatisierung vs. Digitalisierung", hinten: "Automatisierung=Maschine übernimmt; Digitalisierung=Papier wird Digital" }
      ],
      details: [
        { titel: "📖 Workflow-Modellierung", inhalt: "Workflows bestehen aus Aktivitäten (Aufgaben), Entscheidungspunkten (Bedingungen) und Pfaden. Sie können grafisch modelliert werden (z.B. mit BPMN – Business Process Model and Notation)." }
      ],
      interaktion: [
        { frage: "Was ist der Hauptunterschied zwischen Automatisierung und Digitalisierung?", optionen: ["Automatisierung ist älter", "Automatisierung ersetzt manuelle Schritte, Digitalisierung wandelt analog zu digital", "Sie sind das Gleiche", "Digitalisierung ist teurer"], richtig: 1, erklaerung: "Automatisierung bedeutet, dass Maschinen manuelle Arbeiten übernehmen. Digitalisierung bedeutet Umwandlung von analog (Papier) zu digital (Datei)." },
        { frage: "Welcher Prozessschritt wird durch Workflowsysteme automatisiert?", optionen: ["Die Ausführung von Verkaufstransaktionen", "Die Steuerung und Überwachung des Prozessablaufs", "Das Schreiben von Berichten", "Das Einlagern von Produkten"], richtig: 1, erklaerung: "Workflowsysteme automatisieren die Steuerung und Überwachung, nicht die operative Ausführung (das machen ERP/CRM)." },
        { frage: "Welche Aussage über ERP-Systeme ist korrekt?", optionen: ["Sie automatisieren Prozesssteuerung", "Sie automatisieren die Ausführung (Execution) von Geschäftsaufgaben", "Sie sind identisch mit Workflowsystemen", "Sie können keine Datenbanken verwenden"], richtig: 1, erklaerung: "ERP-Systeme automatisieren operative Tätigkeiten wie Verkauf, Produktion und Lagerung." },
        { frage: "In welche Schritte kann man ein Workflow-Prozess einteilen?", optionen: ["Nur Anfang und Ende", "Aktivitäten, Entscheidungspunkte und Pfade", "Nur automatische Schritte", "Nur manuelle Schritte"], richtig: 1, erklaerung: "Workflows bestehen aus mehreren Komponenten: Aktivitäten (Aufgaben), Bedingungen (Entscheidungen) und Prozessflusswege." },
        { frage: "Ist eine automatisierte Prozessabfertigung bei einem intelligenten System möglich?", optionen: ["Nein, Menschen müssen immer entscheiden", "Ja, wenn die Bedingungen eindeutig sind", "Nur bei sehr großen Unternehmen", "Nur in der öffentlichen Verwaltung"], richtig: 1, erklaerung: "Intelligente Workflowsysteme können eigenständig entscheiden, wenn Bedingungen eindeutig definiert sind (z.B. Rechnungen unter 100 EUR autom. genehmigen)." }
      ]
    }
  ]
};

// ============================================================
// WIRTSCHAFTSINFORMATIK SEIDLMEIER - Kapitel 8: Digitalisierung
// ============================================================
FAECHER["winf-seidlmeier"].themen["digitalisierung-transformation"] = {
  name: "8. Digitalisierung in Unternehmen",
  zusammenfassung: "Digitalisierung ist die Umwandlung von analogen Prozessen in digitale Formate. Digitale Transformation ist die umfassende Änderung von Geschäftsmodellen, Prozessen und Kulturen durch digitale Technologien.",
  erklaerungen: [
    {
      titel: "📚 Digitalisierung vs. digitale Transformation",
      inhalt: `<p><strong>Digitalisierung</strong> ist die reine Umwandlung von analog zu digital (Papier → PDF). <strong>Digitale Transformation</strong> ist die umfassende Neugestaltung von Geschäftsmodellen, Prozessen und Organisationen.</p>
<div class="def-box"><div class="def-label">Digitalisierung</div>Technische Umwandlung von analogen Informationen und Prozessen in digitale Formate und Systeme.</div>
<div class="def-box"><div class="def-label">Digitale Transformation</div>Umfassende Umgestaltung von Geschäftsmodellen, Organisationsstrukturen, Fähigkeiten und Unternehmenskultur durch systematische Nutzung digitaler Technologien.</div>
<h5>Beispiele zur Abgrenzung</h5>
<table class="erk-table">
<tr><th>Digitalisierung (eng)</th><th>Digitale Transformation (breit)</th></tr>
<tr><td>Papierfaktura → PDF-Faktura</td><td>Komplett neues Geschäftsmodell durch Online-Plattformen</td></tr>
<tr><td>Handschriftliche Liste → Excel-Tabelle</td><td>Automatisierung und Neuorganisation des gesamten Prozesses</td></tr>
<tr><td>Vor-Ort-Meetings → Videokonferenzen</td><td>Neue Arbeitsweisen, Rollen, Kompetenzen, Unternehmenskultur</td></tr>
</table>
<h5>Digitalisierung als Change-Management-Prozess</h5>
<p>Digitale Transformation ist nicht nur technisch, sondern auch organisatorisch:</p>
<ul>
<li><strong>Technologie:</strong> Cloud, AI, IoT, Blockchain</li>
<li><strong>Prozesse:</strong> Neue Workflows, Automatisierung, Agile Methoden</li>
<li><strong>Menschen:</strong> Schulung, neue Rollen, Kulturwandel</li>
<li><strong>Geschäftsmodell:</strong> Neue Wertschöpfungsketten, Kundenorientierung</li>
</ul>`,
      beispiel: "Beispiel Digitalisierung vs. Transformation: Ein Einzelhandelgeschäft digitalisiert, wenn es seine Kundenkartei von Papier ins Computer-System überträgt. Digitale Transformation liegt vor, wenn das Geschäft auch Online-Shop, Mobile-App, und Click-&-Collect-Services startet – komplett neues Geschäftsmodell.",
      merke: "Digitalisierung = Papier → Digital. Digitale Transformation = Umgestaltung ganzer Geschäftsmodelle und Organisationen.",
      flipcards: [
        { vorne: "Digitalisierung", hinten: "Umwandlung von analogen Prozessen in digitale Formate" },
        { vorne: "Digitale Transformation", hinten: "Umgestaltung von Geschäftsmodellen, Prozessen und Kultur durch Digitaltechnologien" },
        { vorne: "Change Management", hinten: "Gestaltung von organisatorischen Veränderungsprozessen" },
        { vorne: "Industrie 4.0", hinten: "Intelligente Vernetzung von Produktion, Daten und Menschen" }
      ],
      details: [
        { titel: "📖 Chancen und Risiken der Digitalisierung", inhalt: "Chancen: Effizienzsteigerung, neue Geschäftsfelder, bessere Kundenorientierung. Risiken: Investitionen, Datenschutz, technische Obsoleszenz, Widerstände gegen Veränderung." }
      ],
      interaktion: [
        { frage: "Welche Aussage ist korrekt?", optionen: ["Digitalisierung und digitale Transformation sind Synonyme", "Digitalisierung ist die Umwandlung zu digital, Transformation ist umfassender", "Digitale Transformation ist älter als Digitalisierung", "Nur große Konzerne können digitalisieren"], richtig: 1, erklaerung: "Digitalisierung ist eng (analog→digital), Transformation ist breit (Geschäftsmodelle, Kultur, Organisationen)." },
        { frage: "Welche Bereiche umfasst digitale Transformation?", optionen: ["Nur IT und Technik", "Nur Verwaltung und Buchhaltung", "Technologie, Prozesse, Menschen und Geschäftsmodell", "Nur Kundenbeziehungen"], richtig: 2, erklaerung: "Digitale Transformation ist ein ganzheitlicher Prozess, der Technologie, Prozesse, Menschen und Geschäftsstrategie einbezieht." },
        { frage: "Was ist ein Beispiel für Digitalisierung (nicht Transformation)?", optionen: ["Ein Unternehmen gründet einen Online-Shop", "Ein Unternehmen scannt alle Rechnungen statt sie auszudrucken", "Ein Unternehmen ändert sein komplettes Geschäftsmodell", "Ein Unternehmen trainiert Mitarbeiter in neuen Fähigkeiten"], richtig: 1, erklaerung: "Das Scannen von Rechnungen ist reine Digitalisierung (analog→digital), ohne das Geschäftsmodell zu verändern." },
        { frage: "Welche Rolle spielt Change Management in der digitalen Transformation?", optionen: ["Keine Rolle, nur Technik ist wichtig", "Eine untergeordnete Rolle", "Eine zentrale Rolle zur Akzeptanz und Umsetzung", "Nur für externe Berater relevant"], richtig: 2, erklaerung: "Change Management ist essentiell, um Menschen, Prozesse und Kultur in eine digitale Zukunft zu führen." },
        { frage: "Welche Technologien sind typischerweise Teil der Digitalen Transformation?", optionen: ["Nur Cloud Computing", "Cloud, AI, IoT, Blockchain und weitere Technologien", "Nur ältere Desktop-Software", "Technologie ist irrelevant"], richtig: 1, erklaerung: "Digitale Transformation nutzt moderne Technologien wie Cloud, Künstliche Intelligenz, IoT und Blockchain." }
      ]
    }
  ]
};

// ============================================================
// WIRTSCHAFTSINFORMATIK SEIDLMEIER - Kapitel 9: Datensicherheit
// ============================================================
FAECHER["winf-seidlmeier"].themen["datensicherheit-datenschutz"] = {
  name: "9. Datensicherheit und Datenschutz",
  zusammenfassung: "Datensicherheit schützt Daten vor unbefugtem Zugriff (Identität, Authentifizierung, Integrität). Datenschutz regelt den Umgang mit personenbezogenen Daten und deren Rechte (DSGVO).",
  erklaerungen: [
    {
      titel: "📚 Informationssicherheit und Datenschutz",
      inhalt: `<p><strong>Datensicherheit</strong> (Informationssicherheit) schützt Daten und Informationen vor Bedrohungen wie unbefugtem Zugriff, Manipulation und Verlust. <strong>Datenschutz</strong> ist der Schutz personenbezogener Daten und der Schutz der Persönlichkeitsrechte.</p>
<div class="def-box"><div class="def-label">Datensicherheit (Informationssicherheit)</div>Maßnahmen zum Schutz von Informationen und Daten vor unbefugtem Zugriff, Manipulation, Verlust und Missbrauch durch technische und organisatorische Mittel.</div>
<div class="def-box"><div class="def-label">Datenschutz</div>Rechtlicher und technischer Schutz personenbezogener Daten, ihrer Verarbeitung und Nutzung, insbesondere zum Schutz von Privatsphäre und Persönlichkeitsrechten (z.B. DSGVO).</div>
<h5>Sicherheitsziele (CIA-Modell + Authentizität)</h5>
<table class="erk-table">
<tr><th>Ziel</th><th>Definition</th><th>Maßnahme</th></tr>
<tr><td><strong>Vertraulichkeit</strong></td><td>Nur autorisierte Personen dürfen Zugriff haben</td><td>Verschlüsselung, Passwörter, Zugriffskontrolle</td></tr>
<tr><td><strong>Integrität</strong></td><td>Daten dürfen nicht unbemerkt verändert werden</td><td>Checksummen, digitale Signaturen</td></tr>
<tr><td><strong>Verfügbarkeit</strong></td><td>Daten müssen verfügbar sein, wenn benötigt</td><td>Backups, redundante Systeme, Disaster Recovery</td></tr>
<tr><td><strong>Authentifizierung</strong></td><td>Verifizierung der Identität von Benutzern</td><td>Passwörter, Zwei-Faktor-Authentifizierung</td></tr>
</table>
<h5>Datenschutzziele (Höhere und Basisdienste)</h5>
<table class="erk-table">
<tr><th>Höhere Dienste</th><th>Basisdienste</th></tr>
<tr><td>Zurechenbarkeit, Nichtabstreitbarkeit, Zugriffsschutz</td><td>Vertraulichkeit, Datenintegrität, Authentifizierung, Verfügbarkeit</td></tr>
</table>`,
      beispiel: "Beispiel Sicherheit: Ein Bankserver muss Kundendaten vertraulich halten (Verschlüsselung), darf keine Kontostände verfälscht werden (Integrität), muss 24/7 erreichbar sein (Verfügbarkeit), und Kunden müssen sich authentifizieren (Login).",
      merke: "CIA = Vertraulichkeit, Integrität, Verfügbarkeit. Datenschutz = Personenbezogene Daten + DSGVO.",
      flipcards: [
        { vorne: "Vertraulichkeit", hinten: "Nur autorisierte Personen dürfen auf Daten zugreifen" },
        { vorne: "Integrität", hinten: "Daten bleiben korrekt und werden nicht unbemerkt verändert" },
        { vorne: "Verfügbarkeit", hinten: "Autorisierte Benutzer haben Zugriff, wenn sie ihn benötigen" },
        { vorne: "Authentifizierung", hinten: "Überprüfung der Identität eines Benutzers oder Systems" }
      ],
      details: [
        { titel: "📖 DSGVO und Datenschutzrecht", inhalt: "Die Datenschutz-Grundverordnung (DSGVO) regelt in Europa den Umgang mit personenbezogenen Daten. Wichtige Rechte: Recht auf Zugriff, Berichtigung, Löschung ('Recht auf Vergessenwerden'), Datenportabilität." }
      ],
      interaktion: [
        { frage: "Welche Komponente des CIA-Modells schützt vor unbefugtem Zugriff?", optionen: ["Verfügbarkeit", "Integrität", "Vertraulichkeit", "Authentizität"], richtig: 2, erklaerung: "Vertraulichkeit schützt Daten vor unbefugtem Zugriff durch Verschlüsselung und Zugriffskontrolle." },
        { frage: "Welche Maßnahme stellt Datenverfügbarkeit sicher?", optionen: ["Verschlüsselung", "Regelmäßige Backups und redundante Systeme", "Netzwerk-Firewalls", "Benutzerdokumentation"], richtig: 1, erklaerung: "Verfügbarkeit wird durch Backups, Redundanzen und Disaster-Recovery-Pläne sichergestellt." },
        { frage: "Was ist der Unterschied zwischen Datensicherheit und Datenschutz?", optionen: ["Sie sind das Gleiche", "Datensicherheit schützt vor technischen Bedrohungen, Datenschutz schützt personenbezogene Daten rechtlich", "Datenschutz ist älter", "Nur große Unternehmen müssen sich damit befassen"], richtig: 1, erklaerung: "Datensicherheit ist technisch (CIA), Datenschutz ist rechtlich (DSGVO) für personenbezogene Daten." },
        { frage: "Welches Recht gewährt die DSGVO den Betroffenen?", optionen: ["Das Recht, beliebig zu lagern", "Das Recht auf Zugriff, Berichtigung und Löschung", "Das Recht auf kostenlose Cloud-Speicher", "Das Recht auf Anonymität"], richtig: 1, erklaerung: "Die DSGVO gibt Personen Rechte wie Zugriff auf ihre Daten, Berichtigung und Löschung (Recht auf Vergessenwerden)." },
        { frage: "Was ist Zwei-Faktor-Authentifizierung?", optionen: ["Ein Passwort, das zweimal eingegeben wird", "Nutzung von zwei verschiedenen Passwörtern", "Bestätigung der Identität durch zwei unterschiedliche Faktoren (z.B. Passwort + Handy)", "Eine Sicherheitsrichtlinie für IT-Abteilungen"], richtig: 2, erklaerung: "Zwei-Faktor-Authentifizierung nutzt zwei unterschiedliche Authentifizierungsmethoden (z.B. Passwort + SMS-Code) für erhöhte Sicherheit." }
      ]
    }
  ]
};

// ============================================================
// STEUERRECHT - Kapitel 1: Steuerrechtsordnung
// ============================================================
FAECHER["steuerrecht"].themen["steuerrechtsordnung"] = {
  name: "1. Steuerrechtsordnung",
  zusammenfassung: `<h4>1. Steuerrechtsordnung – Vollständige Zusammenfassung</h4>

<h5>📌 Arten der öffentlichen Einnahmen</h5>
<p>Der Staat finanziert sich durch <strong>4 Einnahmequellen</strong>: Abgaben, Erträge aus staatlichen Betrieben, Veräußerung von Staatsvermögen und Verschuldung.</p>
<p>Abgaben unterteilen sich in:</p>
<table class="erk-table">
  <tr><th>Art</th><th>Gegenleistung</th><th>Beispiele</th><th>Rechtsgrundlage</th></tr>
  <tr><td><strong>Steuern</strong></td><td>❌ Keine</td><td>Einkommensteuer, USt</td><td>§ 3 Abs. 1 AO</td></tr>
  <tr><td><strong>Steuerl. Nebenleistungen</strong></td><td>⚠️ Strafcharakter</td><td>Verspätungszuschlag, Zinsen</td><td>§ 3 Abs. 4 AO</td></tr>
  <tr><td><strong>Beiträge</strong></td><td>🔄 Mögliche</td><td>GKV, Rundfunkbeitrag</td><td>–</td></tr>
  <tr><td><strong>Gebühren</strong></td><td>✅ Tatsächliche</td><td>Personalausweis, Müllabfuhr</td><td>–</td></tr>
</table>
<div class="def-box"><div class="def-label">Definition Steuer (§ 3 Abs. 1 AO)</div>Geldleistungen, die <strong>keine Gegenleistung</strong> für eine besondere staatliche Leistung darstellen und zur Erzielung von Einnahmen allen auferlegt werden, bei denen der Tatbestand zutrifft.</div>

<h5>📌 Rechtsquellen des Steuerrechts – Pyramidensystem</h5>
<table class="erk-table">
  <tr><th>Ebene</th><th>Quelle</th><th>Inhalt</th></tr>
  <tr><td>1️⃣ Spitze</td><td><strong>Grundgesetz (GG)</strong></td><td>Finanzverfassung Art. 104a ff.: Gesetzgebungskompetenz (Art. 105), Steuerverteilung (Art. 106), Finanzverwaltung (Art. 108)</td></tr>
  <tr><td>2️⃣ Mitte</td><td><strong>Abgabenordnung (AO)</strong></td><td>Allgemeiner Teil: gilt für alle Steuerarten. Regelt Steuerschuldverhältnis, Zuständigkeiten, Verfahren</td></tr>
  <tr><td>3️⃣ Basis</td><td><strong>Einzelsteuergesetze</strong></td><td>EStG, KStG, GewStG, UStG – je ein Gesetz pro Steuerart</td></tr>
</table>
<p><strong>Sonstige Rechtsquellen:</strong> Rechtsverordnungen (z.B. EStDV) · Kommunale Satzungen · Verwaltungsvorschriften (Erlasse) · Rechtsprechung (FG → BFH → BVerfG / EuGH) · Doppelbesteuerungsabkommen (DBA) · EU-Richtlinien</p>

<h5>📌 Einteilung der Steuern (5 Einteilungskriterien)</h5>
<p><strong>1. Juristische Einteilung:</strong></p>
<table class="erk-table">
  <tr><th>Kategorie</th><th>Beispiele</th></tr>
  <tr><td>Besitzsteuer (Einkommen/Ertrag)</td><td>ESt, KSt, GewSt, Kirchensteuer</td></tr>
  <tr><td>Besitzsteuer (Vermögen/Substanz)</td><td>ErbSt (Erbschaft), GrSt</td></tr>
  <tr><td>Verkehrsteuer</td><td>USt, ErbSt (Schenkung), KfzSt, Grunderwerbsteuer</td></tr>
  <tr><td>Verbrauch-/Aufwandsteuer</td><td>Hundesteuer, Biersteuer, Tabaksteuer</td></tr>
</table>
<p><em>Hinweis: ErbSt taucht doppelt auf – Erbschaft = kein Rechtsgeschäft (kein Wille des Toten), Schenkung = Rechtsgeschäft (zwei Willenserklärungen)</em></p>

<p><strong>2. Betriebswirtschaftliche Einteilung:</strong> Direkte Steuern (treffen eigenen Geldbeutel, z.B. ESt) vs. Indirekte Steuern (werden überwälzt, v.a. Verbrauchsteuern, z.B. USt)</p>

<p><strong>3. Steuertechnische Einteilung:</strong> Quellenabzugsteuer (wird direkt einbehalten, z.B. Lohnsteuer, Kapitalertragsteuer) vs. Veranlagungsverfahren (Steuererklärung → Finanzamt setzt fest, z.B. jährl. ESt)</p>

<p><strong>4. Politische Einteilung:</strong></p>
<table class="erk-table">
  <tr><th>Träger</th><th>Beispiele</th></tr>
  <tr><td>Bundessteuern</td><td>Energiesteuer, Tabaksteuer, Soli</td></tr>
  <tr><td>Landessteuern</td><td>ErbSt, Grunderwerbsteuer</td></tr>
  <tr><td>Gemeindesteuern</td><td>Grundsteuer, Gewerbesteuer</td></tr>
  <tr><td><strong>Gemeinschaftsteuern</strong></td><td><strong>ESt, KSt, USt</strong> (Bund + Länder + ggf. Gemeinden) – die größten!</td></tr>
  <tr><td>Kirchensteuer</td><td>Kirchensteuer</td></tr>
</table>

<p><strong>5. Zeitliche Einteilung:</strong> Periodische Steuern (jährlich, z.B. ESt) vs. Aperiodische Steuern (einmalig bei Ereignis, z.B. ErbSt)</p>

<h5>📌 Grundsatz Ermittlung der Steuerschuld</h5>
<p><strong>Schema:</strong> Steuerbemessungsgrundlage × Steuertarif = Steuerschuld</p>
<table class="erk-table">
  <tr><th>Begriff</th><th>Erklärung</th></tr>
  <tr><td>Grenzsteuersatz</td><td>Steuersatz auf den letzten verdienten Euro (Eingangssteuersatz = Beginn, Spitzensteuersatz = Maximum)</td></tr>
  <tr><td>Durchschnittssteuersatz</td><td>Gesamte Steuer ÷ Gesamteinkommen (immer niedriger als Grenzsteuersatz bei Progression)</td></tr>
  <tr><td><strong>Freibetrag</strong></td><td>Nur der <strong>übersteigende</strong> Betrag wird besteuert – „soweit" (z.B. §3 EStG)</td></tr>
  <tr><td><strong>Freigrenze</strong></td><td>Bei Überschreitung: <strong>voller</strong> Betrag wird besteuert – „wenn" (z.B. §23 Abs. 3 EStG)</td></tr>
</table>
<p><strong>ESt-Tarif 2026 (§ 32a EStG):</strong> Grundfreibetrag 12.348 € (0%) → Progressionszone (14–42%) → Spitzensteuersatz 42% → Reichensteuersatz 45%. Bei Zusammenveranlagung verdoppeln sich alle Grenzwerte.</p>

<h5>📌 Exkurs: Unternehmensformen & Besteuerungsprinzip</h5>
<table class="erk-table">
  <tr><th>Rechtsform</th><th>Haftung</th><th>Mindestkapital</th><th>Besonderheit</th></tr>
  <tr><td>Einzelunternehmen (EU)</td><td>Unbeschränkt (auch privat)</td><td>Keins</td><td>Transparenzprinzip: Unternehmer = Unternehmen</td></tr>
  <tr><td>GbR</td><td>Unbeschränkt</td><td>Keins</td><td>Einfachste Personengesellschaft</td></tr>
  <tr><td>Stille Gesellschaft</td><td>Keine (nur Einlage)</td><td>Keins</td><td>Typisch (§ KV) vs. Atypisch (Vertrag)</td></tr>
  <tr><td>OHG</td><td>Unbeschränkt</td><td>Keins</td><td>Alle GS zur Geschäftsführung berechtigt</td></tr>
  <tr><td>KG</td><td>Komplementär: voll / Kommanditist: beschränkt</td><td>Keins</td><td>GmbH & Co. KG: GmbH als Komplementär</td></tr>
  <tr><td>GmbH</td><td>Nur Gesellschaftsvermögen</td><td>25.000 € (UG: 1 €)</td><td>Eigene Rechtspersönlichkeit</td></tr>
  <tr><td>AG</td><td>Nur Gesellschaftsvermögen</td><td>50.000 €</td><td>Grundkapital in Aktien zerlegt</td></tr>
</table>
<p><strong>Besteuerungsprinzip:</strong></p>
<p>Personenunternehmen: Unternehmensebene → GewSt | Unternehmerebene → ESt + SolZ + KiSt</p>
<p>Kapitalgesellschaften: Gesellschaftsebene → KSt (15%) + GewSt + SolZ | Gesellschafterebene → Ausschüttung privat: 25% Abgeltungsteuer / betrieblich: Teileinkünfteverfahren (60% zu versteuern)</p>
<div class="def-box"><div class="def-label">KöMoG 2021 (Optionsmodell)</div>Personenhandelsgesellschaften können <strong>optieren</strong>, wie eine Kapitalgesellschaft besteuert zu werden – Kombination der außersteuerlichen Vorteile von Personengesellschaften mit den steuerlichen Vorteilen von Kapitalgesellschaften.</div>`,
  erklaerungen: [
    {
      titel: "\uD83D\uDCB0 Arten der \u00f6ffentlichen Einnahmen",
      inhalt: `<p>Der Staat finanziert sich durch <strong>4 Einnahmequellen</strong>:</p>
<div class="erk-tree">
  <div class="tree-root">\u00D6ffentliche Einnahmen</div>
  <div class="tree-branches">
    <div class="tree-branch"><strong>Abgaben</strong><br><small>Steuern, Beitr\u00e4ge, Geb\u00fchren</small></div>
    <div class="tree-branch"><strong>Ertr\u00e4ge</strong><br><small>aus staatlichen Betrieben</small></div>
    <div class="tree-branch"><strong>Ver\u00e4u\u00dferung</strong><br><small>von Staatsverm\u00f6gen</small></div>
    <div class="tree-branch"><strong>Verschuldung</strong><br><small>Staatsanleihen etc.</small></div>
  </div>
</div>
<p>Die <strong><span class="term" data-label="Abgaben" data-def="Oberbegriff f\u00fcr alle staatlichen Zahlungsverpflichtungen: Steuern, Beitr\u00e4ge und Geb\u00fchren">Abgaben</span></strong> unterteilen sich in:</p>
<div class="def-box"><div class="def-label"><span class="term" data-label="\u00a73 AO" data-def="Abgabenordnung \u00a73: Steuern sind Geldleistungen ohne Gegenleistung, die zur Einnahmeerzielung erhoben werden.">Steuern (\u00a73 Abs. 1 AO)</span></div>
Geldleistungen, die <strong>keine Gegenleistung</strong> f\u00fcr eine besondere Leistung darstellen.</div>
<div class="def-box"><div class="def-label">Steuerliche Nebenleistungen (\u00a73 Abs. 4 AO)</div>
Versp\u00e4tungszuschl\u00e4ge, S\u00e4umniszuschl\u00e4ge, Zinsen, Zwangsgelder.</div>
<div class="def-box"><div class="def-label">Beitr\u00e4ge</div>
<strong>M\u00f6glichkeit</strong> der Gegenleistung reicht aus.</div>
<div class="def-box"><div class="def-label">Geb\u00fchren</div>
<strong>Tats\u00e4chliche</strong> Gegenleistung.</div>`,
      beispiel: `Einkommensteuer = <strong>Steuer</strong> (keine Gegenleistung)<br>
Rundfunkbeitrag = <strong>Beitrag</strong> (Nutzung m\u00f6glich, auch ohne zu schauen)<br>
Personalausweis = <strong>Geb\u00fchr</strong> (du bekommst den Ausweis)`,
      merke: `Steuer = keine Gegenleistung \u2022 Beitrag = m\u00f6gliche Gegenleistung \u2022 Geb\u00fchr = tats\u00e4chliche Gegenleistung`,
      flipcards: [
        { vorne: "Steuer", hinten: "<strong>Keine</strong><br>Gegenleistung" },
        { vorne: "Beitrag", hinten: "<strong>M\u00f6gliche</strong><br>Gegenleistung" },
        { vorne: "Geb\u00fchr", hinten: "<strong>Tats\u00e4chliche</strong><br>Gegenleistung" },
        { vorne: "Nebenleistung", hinten: "Zuschlag, S\u00e4umnis,<br>Zinsen (\u00a73 IV AO)" }
      ],
      schritte: [
        {
          titel: "Schritt 1: Öffentliche Einnahmen im Überblick",
          inhalt: `<p>Der Staat hat <strong>4 Wege</strong> um sich zu finanzieren:</p>
<p>1️⃣ <strong>Abgaben</strong> – Steuern, Beiträge, Gebühren (der wichtigste!)<br>
2️⃣ <strong>Erträge</strong> – aus staatlichen Betrieben (z.B. Bundesbahn-Dividende)<br>
3️⃣ <strong>Veräußerung</strong> – Verkauf von Staatsvermögen<br>
4️⃣ <strong>Verschuldung</strong> – Staatsanleihen, Kredite</p>
<p>Für das Steuerrecht interessieren uns <strong>nur die Abgaben</strong>.</p>`
        },
        {
          titel: "Schritt 2: Abgaben – die 4 Unterarten",
          inhalt: `<p>Abgaben sind <strong>Pflichtleistungen</strong> an den Staat. Merke den Unterschied:</p>
<table class="erk-table">
  <tr><th>Art</th><th>Gegenleistung?</th><th>Beispiel</th></tr>
  <tr><td><strong>Steuer</strong></td><td>❌ Keine</td><td>Einkommensteuer</td></tr>
  <tr><td><strong>Beitrag</strong></td><td>🔄 Mögliche</td><td>Rundfunkbeitrag, GKV</td></tr>
  <tr><td><strong>Gebühr</strong></td><td>✅ Tatsächliche</td><td>Personalausweis</td></tr>
  <tr><td><strong>Nebenleistung</strong></td><td>⚠️ Strafcharakter</td><td>Verspätungszuschlag</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Steuerdefinition § 3 Abs. 1 AO",
          inhalt: `<p>Die Legaldefinition der Steuer lautet:</p>
<div class="def-box"><div class="def-label">§ 3 Abs. 1 AO</div>
„Steuern sind <strong>Geldleistungen</strong>, die nicht eine Gegenleistung für eine besondere Leistung darstellen und von einem öffentlich-rechtlichen Gemeinwesen zur <strong>Erzielung von Einnahmen</strong> allen auferlegt werden, bei denen der Tatbestand zutrifft, an den das Gesetz die Leistungspflicht knüpft."</div>
<p>Schlüsselwort: <strong>„keine Gegenleistung"</strong> – du zahlst, weil der Tatbestand erfüllt ist, nicht weil du etwas bekommst.</p>`
        },
        {
          titel: "Schritt 4: Abgrenzung im Praxisfall",
          inhalt: `<p>Immer wenn eine Abgabe zu qualifizieren ist, stelle diese Fragen:</p>
<p>❓ <strong>Bekommt man etwas dafür?</strong><br>
→ Nein → <strong>Steuer</strong><br>
→ Könnte man theoretisch → <strong>Beitrag</strong><br>
→ Man bekommt definitiv etwas → <strong>Gebühr</strong><br>
→ Es ist eine Sanktion → <strong>Nebenleistung</strong></p>
<p>💡 Der <strong>Rundfunkbeitrag</strong> ist kein Beitrag im traditionellen Sinn – das BVerfG hat ihn 2018 aber als verfassungskonformen Sonderbeitrag eingestuft.</p>`
        }
      ],
      fallbeispiele: [
        {
          situation: "Anna zahlt jeden Monat ihren GKV-Beitrag an die Krankenkasse. Sie ist jung und gesund – sie war in den letzten 3 Jahren nie beim Arzt.",
          aufgabe: "Um welche Art von Abgabe handelt es sich beim GKV-Beitrag?",
          hinweis: "Stell dir die Frage: Muss Anna eine konkrete Gegenleistung bekommen – oder reicht die Möglichkeit?",
          loesung: [
            "Prüfe: Bekommt Anna eine <strong>tatsächliche</strong> Gegenleistung? → Nein, sie nutzt die Kasse gerade nicht.",
            "Prüfe: Könnte sie eine Gegenleistung bekommen? → <strong>Ja</strong>, sie könnte jederzeit Leistungen in Anspruch nehmen.",
            "Möglichkeit der Gegenleistung reicht aus → das ist ein <strong>Beitrag</strong>."
          ],
          ergebnis: "GKV-Beitrag = Beitrag (§ 3 Abs. 1 AO analog), weil die Möglichkeit der Inanspruchnahme genügt."
        },
        {
          situation: "Max gibt seine Steuererklärung 3 Monate zu spät ab. Das Finanzamt erhebt einen Verspätungszuschlag von 150 €.",
          aufgabe: "Wie ist der Verspätungszuschlag abgabenrechtlich einzuordnen?",
          hinweis: "Der Zuschlag wird nicht wegen einer Leistung erhoben – er hat eher einen Sanktionscharakter.",
          loesung: [
            "Steuer? → Nein, es gibt keinen eigentlichen Steuertatbestand.",
            "Gebühr oder Beitrag? → Nein, Max bekommt keine Gegenleistung.",
            "<strong>§ 3 Abs. 4 AO</strong> zählt Verspätungszuschläge ausdrücklich zu den <strong>steuerlichen Nebenleistungen</strong>."
          ],
          ergebnis: "Verspätungszuschlag = steuerliche Nebenleistung (§ 3 Abs. 4 AO) – Strafcharakter."
        }
      ],
      details: [
        { titel: "\u{1F4D6} \u00a73 AO im Wortlaut", inhalt: "<em>\"Steuern sind Geldleistungen, die nicht eine Gegenleistung f\u00fcr eine besondere Leistung darstellen und von einem \u00f6ffentlich-rechtlichen Gemeinwesen zur Erzielung von Einnahmen allen auferlegt werden, bei denen der Tatbestand zutrifft, an den das Gesetz die Leistungspflicht kn\u00fcpft.\"</em>" },
        { titel: "\u{1F9E0} Eselsbr\u00fccke", inhalt: "<strong>S</strong>teuer = <strong>S</strong>o-oder-so zahlen (keine Wahl)<br><strong>B</strong>eitrag = <strong>B</strong>enutzung m\u00f6glich<br><strong>G</strong>eb\u00fchr = <strong>G</strong>egenleistung garantiert" }
      ],
      interaktion: [
        { frage: "Der Rundfunkbeitrag ist eine ...", optionen: ["Steuer", "Geb\u00fchr", "Beitrag", "Nebenleistung"], richtig: 2, erklaerung: "M\u00f6glichkeit der Nutzung reicht = Beitrag." },
        { frage: "Was ist ein Versp\u00e4tungszuschlag?", optionen: ["Eine Steuer", "Eine Geb\u00fchr", "Eine steuerliche Nebenleistung", "Ein Beitrag"], richtig: 2, erklaerung: "Versp\u00e4tungszuschl\u00e4ge sind steuerliche Nebenleistungen (\u00a73 Abs. 4 AO)." },
        { frage: "Beim Personalausweis zahlt man eine ...", optionen: ["Steuer", "Geb\u00fchr", "Beitrag", "Nebenleistung"], richtig: 1, erklaerung: "Man bekommt den Ausweis als tats\u00e4chliche Gegenleistung = Geb\u00fchr." },
        { frage: "Was ist das Erkennungsmerkmal einer Steuer?", optionen: ["Man bekommt etwas daf\u00fcr", "Kein Anspruch auf individuelle Gegenleistung", "Sie ist freiwillig", "Sie wird nur von Firmen gezahlt"], richtig: 1, erklaerung: "\u00a73 Abs. 1 AO: Kein Anspruch auf individuelle Gegenleistung." },
        { frage: "Die GKV-Beitr\u00e4ge sind ein Beispiel f\u00fcr ...", optionen: ["Steuern", "Geb\u00fchren", "Beitr\u00e4ge", "Nebenleistungen"], richtig: 2, erklaerung: "Man zahlt, weil man den Dienst nutzen k\u00f6nnte = Beitrag." }
      ]
    },
    {
      titel: "\uD83D\uDCDC Rechtsquellen des Steuerrechts",
      inhalt: `<p>Die Rechtsquellen sind <strong>pyramidenf\u00f6rmig</strong> aufgebaut:</p>
<div class="erk-tree">
  <div class="tree-root">Rechtsquellen-Pyramide</div>
  <div class="tree-branches">
    <div class="tree-branch" style="flex:0 0 100%;max-width:100%;background:#DBEAFE;border-color:#3B82F6;"><strong>1. Grundgesetz (GG)</strong><br><small>Finanzverfassung Art. 104a ff.</small></div>
    <div class="tree-branch" style="flex:0 0 100%;max-width:100%;"><strong>2. Abgabenordnung (AO)</strong><br><small>Allgemeines Fundament</small></div>
    <div class="tree-branch"><strong>3. Einzelsteuergesetze</strong><br><small>EStG, KStG, GewStG...</small></div>
    <div class="tree-branch"><strong>4. FGO</strong><br><small>Rechtsschutz</small></div>
  </div>
</div>
<table class="erk-table">
  <tr><th>Artikel</th><th>Regelt</th></tr>
  <tr><td><strong>Art. 105 GG</strong></td><td>Gesetzgebungskompetenz</td></tr>
  <tr><td><strong>Art. 106 GG</strong></td><td>Verteilung Steueraufkommen</td></tr>
  <tr><td><strong>Art. 108 GG</strong></td><td>Finanzverwaltung</td></tr>
</table>`,
      merke: `Art. 105 = Gesetzgebung \u2022 Art. 106 = Geldverteilung \u2022 Art. 108 = Verwaltung`,
      schritte: [
        {
          titel: "Ebene 1: Das Grundgesetz (GG)",
          inhalt: `<p>Das GG steht an der <strong>Spitze der Pyramide</strong> – kein Steuergesetz darf dagegen verstoßen.</p>
<p>Relevant für Steuerrecht:<br>
• <strong>Art. 105 GG</strong> – Wer darf Steuergesetze machen?<br>
• <strong>Art. 106 GG</strong> – Wer bekommt welche Steuereinnahmen?<br>
• <strong>Art. 108 GG</strong> – Wer verwaltet die Steuern (Finanzämter)?</p>
<p>Außerdem: Die <strong>Grundrechte</strong> wirken als Abwehrrechte gegen übermäßige Besteuerung.</p>`
        },
        {
          titel: "Ebene 2: Die Abgabenordnung (AO)",
          inhalt: `<p>Die AO ist das <strong>„Grundgesetz des Steuerrechts"</strong> – sie gilt für alle Steuerarten gleich.</p>
<p>Was regelt die AO?<br>
• Wer schuldet was? (Steuerschuldverhältnis)<br>
• Welches Finanzamt ist zuständig?<br>
• Wie läuft ein Steuerverfahren ab?<br>
• Fristen, Einspruch, Vollstreckung</p>
<div class="def-box"><div class="def-label">Wichtig</div>Straf- und Bußgeldvorschriften in der AO gehören zum <strong>Strafrecht</strong>, nicht zum Steuerrecht!</div>`
        },
        {
          titel: "Ebene 3 & 4: Einzelsteuergesetze & FGO",
          inhalt: `<p><strong>Einzelsteuergesetze</strong> (EStG, KStG, GewStG, UStG...) regeln jede Steuerart im Detail. Sie bauen auf der AO auf.</p>
<p><strong>FGO (Finanzgerichtsordnung)</strong> regelt das Gerichtsverfahren, wenn du gegen das Finanzamt klagen willst:</p>
<p>📍 Finanzgericht (FG) → Bundesfinanzhof (BFH) → ggf. BVerfG oder EuGH</p>
<p>💡 Merke: Je weiter unten in der Pyramide, desto <strong>spezieller</strong> das Gesetz.</p>`
        }
      ],
      flipcards: [
        { vorne: "Art. 105 GG", hinten: "Gesetzgebungs-<br><strong>kompetenz</strong>" },
        { vorne: "Art. 106 GG", hinten: "Verteilung des<br><strong>Steueraufkommens</strong>" },
        { vorne: "Art. 108 GG", hinten: "<strong>Finanzverwaltung</strong>" }
      ],
      details: [
        { titel: "\u{1F4D6} Was ist die AO genau?", inhalt: "Die <strong>Abgabenordnung</strong> ist das \"Grundgesetz des Steuerrechts\". Sie regelt alles, was f\u00fcr alle Steuerarten gleich gilt: Fristen, Erkl\u00e4rungspflichten, Steuerbescheide, Einspruch, Vollstreckung etc." }
      ],
      interaktion: [
        { frage: "Welcher Artikel regelt die Verteilung des Steueraufkommens?", optionen: ["Art. 105 GG", "Art. 106 GG", "Art. 108 GG", "Art. 104a GG"], richtig: 1, erklaerung: "Art. 106 GG = Verteilung des Steueraufkommens." },
        { frage: "Was steht an der Spitze der Rechtsquellen-Pyramide?", optionen: ["AO", "EStG", "GG", "FGO"], richtig: 2, erklaerung: "Das Grundgesetz steht ganz oben." },
        { frage: "Was regelt die AO?", optionen: ["Nur die ESt", "Allgemeines Fundament f\u00fcr alle Steuerarten", "Nur das Finanzgericht", "Nur Z\u00f6lle"], richtig: 1, erklaerung: "Die AO ist das allgemeine Steuerrecht \u2013 Fundament f\u00fcr alles." },
        { frage: "Wof\u00fcr steht FGO?", optionen: ["Finanzgerichtsordnung", "F\u00f6derale Grundordnung", "Fiskalgesetzordnung", "Finanzgrundordnung"], richtig: 0, erklaerung: "FGO = Finanzgerichtsordnung \u2013 regelt den Rechtsschutz gegen das Finanzamt." },
        { frage: "Wer verwaltet die Steuern laut GG?", optionen: ["Art. 105 regelt das", "Art. 106 regelt das", "Art. 108 regelt das", "Das steht nicht im GG"], richtig: 2, erklaerung: "Art. 108 GG regelt die Finanzverwaltung." }
      ]
    },
    {
      titel: "\u{1F3DB}\uFE0F Gesetzgebungskompetenz",
      inhalt: `<table class="erk-table">
  <tr><th>Kompetenz</th><th>Wer</th><th>Welche Steuern</th></tr>
  <tr><td><strong>Ausschlie\u00dflich Bund</strong></td><td>Nur der Bund</td><td>Z\u00f6lle, Finanzmonopole</td></tr>
  <tr><td><strong>Konkurrierend</strong></td><td>Bund + L\u00e4nder</td><td>Alle \u00fcbrigen (au\u00dfer \u00f6rtliche)</td></tr>
  <tr><td><strong>L\u00e4nder</strong></td><td>Nur die L\u00e4nder</td><td>\u00d6rtliche Steuern, GrSt-Hebesatz, GrESt-Satz</td></tr>
</table>`,
      beispiel: `Bund allein: Z\u00f6lle. Bund+L\u00e4nder: ESt. Gemeinden: Hundesteuer.`,
      schritte: [
        {
          titel: "Schritt 1: Warum gibt es Gesetzgebungskompetenz?",
          inhalt: `<p>Im f\u00f6deralen Deutschland braucht es klare Regeln: <strong>Wer darf Steuergesetze erlassen?</strong></p>
<p>Das Grundgesetz (Art. 105-108 GG) verteilt die Macht auf Bund, L\u00e4nder und Gemeinden.</p>
<p>Art. 105 GG = <strong>Gesetzgebungskompetenz</strong><br>
Art. 106 GG = <strong>Ertragshoheit</strong> (wer bekommt das Geld?)<br>
Art. 108 GG = <strong>Verwaltungskompetenz</strong></p>`
        },
        {
          titel: "Schritt 2: Die 3 Kompetenzarten",
          inhalt: `<table class="erk-table">
  <tr><th>Kompetenz</th><th>Wer?</th><th>Beispiele</th></tr>
  <tr><td><strong>Ausschlie\u00dflich Bund</strong></td><td>Nur der Bund</td><td>Z\u00f6lle, Finanzmonopole</td></tr>
  <tr><td><strong>Konkurrierend</strong></td><td>Bund hat Vorrang</td><td>ESt, USt, KSt</td></tr>
  <tr><td><strong>L\u00e4nder</strong></td><td>Nur die L\u00e4nder</td><td>Hundesteuer, Vergn\u00fcgungssteuer</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Gesetzgebung \u2260 Ertragshoheit!",
          inhalt: `<p>Wichtiger Unterschied:</p>
<p>\ud83d\udcd6 <strong>Gesetzgebungskompetenz</strong> = Wer macht das Gesetz?<br>
\ud83d\udcb0 <strong>Ertragshoheit</strong> = Wer bekommt das Steuergeld?</p>
<div class="def-box"><div class="def-label">Beispiel Grunderwerbsteuer</div>
Bund macht das GrESt-Gesetz (Kompetenz) \u2014 aber das Geld flie\u00dft an die <strong>L\u00e4nder</strong> (Ertrag).</div>`
        },
        {
          titel: "Schritt 4: Pr\u00fcfungstipps",
          inhalt: `<p>H\u00e4ufig abgefragte Zuordnungen:</p>
<p>\u2753 Wer hat Kompetenz f\u00fcr Hundesteuer? \u2192 <strong>L\u00e4nder/Gemeinden</strong><br>
\u2753 Was sind Z\u00f6lle? \u2192 <strong>Ausschlie\u00dflich Bund</strong><br>
\u2753 Was ist konkurrierende Gesetzgebung? \u2192 Bund hat Vorrang, L\u00e4nder d\u00fcrfen, wenn Bund nicht t\u00e4tig</p>`
        }
      ],

      interaktion: [
        { frage: "Wer hat die ausschlie\u00dfliche Kompetenz f\u00fcr Z\u00f6lle?", optionen: ["L\u00e4nder", "Gemeinsam", "Nur der Bund", "Gemeinden"], richtig: 2, erklaerung: "Z\u00f6lle = ausschlie\u00dflich Bund." },
        { frage: "Die Hundesteuer ist Sache der ...", optionen: ["Bundes", "L\u00e4nder", "Gemeinden", "EU"], richtig: 2, erklaerung: "Hundesteuer = \u00f6rtliche Aufwandsteuer der Gemeinden." },
        { frage: "Was bedeutet 'konkurrierende Gesetzgebung'?", optionen: ["Bund und L\u00e4nder konkurrieren um Steuergelder", "Bund und L\u00e4nder teilen sich die Kompetenz", "Nur L\u00e4nder d\u00fcrfen Gesetze machen", "Es gibt Wettbewerb zwischen Gemeinden"], richtig: 1, erklaerung: "Konkurrierende Gesetzgebung = Bund und L\u00e4nder teilen sich die Kompetenz." },
        { frage: "Wer bestimmt den Grundsteuer-Hebesatz?", optionen: ["Der Bund", "Die EU", "Die L\u00e4nder/Gemeinden", "Das Finanzamt"], richtig: 2, erklaerung: "Der GrSt-Hebesatz liegt in der Kompetenz der L\u00e4nder/Gemeinden." },
        { frage: "Die ESt ist welche Art von Gesetzgebung?", optionen: ["Ausschlie\u00dflich Bund", "Konkurrierende Gesetzgebung", "Ausschlie\u00dflich L\u00e4nder", "Keine davon"], richtig: 1, erklaerung: "Die ESt f\u00e4llt unter die konkurrierende Gesetzgebung von Bund und L\u00e4ndern." }
      ]
    },
    {
      titel: "\u{1F4CA} Juristische Einteilung der Steuern",
      inhalt: `<table class="erk-table">
  <tr><th>Steuerart</th><th>Warum besteuert?</th><th>Beispiele</th></tr>
  <tr><td><strong>Ertragsteuern</strong></td><td>Einkommen erzielt</td><td>ESt, KSt, GewSt</td></tr>
  <tr><td><strong>Substanzsteuern</strong></td><td>Verm\u00f6gen besitzt</td><td>ErbSt (Erbschaft), GrSt</td></tr>
  <tr><td><strong>Verkehrsteuern</strong></td><td>Rechtsgesch\u00e4fte t\u00e4tigt</td><td>USt, ErbSt (Schenkung)</td></tr>
  <tr><td><strong>Verbrauchsteuern</strong></td><td>Waren konsumiert</td><td>Bier-, Tabaksteuer</td></tr>
</table>`,
      merke: `<strong>ErbSt taucht 2x auf!</strong> Erbschaft = Substanzsteuer (kein Rechtsgesch\u00e4ft). Schenkung = Verkehrsteuer (Rechtsgesch\u00e4ft).`,
      schritte: [
        {
          titel: "Schritt 1: Was wird besteuert?",
          inhalt: `<p>Die juristische Einteilung fragt: <strong>Was ist der Besteuerungsanlass?</strong></p>
<p>\ud83d\udcb0 <strong>Ertrag</strong> \u2192 Ertragsteuern (ESt, KSt, GewSt)<br>
\ud83c\udfe0 <strong>Substanz/Verm\u00f6gen</strong> \u2192 Substanzsteuern (GrSt)<br>
\ud83d\udd04 <strong>Rechtsgesch\u00e4ft</strong> \u2192 Verkehrsteuern (USt)<br>
\ud83d\uded2 <strong>Verbrauch</strong> \u2192 Verbrauchsteuern (Energiesteuer)</p>`
        },
        {
          titel: "Schritt 2: Die 4 Kategorien mit Beispielen",
          inhalt: `<table class="erk-table">
  <tr><th>Steuerart</th><th>Anlass</th><th>Wichtigste Steuern</th></tr>
  <tr><td><strong>Ertragsteuern</strong></td><td>Einkommen erzielt</td><td>ESt, KSt, GewSt</td></tr>
  <tr><td><strong>Substanzsteuern</strong></td><td>Verm\u00f6gen besitzt</td><td>ErbSt (Erbschaft), GrSt</td></tr>
  <tr><td><strong>Verkehrsteuern</strong></td><td>Rechtsgesch\u00e4ft t\u00e4tigt</td><td>USt, ErbSt (Schenkung), GrESt</td></tr>
  <tr><td><strong>Verbrauchsteuern</strong></td><td>Verbrauch</td><td>Energie-, Tabak-, Biersteuer</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Achtung \u2013 ErbSt ist doppelt!",
          inhalt: `<p>Die Erbschaftsteuer (ErbSt) taucht in zwei Kategorien auf:</p>
<table class="erk-table">
  <tr><th>Vorgang</th><th>Kategorie</th><th>Warum?</th></tr>
  <tr><td>Erbschaft bei Tod</td><td>Substanzsteuer</td><td>Verm\u00f6gen wird \u00fcbertragen</td></tr>
  <tr><td>Schenkung zu Lebzeiten</td><td>Verkehrsteuer</td><td>Ist ein Rechtsgesch\u00e4ft</td></tr>
</table>`
        },
        {
          titel: "Schritt 4: Die 3 Ertragsteuern merken",
          inhalt: `<p>Die wichtigsten Steuern im BWL-Studium sind die <strong>3 Ertragsteuern</strong>:</p>
<p>\ud83d\udcb5 <strong>ESt</strong> = Einkommensteuer (nat\u00fcrliche Personen)<br>
\ud83c\udfe2 <strong>KSt</strong> = K\u00f6rperschaftsteuer (Kapitalgesellschaften)<br>
\ud83c\udfed <strong>GewSt</strong> = Gewerbesteuer (Gewerbebetriebe)</p>
<div class="def-box"><div class="def-label">Eselsbrücke</div>
"<strong>EKG</strong>" merken: Einkommensteuer \u2013 K\u00f6rperschaftsteuer \u2013 Gewerbesteuer</div>`
        }
      ],

      interaktion: [
        { frage: "Die USt ist eine ...", optionen: ["Ertragsteuer", "Substanzsteuer", "Verkehrsteuer", "Verbrauchsteuer"], richtig: 2, erklaerung: "USt = Verkehrsteuer (Rechtsgesch\u00e4fte = Ums\u00e4tze)." },
        { frage: "Warum ist die ErbSt bei Erbschaft eine Substanzsteuer?", optionen: ["Weil der Betrag hoch ist", "Weil kein Rechtsgesch\u00e4ft vorliegt", "Weil das Land sie erhebt", "Weil sie j\u00e4hrlich anf\u00e4llt"], richtig: 1, erklaerung: "Eigent\u00fcmer ist tot \u2192 kein Rechtsgesch\u00e4ft \u2192 Substanzsteuer." },
        { frage: "Biersteuer geh\u00f6rt zu den ...", optionen: ["Ertragsteuern", "Substanzsteuern", "Verkehrsteuern", "Verbrauchsteuern"], richtig: 3, erklaerung: "Biersteuer = Verbrauchsteuer (besteuert Warenkonsum)." },
        { frage: "ESt, KSt und GewSt sind ...", optionen: ["Verkehrsteuern", "Ertragsteuern", "Substanzsteuern", "Verbrauchsteuern"], richtig: 1, erklaerung: "Man wird besteuert, weil man Einkommen erzielt = Ertragsteuern." },
        { frage: "Bei einer Schenkung ist die ErbSt eine ...", optionen: ["Ertragsteuer", "Substanzsteuer", "Verkehrsteuer", "Verbrauchsteuer"], richtig: 2, erklaerung: "Schenkung = 2 Willenserkl\u00e4rungen = Rechtsgesch\u00e4ft = Verkehrsteuer." }
      ]
    },
    {
      titel: "\u{1F3E0} Politische Einteilung der Steuern",
      inhalt: `<table class="erk-table">
  <tr><th>Kategorie</th><th>Empf\u00e4nger</th><th>Beispiele</th></tr>
  <tr><td><strong>Bundessteuern</strong></td><td>Nur Bund</td><td>Energiesteuer, Tabaksteuer</td></tr>
  <tr><td><strong>Landessteuern</strong></td><td>Nur L\u00e4nder</td><td>ErbSt, GrESt</td></tr>
  <tr><td><strong>Gemeindesteuern</strong></td><td>Nur Gemeinden</td><td>GrSt, GewSt</td></tr>
  <tr><td><strong>Gemeinschaftsteuern</strong></td><td>Bund + L\u00e4nder + Gemeinden</td><td>ESt, KSt, USt</td></tr>
</table>`,
      merke: `Gemeinschaftsteuern (ESt + USt) = Gro\u00dfteil der Staatseinnahmen!`,
      schritte: [
        {
          titel: "Schritt 1: Politisch = Wer bekommt das Geld?",
          inhalt: `<p>Die politische Einteilung fragt: <strong>Wer ist der Empf\u00e4nger der Steuereinnahmen?</strong></p>
<p>4 Empf\u00e4nger:</p>
<p>\ud83c\udfe6 <strong>Bund</strong> alleine<br>
\ud83c\udff0 <strong>L\u00e4nder</strong> alleine<br>
\ud83c\udfe1 <strong>Gemeinden</strong> alleine<br>
\ud83e\udd1d <strong>Gemeinschaft</strong> = alle teilen sich das Geld</p>`
        },
        {
          titel: "Schritt 2: Die 4 Kategorien mit Beispielen",
          inhalt: `<table class="erk-table">
  <tr><th>Kategorie</th><th>Empf\u00e4nger</th><th>Wichtige Steuern</th></tr>
  <tr><td><strong>Bundessteuern</strong></td><td>Nur Bund</td><td>Energiesteuer, Tabaksteuer, SolZ</td></tr>
  <tr><td><strong>Landessteuern</strong></td><td>Nur L\u00e4nder</td><td>ErbSt, GrESt</td></tr>
  <tr><td><strong>Gemeindesteuern</strong></td><td>Nur Gemeinden</td><td>GrSt, GewSt</td></tr>
  <tr><td><strong>Gemeinschaftsteuern</strong></td><td>Alle teilen</td><td>ESt, KSt, USt \u2190 die Gr\u00f6\u00dften!</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Gemeinschaftsteuern im Detail",
          inhalt: `<p>Die gr\u00f6\u00dften Steuern sind Gemeinschaftsteuern:</p>
<p>\ud83d\udcb0 <strong>Einkommensteuer</strong> \u2192 Bund 42,5% | L\u00e4nder 42,5% | Gemeinden 15%<br>
\ud83c\udfe2 <strong>K\u00f6rperschaftsteuer</strong> \u2192 Bund 50% | L\u00e4nder 50%<br>
\ud83d\uded2 <strong>Umsatzsteuer</strong> \u2192 Bund + L\u00e4nder (variabler Schl\u00fcssel)</p>
<div class="def-box"><div class="def-label">Merke</div>
ESt, KSt, USt = Gemeinschaftsteuern. Sie machen den Gro\u00dfteil aller Einnahmen aus!</div>`
        },
        {
          titel: "Schritt 4: H\u00e4ufige Pr\u00fcfungsfallen",
          inhalt: `<p>Oft verwechselt:</p>
<p>\u274c GewSt = Bundessteuer? NEIN \u2192 <strong>Gemeindesteuer</strong><br>
\u274c ErbSt = Bundessteuer? NEIN \u2192 <strong>Landessteuer</strong><br>
\u2705 SolZ = Bundessteuer (ja, geht komplett an den Bund)</p>
<div class="def-box"><div class="def-label">Verwechslungsgefahr</div>
Politische Einteilung \u2260 Gesetzgebungskompetenz! Bund macht das GewSt-Gesetz, aber Gemeinden bekommen das Geld.</div>`
        }
      ],

      interaktion: [
        { frage: "Welche Steuer bringt am meisten ein?", optionen: ["Bundessteuern", "Landessteuern", "Gemeinschaftsteuern", "Gemeindesteuern"], richtig: 2, erklaerung: "ESt und USt als Gemeinschaftsteuern = Haupteinnahmen." },
        { frage: "Die Tabaksteuer ist eine ...", optionen: ["Gemeinschaftsteuer", "Bundessteuer", "Landessteuer", "Gemeindesteuer"], richtig: 1, erklaerung: "Tabaksteuer = Bundessteuer (nur der Bund)." },
        { frage: "Wer bekommt die Grundsteuer?", optionen: ["Der Bund", "Die L\u00e4nder", "Die Gemeinden", "Alle zusammen"], richtig: 2, erklaerung: "GrSt = Gemeindesteuer." },
        { frage: "Die ErbSt ist eine ...", optionen: ["Bundessteuer", "Landessteuer", "Gemeindesteuer", "Gemeinschaftsteuer"], richtig: 1, erklaerung: "ErbSt = Landessteuer (nur die L\u00e4nder)." },
        { frage: "ESt und USt geh\u00f6ren zu den ...", optionen: ["Bundessteuern", "Landessteuern", "Gemeindesteuern", "Gemeinschaftsteuern"], richtig: 3, erklaerung: "ESt + USt = Gemeinschaftsteuern (Bund, L\u00e4nder, ggf. Gemeinden)." }
      ]
    },
    {
      titel: "\u2696\uFE0F Freibetrag vs. Freigrenze",
      inhalt: `<table class="erk-table">
  <tr><th></th><th>Freibetrag</th><th>Freigrenze</th></tr>
  <tr><td><strong>Regel</strong></td><td>Nur <strong>\u00fcbersteigender</strong> Betrag besteuert</td><td><strong>Gesamter</strong> Betrag besteuert</td></tr>
  <tr><td><strong>Erkennungswort</strong></td><td>\u201Esoweit\u201C</td><td>\u201Ewenn\u201C</td></tr>
  <tr><td><strong>Beispiel</strong></td><td>1.000\u20ac Freibetrag, 1.500\u20ac Einkommen \u2192 500\u20ac besteuert</td><td>1.000\u20ac Freigrenze, 1.500\u20ac Einkommen \u2192 1.500\u20ac besteuert</td></tr>
</table>`,
      merke: `Freibetrag = \u201Esoweit\u201C (nur dar\u00fcber) vs. Freigrenze = \u201Ewenn\u201C (alles besteuert)`,
      schritte: [
        {
          titel: "Schritt 1: Der Grundunterschied",
          inhalt: `<p>Beide gew\u00e4hren eine Steuerbefreiung, aber <strong>fundamental unterschiedlich</strong>:</p>
<div class="def-box"><div class="def-label">Freibetrag</div>
Nur der Betrag <strong>\u00fcber</strong> dem Freibetrag wird besteuert. Das Erkennungswort: <strong>\u201Esoweit\u201C</strong></div>
<div class="def-box"><div class="def-label">Freigrenze</div>
Wenn die Grenze \u00fcberschritten wird, wird <strong>alles</strong> besteuert. Das Erkennungswort: <strong>\u201Ewenn\u201C</strong></div>`
        },
        {
          titel: "Schritt 2: Zahlenbeispiel verstehen",
          inhalt: `<p>Angenommen: 1.000 \u20ac Freibetrag/Freigrenze, du hast <strong>1.500 \u20ac</strong> Einnahmen:</p>
<table class="erk-table">
  <tr><th>Variante</th><th>Berechnung</th><th>Zu versteuern</th></tr>
  <tr><td><strong>Freibetrag</strong></td><td>1.500 \u2212 1.000 = 500</td><td>Nur <strong>500 \u20ac</strong></td></tr>
  <tr><td><strong>Freigrenze</strong></td><td>Grenze \u00fcberschritten!</td><td><strong>1.500 \u20ac</strong> komplett</td></tr>
</table>
<p>Sind die Einnahmen unter 1.000 \u20ac? Dann kein Unterschied \u2013 beide: 0 Steuer.</p>`
        },
        {
          titel: "Schritt 3: Erkennungsw\u00f6rter im Gesetz",
          inhalt: `<table class="erk-table">
  <tr><th>Typ</th><th>Erkennungswort</th><th>Formulierungsbeispiel</th></tr>
  <tr><td><strong>Freibetrag</strong></td><td>\u201Esoweit\u201C</td><td>"...soweit der Betrag 1.000 \u20ac \u00fcbersteigt..."</td></tr>
  <tr><td><strong>Freigrenze</strong></td><td>\u201Ewenn\u201C</td><td>"...wenn der Betrag 1.000 \u20ac \u00fcbersteigt..."</td></tr>
</table>
<p>Im Gesetzestext: suche nach "soweit" \u2192 Freibetrag. Suche "wenn" \u2192 Freigrenze.</p>`
        },
        {
          titel: "Schritt 4: Wichtige Beispiele aus der Praxis",
          inhalt: `<p>Wichtige Freibetr\u00e4ge:</p>
<p>\ud83d\udfe2 <strong>Grundfreibetrag ESt</strong>: ca. 12.000 \u20ac \u2192 <strong>Freibetrag</strong><br>
\ud83d\udfe2 <strong>Arbeitnehmer-Pauschbetrag</strong>: 1.230 \u20ac \u2192 <strong>Freibetrag</strong></p>
<p>Wichtige Freigrenzen:</p>
<p>\ud83d\udd34 <strong>Kleinunternehmerregelung USt</strong>: 22.000 \u20ac \u2192 <strong>Freigrenze</strong></p>
<div class="def-box"><div class="def-label">Pr\u00fcfungstipp</div>
Bei "soweit" = Freibetrag: nur der \u00fcbersteigende Betrag wird besteuert. Bei "wenn" = Freigrenze: alles oder nichts!</div>`
        }
      ],

      interaktion: [
        { frage: "Freibetrag 1.000\u20ac, Einkommen 1.500\u20ac. Was wird besteuert?", optionen: ["Nichts", "500\u20ac", "1.000\u20ac", "1.500\u20ac"], richtig: 1, erklaerung: "Freibetrag: nur der \u00fcbersteigende Betrag = 500\u20ac." },
        { frage: "Freigrenze 1.000\u20ac, Einkommen 1.500\u20ac. Was wird besteuert?", optionen: ["Nichts", "500\u20ac", "1.000\u20ac", "1.500\u20ac"], richtig: 3, erklaerung: "Freigrenze: bei \u00dcberschreitung der gesamte Betrag = 1.500\u20ac." },
        { frage: "Welches Erkennungswort geh\u00f6rt zum Freibetrag?", optionen: ["wenn", "soweit", "falls", "sofern"], richtig: 1, erklaerung: "Freibetrag = 'soweit', Freigrenze = 'wenn'." },
        { frage: "Freibetrag 1.000\u20ac, Einkommen 800\u20ac. Was passiert?", optionen: ["800\u20ac werden besteuert", "Nichts wird besteuert", "200\u20ac werden besteuert", "1.000\u20ac werden besteuert"], richtig: 1, erklaerung: "Unter dem Freibetrag = keine Besteuerung." },
        { frage: "Freigrenze 1.000\u20ac, Einkommen 999\u20ac. Was passiert?", optionen: ["999\u20ac besteuert", "Nichts besteuert", "1\u20ac besteuert", "1.000\u20ac besteuert"], richtig: 1, erklaerung: "Unter der Freigrenze = keine Besteuerung. Erst bei \u00dcberschreitung greift sie." }
      ]
    },
    {
      titel: "\u{1F3E2} Unternehmensformen im \u00dcberblick",
      inhalt: `<table class="erk-table">
  <tr><th>Form</th><th>Haftung</th><th>Kapital</th><th>Besonderheit</th></tr>
  <tr><td><strong>Einzelunternehmen</strong></td><td>Unbeschr\u00e4nkt</td><td>\u2013</td><td>Transparenzprinzip</td></tr>
  <tr><td><strong>GbR</strong></td><td>Unbeschr\u00e4nkt</td><td>\u2013</td><td>Mind. 2 Personen</td></tr>
  <tr><td><strong>OHG</strong></td><td>Unbeschr\u00e4nkt</td><td>\u2013</td><td>Handelsgewerbe</td></tr>
  <tr><td><strong>KG</strong></td><td>Komplem. unbeschr., Komm. beschr.</td><td>\u2013</td><td>2 Gesellschaftertypen</td></tr>
  <tr><td><strong>GmbH</strong></td><td>Nur Gesellschaftsverm\u00f6gen</td><td>25.000\u20ac</td><td>Eigene Rechtspers\u00f6nlichkeit</td></tr>
  <tr><td><strong>AG</strong></td><td>Nur Gesellschaftsverm\u00f6gen</td><td>50.000\u20ac</td><td>3 Organe: HV, AR, Vorstand</td></tr>
</table>`,
      beispiel: `<strong>GmbH & Co. KG</strong>: Komplement\u00e4r ist eine GmbH \u2013 faktisch haftet niemand pers\u00f6nlich.`,
      schritte: [
        {
          titel: "Schritt 1: Zwei Grundtypen",
          inhalt: `<p>Im Steuerrecht unterscheiden wir zwei grunds\u00e4tzliche Unternehmensformen:</p>
<div class="def-box"><div class="def-label">Personenunternehmen</div>
Eine oder mehrere nat\u00fcrliche Personen haften <strong>unbeschr\u00e4nkt</strong> mit ihrem Privatverm\u00f6gen.<br>Beispiele: Einzelunternehmen, GbR, OHG, KG</div>
<div class="def-box"><div class="def-label">Kapitalgesellschaften</div>
Haftung <strong>auf das Gesellschaftsverm\u00f6gen beschr\u00e4nkt</strong>. Eigene Rechtsperson.<br>Beispiele: GmbH, AG, UG</div>`
        },
        {
          titel: "Schritt 2: \u00dcberblick alle Formen",
          inhalt: `<table class="erk-table">
  <tr><th>Form</th><th>Haftung</th><th>Besteuerung</th></tr>
  <tr><td><strong>Einzelunternehmen</strong></td><td>Unbeschr\u00e4nkt</td><td>ESt (Transparenzprinzip)</td></tr>
  <tr><td><strong>GbR</strong></td><td>Unbeschr\u00e4nkt</td><td>ESt bei den Gesellschaftern</td></tr>
  <tr><td><strong>OHG</strong></td><td>Unbeschr\u00e4nkt</td><td>GewSt + ESt</td></tr>
  <tr><td><strong>KG</strong></td><td>Kompl. unbeschr., Komm. auf Einlage</td><td>GewSt + ESt</td></tr>
  <tr><td><strong>GmbH</strong></td><td>Beschr\u00e4nkt (Stammkapital 25.000 \u20ac)</td><td>KSt + GewSt</td></tr>
  <tr><td><strong>AG</strong></td><td>Beschr\u00e4nkt (Grundkapital 50.000 \u20ac)</td><td>KSt + GewSt</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Transparenzprinzip vs. Trennungsprinzip",
          inhalt: `<p>Der wichtigste steuerliche Unterschied:</p>
<div class="def-box"><div class="def-label"><span class="term" data-label="Transparenzprinzip" data-def="Gewinne werden direkt den Gesellschaftern zugerechnet und bei ihnen mit ESt besteuert. Das Unternehmen selbst zahlt keine KSt.">Transparenzprinzip</span> (Personenunternehmen)</div>
Das Unternehmen selbst zahlt keine Steuer. Stattdessen werden Gewinne den <strong>Gesellschaftern zugerechnet</strong> und bei diesen mit ESt besteuert.</div>
<div class="def-box"><div class="def-label"><span class="term" data-label="Trennungsprinzip" data-def="Kapitalgesellschaft ist eigenes Steuersubjekt (zahlt KSt 15%). Erst bei Aussch\u00fcttung an Gesellschafter kommt weitere Besteuerung dazu.">Trennungsprinzip</span> (Kapitalgesellschaften)</div>
Gesellschaft zahlt selbst KSt (15%). Erst bei Aussch\u00fcttung an Gesellschafter kommt weitere Steuer dazu.</div>`
        },
        {
          titel: "Schritt 4: Stille Gesellschaft als Sonderfall",
          inhalt: `<p>Die <strong>stille Gesellschaft</strong> ist eine Sonderform:</p>
<p>\ud83d\udd35 <strong>Typisch still</strong>: Nur Kapitalbeteiligung, kein unternehmerisches Risiko \u2192 Gewinnbeteiligung ist Kapitalertrag<br>
\ud83d\udd34 <strong>Atypisch still</strong>: Mitunternehmerschaft, beteiligt an Wertentwicklung \u2192 Mitunternehmer-Eink\u00fcnfte (Gewerbebetrieb)</p>
<div class="def-box"><div class="def-label">Merke</div>
Typisch still = Kapitalertrag. Atypisch still = Gewerbebetrieb.</div>`
        }
      ],

      interaktion: [
        { frage: "Mindeststammkapital einer GmbH?", optionen: ["10.000\u20ac", "25.000\u20ac", "50.000\u20ac", "Keins"], richtig: 1, erklaerung: "GmbH: 25.000\u20ac. AG: 50.000\u20ac." },
        { frage: "Wer haftet bei der KG unbeschr\u00e4nkt?", optionen: ["Kommanditist", "Komplement\u00e4r", "Beide", "Niemand"], richtig: 1, erklaerung: "Komplement\u00e4r = unbeschr\u00e4nkt. Kommanditist = beschr\u00e4nkt." },
        { frage: "Was ist das Transparenzprinzip?", optionen: ["Alles muss ver\u00f6ffentlicht werden", "Unternehmer und Unternehmen = steuerliche Einheit", "Das Finanzamt sieht alles", "Es gibt keine Geheimhaltung"], richtig: 1, erklaerung: "Beim Einzelunternehmen bilden Unternehmen und Unternehmer eine steuerliche Einheit." },
        { frage: "Wie viele Organe hat eine AG?", optionen: ["1", "2", "3", "4"], richtig: 2, erklaerung: "AG: 3 Organe \u2013 Hauptversammlung, Aufsichtsrat, Vorstand." },
        { frage: "Warum ist die GmbH & Co. KG beliebt?", optionen: ["Weil sie g\u00fcnstig ist", "Weil niemand pers\u00f6nlich haftet", "Weil sie keine Steuern zahlt", "Weil sie einfach zu gr\u00fcnden ist"], richtig: 1, erklaerung: "Der Komplement\u00e4r (= GmbH) haftet nur mit Gesellschaftsverm\u00f6gen. Faktisch: keine pers\u00f6nliche Haftung." }
      ]
    },
    {
      titel: "\u{1F4B8} Besteuerungsprinzip: Personen- vs. Kapitalgesellschaft",
      inhalt: `<div class="erk-tree">
  <div class="tree-root">Personenunternehmen</div>
  <div class="tree-branches">
    <div class="tree-branch"><strong>Unternehmensebene</strong><br>Gewerbesteuer</div>
    <div class="tree-branch"><strong>Unternehmerebene</strong><br>ESt + SolZ + KiSt</div>
  </div>
</div>
<div style="height:16px"></div>
<div class="erk-tree">
  <div class="tree-root">Kapitalgesellschaft</div>
  <div class="tree-branches">
    <div class="tree-branch"><strong>Gesellschaftsebene</strong><br>GewSt + KSt + SolZ</div>
    <div class="tree-branch"><strong>Gesellschafterebene</strong><br>25% AbgSt oder Teileink\u00fcnfteverfahren (60%)</div>
  </div>
</div>`,
      merke: `Seit 2021: K\u00f6MoG/Optionsmodell \u2013 Personenhandelsgesellschaften k\u00f6nnen wie KapGes besteuert werden.`,
      schritte: [
        {
          titel: "Schritt 1: Zwei Besteuerungsprinzipien",
          inhalt: `<p>Wie wird ein Unternehmen besteuert? Das h\u00e4ngt von der Rechtsform ab:</p>
<div class="def-box"><div class="def-label">Personenunternehmen \u2013 Transparenzprinzip</div>
Gewinne flie\u00dfen direkt durch zum Unternehmer und werden bei <strong>ihm</strong> mit ESt besteuert.</div>
<div class="def-box"><div class="def-label">Kapitalgesellschaft \u2013 Trennungsprinzip</div>
Gesellschaft ist selbst Steuersubjekt und zahlt KSt (15%) auf den Gewinn.</div>`
        },
        {
          titel: "Schritt 2: Steuerbelastung Personenunternehmen",
          inhalt: `<p>Besteuerungsweg f\u00fcr ein Personenunternehmen (z.B. Einzelunternehmen):</p>
<p>1. <strong>Unternehmensebene</strong>: Gewerbesteuer (GewSt)<br>
2. <strong>Unternehmerebene</strong>: ESt + Solidarit\u00e4tszuschlag + ggf. Kirchensteuer</p>
<p>Die GewSt wird auf die pers\u00f6nliche ESt <strong>angerechnet</strong> (Doppelbelastung vermieden).</p>`
        },
        {
          titel: "Schritt 3: Steuerbelastung Kapitalgesellschaft",
          inhalt: `<p>Besteuerungsweg f\u00fcr eine Kapitalgesellschaft (z.B. GmbH):</p>
<p>1. <strong>Gesellschaftsebene</strong>: KSt 15% + GewSt + SolZ \u2248 ca. 30% Gesamtlast<br>
2. <strong>Gesellschafterebene</strong>: Bei Aussch\u00fcttung: Abgeltungsteuer 25% + SolZ</p>
<div class="def-box"><div class="def-label">Effektive Gesamtbelastung</div>
Kapitalgesellschaft: ca. 48-50% Gesamtbelastung bei Aussch\u00fcttung (Doppelbelastung!)</div>`
        },
        {
          titel: "Schritt 4: Vergleich auf einen Blick",
          inhalt: `<table class="erk-table">
  <tr><th></th><th>Personenunternehmen</th><th>Kapitalgesellschaft</th></tr>
  <tr><td><strong>Prinzip</strong></td><td>Transparenz</td><td>Trennung</td></tr>
  <tr><td><strong>Unternehmensebene</strong></td><td>GewSt</td><td>KSt 15% + GewSt</td></tr>
  <tr><td><strong>Personenebene</strong></td><td>ESt (pers\u00f6nlicher Tarif)</td><td>Abgeltungsteuer 25%</td></tr>
  <tr><td><strong>GewSt-Anrechnung</strong></td><td>Ja</td><td>Nein</td></tr>
</table>`
        }
      ],

      interaktion: [
        { frage: "Was zahlt eine GmbH auf Gesellschaftsebene?", optionen: ["Nur GewSt", "ESt + SolZ", "GewSt + KSt + SolZ", "Nur KSt"], richtig: 2, erklaerung: "Kapitalgesellschaften: GewSt + KSt + SolZ." },
        { frage: "Wie hoch ist die Abgeltungssteuer auf Aussch\u00fcttungen (privat)?", optionen: ["15%", "20%", "25%", "30%"], richtig: 2, erklaerung: "Privatpersonen zahlen 25% Abgeltungssteuer auf Aussch\u00fcttungen." },
        { frage: "Was gilt beim Teileink\u00fcnfteverfahren?", optionen: ["100% besteuert", "60% besteuert", "40% besteuert", "Steuerfrei"], richtig: 1, erklaerung: "Teileink\u00fcnfteverfahren: 60% der Aussch\u00fcttung wird besteuert." },
        { frage: "Was ist das K\u00f6MoG?", optionen: ["Ein neues Steuergesetz f\u00fcr K\u00f6rper", "Optionsmodell: PersGes wie KapGes besteuern", "K\u00f6lner Modellgesetz", "K\u00f6rperschaftsteuer-Modernisierung"], richtig: 1, erklaerung: "K\u00f6MoG = Optionsmodell seit 2021. Personenhandelsgesellschaften k\u00f6nnen wie KapGes besteuert werden." },
        { frage: "Ein Einzelunternehmer zahlt auf seinen Gewinn ...", optionen: ["KSt", "ESt", "Nur GewSt", "Nur USt"], richtig: 1, erklaerung: "Personenunternehmen: Unternehmerebene = ESt + SolZ + ggf. KiSt." }
      ]
    },
    {
      titel: "\u{1F4DC} Rechtsquellen \u2013 Sonstige",
      inhalt: `<p>Neben den formellen Gesetzen gibt es weitere Rechtsquellen:</p>
<table class="erk-table">
  <tr><th>Rechtsquelle</th><th>Erkl\u00e4rung</th><th>Beispiel</th></tr>
  <tr><td><strong>Rechtsverordnungen</strong></td><td>Brauchen gesetzliche Erm\u00e4chtigung, von der Exekutive erlassen</td><td>EStDV (Einkommensteuer-Durchf\u00fchrungsverordnung)</td></tr>
  <tr><td><strong>Kommunale Satzungen</strong></td><td>Von Gemeinden erlassen</td><td>GewSt-/GrSt-Hebes\u00e4tze</td></tr>
  <tr><td><strong>Verwaltungsvorschriften</strong></td><td>Interne Anweisungen der Finanzverwaltung</td><td>Richtlinien (EStR), Einzelerlasse</td></tr>
  <tr><td><strong>Rechtsprechung</strong></td><td>Urteile der Gerichte</td><td>FG, BFH, BVerfG, EuGH</td></tr>
  <tr><td><strong>DBA</strong></td><td>Doppelbesteuerungsabkommen</td><td>Besteuerung ausl\u00e4ndischer Eink\u00fcnfte</td></tr>
  <tr><td><strong>EU-Richtlinien</strong></td><td>\u00dcbergeordnetes EU-Recht</td><td>Harmonisierung der USt</td></tr>
</table>`,
      merke: `Gesetze = Legislative (langsam). Verordnungen = Exekutive (schnell, detailliert). Oft gibt es eine Verordnung zum Gesetz.`,
      details: [
        { titel: "\u{1F9E0} Merke: Gesetze vs. Verordnungen", inhalt: "<strong>Gesetze</strong> macht der Bundestag (Legislative) \u2013 das dauert.<br><strong>Verordnungen</strong> macht die Verwaltung (Exekutive, z.B. Bundesfinanzministerium) \u2013 schneller und detaillierter.<br>Verwaltungsvorschriften binden nur die Finanz\u00e4mter intern, nicht die Gerichte." }
      ],
      schritte: [
        {
          titel: "Schritt 1: Formelle vs. materielle Gesetze",
          inhalt: `<p>Neben den formellen Gesetzen (vom Bundestag verabschiedet) gibt es weitere <strong>Rechtsquellen</strong> im Steuerrecht:</p>
<p>\ud83d\udcdc <strong>Rechtsverordnungen</strong> \u2013 von der Exekutive erlassen (brauchen gesetzliche Erm\u00e4chtigung)<br>
\ud83c\udfe1 <strong>Kommunale Satzungen</strong> \u2013 von Gemeinden erlassen (z.B. Hebes\u00e4tze)<br>
\ud83d\udcde <strong>Verwaltungsvorschriften</strong> \u2013 interne Anweisungen der Finanzverw.<br>
\u2696\ufe0f <strong>Gerichtsentscheidungen</strong> \u2013 BFH und EuGH als wichtigste Gerichte</p>`
        },
        {
          titel: "Schritt 2: Rechtsverordnungen",
          inhalt: `<p>Rechtsverordnungen konkretisieren formelle Gesetze:</p>
<table class="erk-table">
  <tr><th>Name</th><th>Zu welchem Gesetz?</th><th>Inhalt</th></tr>
  <tr><td><strong>EStDV</strong></td><td>Einkommensteuergesetz</td><td>Details zur ESt-Durchf\u00fchrung</td></tr>
  <tr><td><strong>UStDV</strong></td><td>Umsatzsteuergesetz</td><td>Details zur USt-Durchf\u00fchrung</td></tr>
</table>
<div class="def-box"><div class="def-label">Wichtig</div>
Rechtsverordnungen haben dieselbe Bindungswirkung wie Gesetze, aber sie brauchen eine gesetzliche Erm\u00e4chtigung (Art. 80 GG).</div>`
        },
        {
          titel: "Schritt 3: Verwaltungsvorschriften & Richtlinien",
          inhalt: `<p>Verwaltungsvorschriften sind interne Anweisungen der Finanzverwaltung:</p>
<p>\ud83d\udccd <strong>Einkommensteuerrichtlinien (EStR)</strong> \u2013 Auslegungshinweise zur ESt<br>
\ud83d\udccd <strong>Umsatzsteueranwendungserlass (UStAE)</strong> \u2013 USt-Auslegung<br>
\ud83d\udccd <strong>BMF-Schreiben</strong> \u2013 Einzelfall-Auslegungen des Bundesfinanzministeriums</p>
<p>\u26a0\ufe0f Verwaltungsvorschriften binden nur die Finanzbeh\u00f6rden, nicht die Gerichte!</p>`
        },
        {
          titel: "Schritt 4: Gerichtsentscheidungen",
          inhalt: `<p>Im Steuerrecht spielen zwei Gerichte die wichtigste Rolle:</p>
<table class="erk-table">
  <tr><th>Gericht</th><th>Aufgabe</th><th>Bindungswirkung</th></tr>
  <tr><td><strong>BFH</strong><br>(Bundesfinanzhof)</td><td>Oberstes Steuergericht Deutschlands</td><td>Nur im Einzelfall, aber starke Pr\u00e4zedenzwirkung</td></tr>
  <tr><td><strong>EuGH</strong><br>(Europ. Gerichtshof)</td><td>Europ\u00e4isches Recht</td><td>Vorrang vor nationalem Recht</td></tr>
</table>`
        }
      ],

      interaktion: [
        { frage: "Wer erlässt Rechtsverordnungen?", optionen: ["Der Bundestag", "Die Exekutive (Verwaltung)", "Die Gerichte", "Die Gemeinden"], richtig: 1, erklaerung: "Verordnungen kommen von der Exekutive, z.B. dem Bundesfinanzministerium." },
        { frage: "Was regelt ein DBA?", optionen: ["Doppelte Buchf\u00fchrung", "Besteuerungsrecht bei ausl\u00e4ndischen Eink\u00fcnften", "Doppelte Abschreibung", "Doppelte Beitr\u00e4ge"], richtig: 1, erklaerung: "DBA = Doppelbesteuerungsabkommen. Regelt, welches Land besteuern darf." },
        { frage: "Verwaltungsvorschriften binden ...", optionen: ["Alle B\u00fcrger", "Nur die Finanz\u00e4mter (intern)", "Nur Unternehmen", "Nur Gerichte"], richtig: 1, erklaerung: "Verwaltungsvorschriften haben nur Innenwirkung f\u00fcr die Finanzverwaltung." },
        { frage: "GewSt-Hebes\u00e4tze werden festgelegt durch ...", optionen: ["Den Bund", "Die L\u00e4nder", "Kommunale Satzungen", "EU-Richtlinien"], richtig: 2, erklaerung: "Gemeinden legen GewSt- und GrSt-Hebes\u00e4tze per Satzung fest." },
        { frage: "Vorteil von Verordnungen gegen\u00fcber Gesetzen?", optionen: ["Sie sind wichtiger", "Sie sind schneller und detaillierter", "Sie gelten l\u00e4nger", "Sie kosten weniger"], richtig: 1, erklaerung: "Verordnungen werden schneller erlassen und k\u00f6nnen Details regeln." }
      ]
    },
    {
      titel: "\u{1F4B5} BWL-Einteilung: Direkte vs. indirekte Steuern",
      inhalt: `<table class="erk-table">
  <tr><th></th><th>Direkte Steuern</th><th>Indirekte Steuern</th></tr>
  <tr><td><strong>Wer tr\u00e4gt sie?</strong></td><td>Man selbst</td><td>\u00dcberw\u00e4lzung auf andere</td></tr>
  <tr><td><strong>Kann man sie weitergeben?</strong></td><td>Nein</td><td>Ja</td></tr>
  <tr><td><strong>Beispiele</strong></td><td>ESt, KSt, GewSt</td><td>USt, Verbrauchsteuern</td></tr>
  <tr><td><strong>In der Kalkulation</strong></td><td>Kosten- oder Gewinnsteuer</td><td>\u00dcberw\u00e4lzung auf den Kunden</td></tr>
</table>`,
      beispiel: `Du kaufst Schuhe f\u00fcr 119\u20ac \u2013 davon sind 19\u20ac USt. Der H\u00e4ndler w\u00e4lzt die Steuer auf dich ab = <strong>indirekte Steuer</strong>.<br>Dein Arbeitgeber zahlt GewSt auf seinen Gewinn \u2013 die kann er nicht an dich weitergeben = <strong>direkte Steuer</strong>.`,
      merke: `Direkt = eigene Belastung. Indirekt = wird weitergewälzt (v.a. Verbrauchsteuern).`,
      schritte: [
        {
          titel: "Schritt 1: Das entscheidende Kriterium",
          inhalt: `<p>Die BWL-Einteilung (auch: wirtschaftliche Einteilung) fragt: <strong>Kann die Steuerlast weiter\u00fcbertragen werden?</strong></p>
<div class="def-box"><div class="def-label">Direkte Steuer</div>
Steuerschuldner = Steuertrag\u00e4ger. Man zahlt selbst und kann die Last <strong>nicht weitergeben</strong>.</div>
<div class="def-box"><div class="def-label">Indirekte Steuer</div>
Steuerschuldner \u2260 Steuertrag\u00e4ger. Die Steuerlast wird auf den <strong>Endverbraucher \u00fcberw\u00e4lzt</strong>.</div>`
        },
        {
          titel: "Schritt 2: Beispiele und Gegen\u00fcberstellung",
          inhalt: `<table class="erk-table">
  <tr><th></th><th>Direkte Steuern</th><th>Indirekte Steuern</th></tr>
  <tr><td><strong>Beispiele</strong></td><td>ESt, KSt, GrSt, ErbSt</td><td>USt/MwSt, Energiesteuer, Tabaksteuer</td></tr>
  <tr><td><strong>Wer tr\u00e4gt sie?</strong></td><td>Man selbst</td><td>\u00dcberw\u00e4lzung auf Kunden</td></tr>
  <tr><td><strong>Sichtbar?</strong></td><td>Klar erkennbar</td><td>Im Preis versteckt</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Die Umsatzsteuer als Musterbeispiel",
          inhalt: `<p>Wie funktioniert eine indirekte Steuer in der Praxis?</p>
<p>\ud83c\udfed <strong>Unternehmer</strong> zahlt USt ans Finanzamt (Steuerschuldner)<br>
\ud83d\udecf\ufe0f <strong>Kunde</strong> zahlt den Bruttopreis inkl. USt (Steuertrag\u00e4ger)</p>
<p>\u2192 Das Unternehmen "sammelt" die Steuer nur ein \u2013 es tr\u00e4gt sie wirtschaftlich <strong>nicht selbst</strong>.</p>
<div class="def-box"><div class="def-label">Merke</div>
USt = indirekt, weil Unternehmer sammelt, Kunde zahlt. ESt = direkt, weil du selbst zahlst und behältst.</div>`
        },
        {
          titel: "Schritt 4: Politische Dimension",
          inhalt: `<p>Warum ist die Unterscheidung politisch relevant?</p>
<p>\ud83d\udfe2 Direkte Steuern sind <strong>progressiv</strong> m\u00f6glich (wer mehr hat, zahlt mehr %)<br>
\ud83d\udd34 Indirekte Steuern sind <strong>regressiv</strong> (trifft Geringverdiener h\u00e4rter, da gr\u00f6\u00dferer Anteil vom Einkommen)</p>
<p>Deutschland: Mix aus beiden Systemen \u2013 ESt (progressiv) + USt (indirekt, regressiv).</p>`
        }
      ],

      interaktion: [
        { frage: "Die USt ist eine ...", optionen: ["Direkte Steuer", "Indirekte Steuer", "Weder noch", "Beides"], richtig: 1, erklaerung: "USt wird auf den Kunden \u00fcberw\u00e4lzt = indirekte Steuer." },
        { frage: "Was bedeutet 'direkte Steuer'?", optionen: ["Wird direkt an den Staat \u00fcberwiesen", "Man tr\u00e4gt die Belastung selbst", "Wird vom Gehalt abgezogen", "Wird monatlich gezahlt"], richtig: 1, erklaerung: "Direkt = man tr\u00e4gt sie selbst, keine \u00dcberw\u00e4lzung m\u00f6glich." },
        { frage: "Die GewSt ist eine ...", optionen: ["Indirekte Steuer", "Direkte Steuer", "\u00dcberw\u00e4lzungssteuer", "Verbrauchsteuer"], richtig: 1, erklaerung: "GewSt trifft den Gewerbebetrieb direkt." },
        { frage: "Indirekte Steuern sind vor allem ...", optionen: ["Ertragsteuern", "Substanzsteuern", "Verbrauchsteuern", "Kirchensteuern"], richtig: 2, erklaerung: "Verbrauchsteuern werden typischerweise auf den Konsumenten \u00fcberw\u00e4lzt." },
        { frage: "Biersteuer ist eine ...", optionen: ["Direkte Steuer", "Indirekte Steuer", "Gemeindesteuer", "Ertragsteuer"], richtig: 1, erklaerung: "Biersteuer = Verbrauchsteuer = wird \u00fcberw\u00e4lzt = indirekt." }
      ]
    },
    {
      titel: "\u{1F3E6} Steuertechnische Einteilung",
      inhalt: `<p>Wie wird die Steuer erhoben?</p>
<table class="erk-table">
  <tr><th>Methode</th><th>Erkl\u00e4rung</th><th>Beispiele</th></tr>
  <tr><td><strong><span class="term" data-label="Quellenabzug" data-def="Steuererhebungsmethode: Die Steuer wird direkt an der Einkommensquelle einbehalten, bevor der Steuerpflichtige das Geld erh\u00e4lt. Beispiel: Lohnsteuer.">Quellenabzug</span></strong></td><td>Steuer wird <strong>direkt an der Quelle</strong> einbehalten, bevor man das Geld sieht</td><td>Lohnsteuer, Kapitalertragsteuer</td></tr>
  <tr><td><strong>Veranlagung</strong></td><td>Man gibt eine <strong>Steuererkl\u00e4rung</strong> ab, das Finanzamt setzt die Steuer fest</td><td>J\u00e4hrliche ESt-Erkl\u00e4rung</td></tr>
  <tr><td><strong>Selbstveranlagung</strong></td><td>Man <strong>berechnet die Steuer selbst</strong> und meldet sie an</td><td>USt-Voranmeldung</td></tr>
</table>`,
      beispiel: `Dein Arbeitgeber zieht die Lohnsteuer direkt vom Gehalt ab = <strong>Quellenabzug</strong>. Du siehst das Geld nie.<br>Am Jahresende gibst du eine Steuererkl\u00e4rung ab = <strong>Veranlagung</strong>. Das Finanzamt rechnet nach.`,
      schritte: [
        {
          titel: "Schritt 1: Wie wird die Steuer erhoben?",
          inhalt: `<p>Die steuertechnische Einteilung fragt: <strong>Auf welche Art wird die Steuer eingetrieben?</strong></p>
<p>3 technische Erhebungsmethoden:</p>
<p>\ud83d\udccc <strong>Quellenabzug</strong> \u2013 direkt an der Quelle einbehalten, bevor man das Geld sieht<br>
\ud83d\udcdd <strong>Veranlagung</strong> \u2013 Steuerpflichtiger erkl\u00e4rt selbst, Finanzamt setzt Bescheid<br>
\ud83d\udcb0 <strong>Steueranmeldung</strong> \u2013 Steuerpflichtiger berechnet und meldet selbst</p>`
        },
        {
          titel: "Schritt 2: Die 3 Methoden im Detail",
          inhalt: `<table class="erk-table">
  <tr><th>Methode</th><th>Ablauf</th><th>Beispiele</th></tr>
  <tr><td><strong>Quellenabzug</strong></td><td>Steuer automatisch abgezogen</td><td>Lohnsteuer, Abgeltungsteuer (Kapitalertr\u00e4ge)</td></tr>
  <tr><td><strong>Veranlagung</strong></td><td>Steuerpflichtiger erkl\u00e4rt, FA setzt Bescheid</td><td>ESt-Erkl\u00e4rung</td></tr>
  <tr><td><strong>Steueranmeldung</strong></td><td>Steuerpflichtiger berechnet + zahlt selbst</td><td>USt-Voranmeldung</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Quellenabzug genauer betrachtet",
          inhalt: `<p>Beim Quellenabzug wird die Steuer <strong>automatisch einbehalten</strong>:</p>
<p>\ud83d\udcbc <strong>Lohnsteuer</strong>: Arbeitgeber z\u00e4hlt Lohn brutto, beh\u00e4lt LSt ein, \u00fcberweist Rest an Mitarbeiter<br>
\ud83d\udcb9 <strong>Abgeltungsteuer</strong>: Bank beh\u00e4lt 25% auf Zinsen/Dividenden ein, \u00fcberweist Rest</p>
<div class="def-box"><div class="def-label">Vorteil</div>
Der Staat erh\u00e4lt die Steuer sofort, ohne auf Erkl\u00e4rung warten zu m\u00fcssen.</div>`
        },
        {
          titel: "Schritt 4: Veranlagung vs. Selbstveranlagung",
          inhalt: `<p>Bei Veranlagung: Steuerpflichtiger liefert Erkl\u00e4rung, <strong>Finanzamt</strong> setzt den Bescheid.</p>
<p>Bei Steueranmeldung (Selbstveranlagung): Steuerpflichtiger <strong>berechnet und zahlt selbst</strong> (z.B. USt-Voranmeldung monatlich).</p>
<div class="def-box"><div class="def-label">Praxisbeispiel USt</div>
Unternehmer rechnet jeden Monat selbst aus: Umsatzsteuer minus Vorsteuer = Zahllast \u2192 zahlt ans Finanzamt.</div>`
        }
      ],

      interaktion: [
        { frage: "Die Lohnsteuer wird erhoben durch ...", optionen: ["Veranlagung", "Quellenabzug", "Selbstveranlagung", "Sch\u00e4tzung"], richtig: 1, erklaerung: "Arbeitgeber zieht die Lohnsteuer direkt ab = Quellenabzug." },
        { frage: "Bei der Veranlagung ...", optionen: ["Zieht der Arbeitgeber Steuern ab", "Gibt man eine Steuererkl\u00e4rung ab", "Berechnet man die Steuer selbst", "Zahlt man keine Steuern"], richtig: 1, erklaerung: "Veranlagung = Steuererkl\u00e4rung abgeben, FA setzt fest." },
        { frage: "Die USt-Voranmeldung ist ein Beispiel f\u00fcr ...", optionen: ["Quellenabzug", "Veranlagung", "Selbstveranlagung", "Sch\u00e4tzung"], richtig: 2, erklaerung: "Man berechnet die USt selbst und meldet sie an." },
        { frage: "Was bedeutet Quellenabzug?", optionen: ["Wasser wird besteuert", "Steuer wird einbehalten bevor man das Geld bekommt", "Man zahlt an der Quelle", "Steuer auf Wasserquellen"], richtig: 1, erklaerung: "Direkt an der Quelle einbehalten \u2013 man sieht das Geld nie." },
        { frage: "Die Kapitalertragsteuer wird erhoben durch ...", optionen: ["Veranlagung", "Selbstveranlagung", "Quellenabzug", "Sch\u00e4tzung"], richtig: 2, erklaerung: "Die Bank beh\u00e4lt die KapESt direkt ein = Quellenabzug." }
      ]
    },
    {
      titel: "\u{1F4C5} Zeitliche Einteilung der Steuern",
      inhalt: `<table class="erk-table">
  <tr><th></th><th>Periodische Steuern</th><th>Aperiodische Steuern</th></tr>
  <tr><td><strong>Wann?</strong></td><td>Regelm\u00e4\u00dfig, jedes Jahr</td><td>Einmalig bei bestimmtem Ereignis</td></tr>
  <tr><td><strong>Beispiele</strong></td><td>ESt, GewSt, KSt, GrSt</td><td>ErbSt, GrESt</td></tr>
</table>`,
      beispiel: `Einkommensteuer zahlst du <strong>jedes Jahr</strong> = periodisch.<br>Erbschaftsteuer zahlst du nur <strong>einmal</strong>, wenn jemand stirbt = aperiodisch.`,
      merke: `Periodisch = j\u00e4hrlich wiederkehrend. Aperiodisch = einmalig bei Ereignis.`,
      schritte: [
        {
          titel: "Schritt 1: Periodisch oder aperiodisch?",
          inhalt: `<p>Die zeitliche Einteilung fragt: <strong>Wann entsteht die Steuerpflicht?</strong></p>
<div class="def-box"><div class="def-label">Periodische Steuern</div>
Entstehen <strong>regelm\u00e4\u00dfig</strong>, in der Regel j\u00e4hrlich (pro Periode).</div>
<div class="def-box"><div class="def-label">Aperiodische Steuern</div>
Entstehen <strong>einmalig</strong> bei einem bestimmten Ereignis (keine regelm\u00e4\u00dfige Wiederkehr).</div>`
        },
        {
          titel: "Schritt 2: Beispiele zuordnen",
          inhalt: `<table class="erk-table">
  <tr><th>Steuer</th><th>Typ</th><th>Warum?</th></tr>
  <tr><td>Einkommensteuer (ESt)</td><td>Periodisch</td><td>Jedes Jahr neu berechnet</td></tr>
  <tr><td>K\u00f6rperschaftsteuer (KSt)</td><td>Periodisch</td><td>J\u00e4hrlich auf Gewinn</td></tr>
  <tr><td>Gewerbesteuer (GewSt)</td><td>Periodisch</td><td>J\u00e4hrlich auf Gewerbeertrag</td></tr>
  <tr><td>Grundsteuer (GrSt)</td><td>Periodisch</td><td>J\u00e4hrlich auf Grundbesitz</td></tr>
  <tr><td>Erbschaftsteuer (ErbSt)</td><td>Aperiodisch</td><td>Nur beim Todesfall/Schenkung</td></tr>
  <tr><td>Grunderwerbsteuer (GrESt)</td><td>Aperiodisch</td><td>Nur beim Kauf von Immobilien</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Praxisrelevanz",
          inhalt: `<p>Warum ist diese Unterscheidung wichtig?</p>
<p>\ud83d\udcc5 Periodische Steuern: <strong>Vorauszahlungen</strong> sind typisch (z.B. ESt-Vorauszahlungen quartalsweise)<br>
\u26a1 Aperiodische Steuern: Steuerpflicht entsteht <strong>spontan</strong> beim Ereignis</p>
<div class="def-box"><div class="def-label">Beispiel</div>
Du erbst ein Haus (ErbSt = aperiodisch, einmalig) und vermietest es dann (Mieteinnahmen = ESt, periodisch jedes Jahr).</div>`
        }
      ],

      interaktion: [
        { frage: "Die ESt ist eine ... Steuer.", optionen: ["Aperiodische", "Periodische", "Einmalige", "Saisonale"], richtig: 1, erklaerung: "ESt f\u00e4llt jedes Jahr an = periodisch." },
        { frage: "Die ErbSt f\u00e4llt an ...", optionen: ["Jedes Jahr", "Einmalig bei Erbschaft", "Monatlich", "Alle 5 Jahre"], richtig: 1, erklaerung: "ErbSt = aperiodisch, nur beim Erbfall." },
        { frage: "Die Grunderwerbsteuer ist ...", optionen: ["Periodisch", "Aperiodisch", "Monatlich", "Halbjährlich"], richtig: 1, erklaerung: "GrESt f\u00e4llt nur einmal beim Grundst\u00fcckskauf an." },
        { frage: "Was ist KEINE periodische Steuer?", optionen: ["ESt", "GewSt", "ErbSt", "KSt"], richtig: 2, erklaerung: "ErbSt = aperiodisch (nur bei Erbfall/Schenkung)." },
        { frage: "Periodisch bedeutet ...", optionen: ["Einmalig", "Regelm\u00e4\u00dfig wiederkehrend", "Selten", "Freiwillig"], richtig: 1, erklaerung: "Periodisch = regelm\u00e4\u00dfig, jedes Jahr." }
      ]
    },
    {
      titel: "\u{1F910} Stille Gesellschaft",
      inhalt: `<p>Ein <strong>stiller Gesellschafter</strong> beteiligt sich nur mit Geld, bleibt nach au\u00dfen unsichtbar:</p>
<table class="erk-table">
  <tr><th></th><th>Typisch stille Gesellschaft</th><th>Atypisch stille Gesellschaft</th></tr>
  <tr><td><strong>Regelung</strong></td><td>Nach HGB-Standard</td><td>Abweichung durch Vertrag</td></tr>
  <tr><td><strong>Risiko</strong></td><td>Kein unternehmerisches Risiko</td><td>Beteiligung an Wertentwicklung</td></tr>
  <tr><td><strong>Gewinn</strong></td><td>Feste Gewinnbeteiligung</td><td>Einlage passt sich an (+ und \u2013)</td></tr>
  <tr><td><strong>Steuerlich</strong></td><td>Eink\u00fcnfte aus <strong>Kapitalverm\u00f6gen</strong></td><td>Eink\u00fcnfte aus <strong>Gewerbebetrieb</strong></td></tr>
</table>`,
      merke: `Reine Innengesellschaft \u2013 von au\u00dfen nicht sichtbar. Ohne Gewinnbeteiligung = Darlehen! Typisch = Kapitalverm\u00f6gen. Atypisch = Gewerbebetrieb.`,
      details: [
        { titel: "\u{1F4A1} Warum ist das wichtig?", inhalt: "Die steuerliche Einordnung ist entscheidend: <strong>Typisch stille</strong> Eink\u00fcnfte aus Kapitalverm\u00f6gen k\u00f6nnen <strong>nicht</strong> mit anderen Einkunftsarten verrechnet werden. <strong>Atypisch stille</strong> Gesellschafter sind wie Mitunternehmer \u2013 volle Verlustverrechnung m\u00f6glich." }
      ],
      schritte: [
        {
          titel: "Schritt 1: Was ist eine stille Gesellschaft?",
          inhalt: `<p>Ein stiller Gesellschafter beteiligt sich mit Kapital an einem Unternehmen, bleibt aber <strong>nach au\u00dfen unsichtbar</strong>.</p>
<p>\ud83d\udc64 <strong>Inhaber</strong>: F\u00fchrt das Unternehmen, tritt nach au\u00dfen auf<br>
\ud83e\udd35 <strong>Stiller Gesellschafter</strong>: Gibt Geld, bleibt im Hintergrund</p>
<div class="def-box"><div class="def-label">Abgrenzung GbR</div>
GbR: beide treten nach au\u00dfen auf. Stille Gesellschaft: nur Inhaber sichtbar.</div>`
        },
        {
          titel: "Schritt 2: Typisch vs. atypisch still",
          inhalt: `<table class="erk-table">
  <tr><th></th><th>Typisch still</th><th>Atypisch still</th></tr>
  <tr><td><strong>Risiko</strong></td><td>Kein unternehmerisches Risiko</td><td>Beteiligung an Wertentwicklung + Risiko</td></tr>
  <tr><td><strong>Beteiligung</strong></td><td>Nur Gewinnbeteiligung</td><td>Einlage partizipiert an stillen Reserven</td></tr>
  <tr><td><strong>Steuerpflicht</strong></td><td>Kapitalertr\u00e4ge (\u00a720 EStG)</td><td>Mitunternehmer-Eink\u00fcnfte (\u00a715 EStG)</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Steuerliche Behandlung",
          inhalt: `<p>Entscheidend: Welche Einkunftsart liegt vor?</p>
<p>\ud83d\udd35 <strong>Typisch still</strong>:<br>
Gewinnanteil = Kapitalertrag nach \u00a720 EStG \u2192 Abgeltungsteuer 25%</p>
<p>\ud83d\udd34 <strong>Atypisch still</strong>:<br>
Mitunternehmerschaft nach \u00a715 EStG \u2192 Eink\u00fcnfte aus Gewerbebetrieb \u2192 pers\u00f6nlicher ESt-Tarif</p>
<div class="def-box"><div class="def-label">Merke</div>
Typisch = Kapital. Atypisch = Gewerbebetrieb.</div>`
        },
        {
          titel: "Schritt 4: Pr\u00fcfungstipp",
          inhalt: `<p>Wie erkennst du typisch vs. atypisch in der Pr\u00fcfung?</p>
<p>\ud83d\udd0d <strong>Typisch still</strong>: Nur Gewinnbeteiligung erw\u00e4hnt, kein Verlustrisiko<br>
\ud83d\udd0d <strong>Atypisch still</strong>: Beteiligung an "stillen Reserven", Verlustbeteiligung, oder "Mitunternehmer" erw\u00e4hnt</p>
<p>Wenn atypisch: Stiller Gesellschafter ist <strong>Mitunternehmer</strong> \u2192 Eink\u00fcnfte aus Gewerbebetrieb!</p>`
        }
      ],

      interaktion: [
        { frage: "Eine stille Gesellschaft ist ...", optionen: ["Eine \u00f6ffentliche B\u00f6rsengesellschaft", "Eine reine Innengesellschaft", "Eine GmbH ohne Gesch\u00e4ftsf\u00fchrer", "Eine AG ohne Vorstand"], richtig: 1, erklaerung: "Stille Gesellschaft = von au\u00dfen nicht sichtbar, reine Innengesellschaft." },
        { frage: "Ohne Gewinnbeteiligung ist es ein ...", optionen: ["Geschenk", "Darlehen", "Beitrag", "Bußgeld"], richtig: 1, erklaerung: "Ohne Gewinnbeteiligung = rechtlich ein Darlehen, keine stille Gesellschaft." },
        { frage: "Typisch stille Eink\u00fcnfte sind ...", optionen: ["Gewerbeeink\u00fcnfte", "Eink\u00fcnfte aus Kapitalverm\u00f6gen", "Eink\u00fcnfte aus V&V", "Sonstige Eink\u00fcnfte"], richtig: 1, erklaerung: "Typisch stille Gesellschaft = Eink\u00fcnfte aus Kapitalverm\u00f6gen." },
        { frage: "Atypisch stille Gesellschafter haben ...", optionen: ["Kein Risiko", "Beteiligung an der Wertentwicklung", "Leitungsbefugnis", "Keine Gewinnbeteiligung"], richtig: 1, erklaerung: "Atypisch = Beteiligung an Wertentwicklung, unternehmerisches Risiko." },
        { frage: "Hat der stille Gesellschafter Leitungsbefugnis?", optionen: ["Ja, immer", "Nur bei atypischer Beteiligung", "Nein, nie", "Nur bei GmbH"], richtig: 2, erklaerung: "Stille Gesellschafter haben grunds\u00e4tzlich keine Leitungsbefugnis." }
      ]
    },
    {
      titel: "\u{1F4B0} Steueraufkommen \u2013 \u00dcberblick",
      inhalt: `<p>Gesamtsteuereinnahmen Deutschlands: ca. <strong>948 Mrd. \u20ac</strong> (2024).</p>
<p>Die <strong>gr\u00f6\u00dften Steuern</strong> sind Gemeinschaftsteuern:</p>
<div class="erk-tree">
  <div class="tree-root">Top-Steuereinnahmen</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>USt/MwSt</strong><br>Gr\u00f6\u00dfte Einzelsteuer</div>
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>Lohnsteuer</strong><br>Zweitgr\u00f6\u00dfte</div>
    <div class="tree-branch"><strong>GewSt</strong><br>Gemeinden</div>
    <div class="tree-branch"><strong>ESt</strong><br>Gemeinschaft</div>
  </div>
</div>
<p><strong>Merke:</strong> Rund die H\u00e4lfte der Steuereinnahmen kommt von Privatpersonen (Lohn- und Einkommensteuer).</p>`,
      merke: `Gemeinschaftsteuern (USt + ESt) = Gro\u00dfteil der Einnahmen. Ca. 50% kommen von Privatpersonen.`,
      schritte: [
        {
          titel: "Schritt 1: Was ist das Steueraufkommen?",
          inhalt: `<p>Das <strong>Steueraufkommen</strong> = die gesamten Steuereinnahmen des Staates pro Jahr.</p>
<p>Deutschland 2024: ca. <strong>948 Mrd. \u20ac</strong></p>
<p>Diese Einnahmen finanzieren:</p>
<p>\ud83c\udfeb Bildung und Schulen<br>
\ud83c\udfde\ufe0f Infrastruktur (Stra\u00dfen, Schienen)<br>
\ud83d\udc6e Polizei und Justiz<br>
\ud83c\udfe5 Gesundheitssystem<br>
\ud83d\udee1\ufe0f Soziale Sicherung</p>`
        },
        {
          titel: "Schritt 2: Die gr\u00f6\u00dften Steuerarten",
          inhalt: `<p>Die wichtigsten Steuern nach Aufkommen:</p>
<div class="erk-tree">
  <div class="tree-root">Top-Steuereinnahmen</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>USt/MwSt</strong><br>Gr\u00f6\u00dfte Einzelsteuer</div>
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>Lohnsteuer</strong><br>Zweitgr\u00f6\u00dfte</div>
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>ESt-Vorauszahlungen</strong><br>Selbst\u00e4ndige, Vermieter</div>
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>KSt</strong><br>Kapitalgesellschaften</div>
  </div>
</div>`
        },
        {
          titel: "Schritt 3: Verteilung auf Bund, L\u00e4nder, Gemeinden",
          inhalt: `<p>Das Steueraufkommen wird verteilt (ungef\u00e4hre Anteile):</p>
<table class="erk-table">
  <tr><th>Empf\u00e4nger</th><th>Anteil</th><th>Gr\u00f6\u00dfte Quelle</th></tr>
  <tr><td><strong>Bund</strong></td><td>ca. 45%</td><td>USt-Anteil, Bundessteuern</td></tr>
  <tr><td><strong>L\u00e4nder</strong></td><td>ca. 41%</td><td>ESt-Anteil, Landessteuern</td></tr>
  <tr><td><strong>Gemeinden</strong></td><td>ca. 14%</td><td>GewSt, ESt-Gemeindeanteil</td></tr>
</table>`
        },
        {
          titel: "Schritt 4: Steuern im internationalen Vergleich",
          inhalt: `<p>Die Steuerquote = Steuereinnahmen / BIP:</p>
<p>\ud83c\udde9\ud83c\uddea Deutschland: ca. <strong>23%</strong> (Steuern) + Sozialabgaben \u2192 Gesamtabgabenquote ca. 40%</p>
<p>Gemeinschaftsteuern machen den <strong>Gro\u00dfteil</strong> aus:</p>
<p>ESt + LSt + KSt + USt = \u00fcber 75% aller Steuereinnahmen</p>
<div class="def-box"><div class="def-label">Pr\u00fcfungstipp</div>
Die gr\u00f6\u00dften Steuern sind Gemeinschaftsteuern (USt, ESt/LSt, KSt). Merke die Reihenfolge nach Aufkommen.</div>`
        }
      ],

      interaktion: [
        { frage: "Welche Steuer bringt am meisten ein?", optionen: ["Gewerbesteuer", "Einkommensteuer", "Umsatzsteuer", "K\u00f6rperschaftsteuer"], richtig: 2, erklaerung: "Die USt/MwSt ist die gr\u00f6\u00dfte Einzelsteuer Deutschlands." },
        { frage: "Woher kommt ca. die H\u00e4lfte der Steuereinnahmen?", optionen: ["Von Unternehmen", "Von Privatpersonen", "Aus dem Ausland", "Von Gemeinden"], richtig: 1, erklaerung: "Lohn- und Einkommensteuer von Privatpersonen = ca. 50%." },
        { frage: "Die gr\u00f6\u00dften Steuern sind ...", optionen: ["Bundessteuern", "Landessteuern", "Gemeinschaftsteuern", "Gemeindesteuern"], richtig: 2, erklaerung: "USt, LohnSt, ESt, KSt = Gemeinschaftsteuern = gr\u00f6\u00dfter Anteil." }
      ]
    },
    {
      titel: "\u{1F9EE} Ermittlung der Steuerschuld",
      inhalt: `<div class="def-box"><div class="def-label">Grundformel</div>
<strong>Steuerbemessungsgrundlage (BMG) \u00d7 Steuertarif = Steuerschuld</strong></div>
<table class="erk-table">
  <tr><th>BMG-Art</th><th>Erkl\u00e4rung</th><th>Beispiel</th></tr>
  <tr><td><strong>Wertgr\u00f6\u00dfe</strong></td><td>Betrag in \u20ac</td><td>Einkommen bei ESt</td></tr>
  <tr><td><strong>Mengengr\u00f6\u00dfe</strong></td><td>Menge in Einheiten</td><td>Liter Bier, kg Kaffee</td></tr>
</table>
<p>Beispiel KSt: <strong>T = 0,15 \u00d7 BMG</strong> (15% K\u00f6rperschaftsteuersatz)</p>
<table class="erk-table">
  <tr><th>Begriff</th><th>Bedeutung</th></tr>
  <tr><td><strong>Grenzsteuersatz</strong></td><td>Steuersatz auf den <strong>letzten</strong> (zus\u00e4tzlichen) Euro</td></tr>
  <tr><td><strong>Durchschnittssteuersatz</strong></td><td>Gesamte Steuer \u00f7 gesamtes Einkommen (immer < Grenzsteuersatz bei Progression)</td></tr>
  <tr><td><strong>Eingangssteuersatz</strong></td><td>Steuersatz, mit dem eine neue Tarifzone <strong>beginnt</strong></td></tr>
  <tr><td><strong>Spitzensteuersatz</strong></td><td>H\u00f6chster Grenzsteuersatz: <strong>42%</strong></td></tr>
  <tr><td><strong>Reichensteuersatz</strong></td><td>Sonderzone: <strong>45%</strong></td></tr>
</table>`,
      merke: `BMG \u00d7 Tarif = Steuerschuld. Grenzsteuersatz = auf den letzten Euro. Durchschnitt = Gesamtsteuer \u00f7 Gesamteinkommen.`,
      flipcards: [
        { vorne: "Grenzsteuersatz", hinten: "Steuersatz auf den<br><strong>letzten Euro</strong>" },
        { vorne: "Durchschnittssteuersatz", hinten: "Gesamtsteuer \u00f7<br><strong>Gesamteinkommen</strong>" },
        { vorne: "Spitzensteuersatz", hinten: "<strong>42%</strong>" },
        { vorne: "Reichensteuersatz", hinten: "<strong>45%</strong>" }
      ],
      schritte: [
        {
          titel: "Schritt 1: Die Grundformel",
          inhalt: `<p>Jede Steuer berechnet sich nach derselben Grundformel:</p>
<div class="def-box"><div class="def-label">Grundformel</div>
<strong>Steuerbemessungsgrundlage (BMG) \u00d7 Steuertarif = Steuerschuld</strong></div>
<p>\ud83d\udccc <strong>BMG</strong> = worauf wird besteuert (z.B. Einkommensbetrag, Liter Bier)<br>
\ud83d\udccc <strong>Tarif</strong> = wie viel Prozent (oder Betrag pro Einheit)<br>
\ud83d\udccc <strong>Steuerschuld</strong> = der zu zahlende Betrag</p>`
        },
        {
          titel: "Schritt 2: Wertgr\u00f6\u00dfe vs. Mengengr\u00f6\u00dfe",
          inhalt: `<p>Die BMG kann unterschiedlich gemessen werden:</p>
<table class="erk-table">
  <tr><th>BMG-Typ</th><th>Einheit</th><th>Beispiel</th></tr>
  <tr><td><strong>Wertgr\u00f6\u00dfe</strong></td><td>Euro-Betrag</td><td>Einkommen bei ESt, Verm\u00f6gen bei GrSt</td></tr>
  <tr><td><strong>Mengengr\u00f6\u00dfe</strong></td><td>Einheiten (Liter, kg)</td><td>Liter Benzin, kg Kaffee, Stufe der Energie</td></tr>
</table>
<p>Bei Wertgr\u00f6\u00dfen: <strong>Prozentsatz</strong> als Tarif<br>
Bei Mengengr\u00f6\u00dfen: <strong>Betrag je Einheit</strong> als Tarif</p>`
        },
        {
          titel: "Schritt 3: Berechnungsbeispiele",
          inhalt: `<p>Konkrete Berechnungsbeispiele:</p>
<p>\ud83d\udcb0 <strong>K\u00f6rperschaftsteuer</strong>:<br>
BMG = 100.000 \u20ac Gewinn | Tarif = 15%<br>
Steuerschuld = 100.000 \u00d7 15% = <strong>15.000 \u20ac</strong></p>
<p>\u26fd <strong>Energiesteuer auf Benzin</strong>:<br>
BMG = 1.000 Liter | Tarif = 0,6545 \u20ac/Liter<br>
Steuerschuld = 1.000 \u00d7 0,6545 = <strong>654,50 \u20ac</strong></p>`
        },
        {
          titel: "Schritt 4: Tarif-Arten",
          inhalt: `<p>Verschiedene Tarif-Formen:</p>
<table class="erk-table">
  <tr><th>Tarif-Art</th><th>Bedeutung</th><th>Beispiel</th></tr>
  <tr><td><strong>Proportional</strong></td><td>Fester Prozentsatz</td><td>KSt 15%</td></tr>
  <tr><td><strong>Progressiv</strong></td><td>Satz steigt mit Einkommen</td><td>ESt 0-45%</td></tr>
  <tr><td><strong>Degressiv</strong></td><td>Satz sinkt (kaum noch)</td><td>Historisch</td></tr>
  <tr><td><strong>Spezifisch</strong></td><td>Betrag pro Einheit</td><td>Tabaksteuer</td></tr>
</table>`
        }
      ],

      interaktion: [
        { frage: "Wie berechnet man die Steuerschuld?", optionen: ["Einkommen \u2013 Freibetrag", "BMG \u00d7 Steuertarif", "Umsatz \u00f7 Steuersatz", "Gewinn + Verlust"], richtig: 1, erklaerung: "BMG \u00d7 Tarif = Steuerschuld." },
        { frage: "Der Grenzsteuersatz bezieht sich auf ...", optionen: ["Das gesamte Einkommen", "Den letzten zus\u00e4tzlichen Euro", "Den Durchschnitt", "Den ersten Euro"], richtig: 1, erklaerung: "Grenzsteuersatz = Steuer auf den letzten Euro." },
        { frage: "Der Durchschnittssteuersatz ist bei Progression ...", optionen: ["H\u00f6her als der Grenzsteuersatz", "Gleich dem Grenzsteuersatz", "Niedriger als der Grenzsteuersatz", "Immer 42%"], richtig: 2, erklaerung: "Bei progressivem Tarif ist der Durchschnitt immer kleiner als der Grenzsteuersatz." },
        { frage: "Die Biersteuer wird nach ... bemessen.", optionen: ["Wertgr\u00f6\u00dfe (\u20ac)", "Mengengr\u00f6\u00dfe (Liter)", "Gewinn", "Umsatz"], richtig: 1, erklaerung: "Biersteuer = Mengengr\u00f6\u00dfe (Liter)." },
        { frage: "Der KSt-Satz betr\u00e4gt ...", optionen: ["10%", "15%", "25%", "42%"], richtig: 1, erklaerung: "K\u00f6rperschaftsteuer = 15% (T = 0,15 \u00d7 BMG)." }
      ]
    },
    {
      titel: "\u{1F4C8} Einkommensteuertarif \u2013 Die 5 Zonen",
      inhalt: `<table class="erk-table">
  <tr><th>Zone</th><th>Einkommensbereich</th><th>Steuersatz</th><th>Bezeichnung</th></tr>
  <tr><td><strong>1</strong></td><td>0 \u2013 ca. 12.000\u20ac</td><td>0%</td><td><span class="term" data-label="Grundfreibetrag" data-def="Einkommensanteil ohne Besteuerung (ca. 12.000\u20ac). Sichert das Existenzminimum. Gesetzlich in \u00a732a EStG geregelt.">Grundfreibetrag</span></td></tr>
  <tr><td><strong>2</strong></td><td>ca. 12.000 \u2013 18.000\u20ac</td><td>14% \u2013 24%</td><td>Eingangssteuersatz</td></tr>
  <tr><td><strong>3</strong></td><td>ca. 18.000 \u2013 70.000\u20ac</td><td>24% \u2013 42%</td><td>Progressionszone</td></tr>
  <tr><td><strong>4</strong></td><td>ca. 70.000 \u2013 278.000\u20ac</td><td>42%</td><td>Spitzensteuersatz</td></tr>
  <tr><td><strong>5</strong></td><td>ab ca. 278.000\u20ac</td><td>45%</td><td>Reichensteuersatz</td></tr>
</table>
<p><strong>Hinweis:</strong> Bei <strong>Zusammenveranlagung</strong> (Ehepaar) verdoppeln sich alle Grenzwerte.</p>
<p>Die Progression bedeutet: Je mehr man verdient, desto h\u00f6her ist der Grenzsteuersatz auf den letzten Euro.</p>`,
      merke: `5 Zonen: 0% \u2192 14% \u2192 progressiv bis 42% \u2192 42% (Spitze) \u2192 45% (Reiche). Zusammenveranlagung = alle Grenzen \u00d72.`,
      details: [
        { titel: "\u{1F4A1} Warum Progression?", inhalt: "Das Prinzip der <strong>Leistungsf\u00e4higkeit</strong>: Wer mehr verdient, kann einen h\u00f6heren Anteil an den Staat abgeben. Deshalb steigt der Steuersatz mit dem Einkommen \u2013 aber nur f\u00fcr den <strong>letzten Euro</strong> (Grenzsteuersatz), nicht f\u00fcr das gesamte Einkommen." }
      ],
      schritte: [
        {
          titel: "Schritt 1: Warum Progressionstarif?",
          inhalt: `<p>Die Einkommensteuer ist <strong>progressiv</strong>: Wer mehr verdient, zahlt einen h\u00f6heren Steuersatz.</p>
<p>Das Prinzip der <strong>steuerlichen Leistungsf\u00e4higkeit</strong>:</p>
<p>100 \u20ac sind f\u00fcr einen Geringverdiener viel wichtiger als f\u00fcr einen Millionär. Daher werden hohe Einkommen st\u00e4rker belastet.</p>
<div class="def-box"><div class="def-label">Wichtig: Grenzsteuersatz \u2260 Durchschnittssteuersatz</div>
Der h\u00f6chste Satz gilt immer nur f\u00fcr den <strong>letzten Euro</strong>, nicht f\u00fcr das ganze Einkommen!</div>`
        },
        {
          titel: "Schritt 2: Die 5 Zonen im \u00dcberblick",
          inhalt: `<table class="erk-table">
  <tr><th>Zone</th><th>Einkommensbereich</th><th>Steuersatz</th><th>Bezeichnung</th></tr>
  <tr><td><strong>1</strong></td><td>0 \u2013 ca. 12.000\u20ac</td><td>0%</td><td>Grundfreibetrag</td></tr>
  <tr><td><strong>2</strong></td><td>ca. 12.000 \u2013 18.000\u20ac</td><td>14% \u2013 24%</td><td>Eingangssteuersatz</td></tr>
  <tr><td><strong>3</strong></td><td>ca. 18.000 \u2013 70.000\u20ac</td><td>24% \u2013 42%</td><td>Progressionszone</td></tr>
  <tr><td><strong>4</strong></td><td>ab ca. 70.000\u20ac</td><td>42%</td><td>Spitzensteuersatz</td></tr>
  <tr><td><strong>5</strong></td><td>ab ca. 280.000\u20ac</td><td>45%</td><td>Reichensteuer</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Grenzsteuersatz vs. Durchschnittssteuersatz",
          inhalt: `<p>Der wichtigste Unterschied:</p>
<div class="def-box"><div class="def-label">Grenzsteuersatz</div>
Der Steuersatz f\u00fcr den <strong>letzten zus\u00e4tzlichen Euro</strong> Einkommen.<br>Beispiel: Bei 50.000\u20ac Einkommen liegt der Grenzsteuersatz bei ca. 35%.</div>
<div class="def-box"><div class="def-label">Durchschnittssteuersatz</div>
Tats\u00e4chlich gezahlte Steuer geteilt durch Gesamteinkommen.<br>Liegt immer <strong>unter</strong> dem Grenzsteuersatz!</div>`
        },
        {
          titel: "Schritt 4: Berechnungsbeispiel",
          inhalt: `<p>Beispiel: Person verdient 60.000\u20ac zu versteuerndes Einkommen</p>
<p>\ud83d\udfe2 Zone 1 (0-12.000\u20ac): <strong>0% = 0\u20ac</strong><br>
\ud83d\udd35 Zone 2 (12.000-18.000\u20ac): ~14-24% \u2248 <strong>800\u20ac</strong><br>
\ud83d\udd35 Zone 3 (18.000-60.000\u20ac): 24-42% \u2248 <strong>12.000\u20ac</strong></p>
<p>Gesamtsteuer: ca. 12.800\u20ac<br>
Durchschnittssteuersatz: 12.800/60.000 \u2248 <strong>21%</strong><br>
Grenzsteuersatz: ca. <strong>38%</strong></p>`
        }
      ],

      interaktion: [
        { frage: "In Zone 1 zahlt man ...", optionen: ["14%", "0%", "42%", "25%"], richtig: 1, erklaerung: "Zone 1 = Grundfreibetrag = 0% Steuern." },
        { frage: "Ab welcher Zone gilt der Spitzensteuersatz?", optionen: ["Zone 2", "Zone 3", "Zone 4", "Zone 5"], richtig: 2, erklaerung: "Zone 4 = Spitzensteuersatz 42%." },
        { frage: "Der Reichensteuersatz betr\u00e4gt ...", optionen: ["42%", "45%", "50%", "47%"], richtig: 1, erklaerung: "Zone 5 = Reichensteuersatz = 45%." },
        { frage: "Bei Zusammenveranlagung ...", optionen: ["Halbieren sich die Grenzen", "Verdoppeln sich die Grenzen", "\u00c4ndern sich die Grenzen nicht", "Gibt es keine Zonen"], richtig: 1, erklaerung: "Bei Ehepaaren (Splittingtarif) verdoppeln sich alle Grenzwerte." },
        { frage: "Der Eingangssteuersatz startet bei ...", optionen: ["0%", "14%", "24%", "42%"], richtig: 1, erklaerung: "Zone 2 beginnt mit 14% Eingangssteuersatz." }
      ]
    }
  ],
  quiz: [
    { frage: "Was unterscheidet Steuern von Geb\u00fchren?", optionen: ["Steuern sind freiwillig", "Bei Steuern gibt es keine individuelle Gegenleistung", "Geb\u00fchren sind h\u00f6her", "Geb\u00fchren zahlt nur der Staat"], richtig: 1, erklaerung: "Steuern (\u00a73 AO): Keine Gegenleistung. Geb\u00fchren: tats\u00e4chliche Gegenleistung." },
    { frage: "Welches Gesetz steht an der Spitze?", optionen: ["AO", "EStG", "GG", "FGO"], richtig: 2, erklaerung: "GG ganz oben, dann AO, dann Einzelgesetze." },
    { frage: "Welcher Artikel regelt die Verteilung des Steueraufkommens?", optionen: ["Art. 105 GG", "Art. 106 GG", "Art. 108 GG", "Art. 104a GG"], richtig: 1, erklaerung: "Art. 106 = Verteilung." },
    { frage: "Warum taucht die ErbSt juristisch zweimal auf?", optionen: ["Weil sie hoch ist", "Weil Erbschaft kein Rechtsgesch\u00e4ft ist, Schenkung aber schon", "Weil Bund und L\u00e4nder teilen", "Weil periodisch und aperiodisch"], richtig: 1, erklaerung: "Erbschaft = Substanzsteuer. Schenkung = Verkehrsteuer." },
    { frage: "Freibetrag vs. Freigrenze?", optionen: ["Freibetrag ist h\u00f6her", "Freibetrag: nur \u00dcbersteigendes besteuert. Freigrenze: gesamter Betrag", "Kein Unterschied", "Freigrenze nur f\u00fcr Firmen"], richtig: 1, erklaerung: "Freibetrag='soweit', Freigrenze='wenn'." },
    { frage: "Welche sind Gemeinschaftsteuern?", optionen: ["GrSt und GewSt", "ESt und USt", "ErbSt und GrESt", "Tabak und Energie"], richtig: 1, erklaerung: "ESt + USt = Gemeinschaftsteuern." },
    { frage: "Was bedeutet 'direkte Steuer'?", optionen: ["Direkt an Staat gezahlt", "Man tr\u00e4gt sie selbst", "An der Quelle einbehalten", "Vom Arbeitgeber abgezogen"], richtig: 1, erklaerung: "Direkt = eigene Belastung." },
    { frage: "Mindeststammkapital GmbH?", optionen: ["10.000\u20ac", "25.000\u20ac", "50.000\u20ac", "Keins"], richtig: 1, erklaerung: "GmbH: 25.000\u20ac. AG: 50.000\u20ac." },
    { frage: "Transparenzprinzip?", optionen: ["FA sieht alles", "Unternehmen+Unternehmer=Einheit", "Alles ver\u00f6ffentlichen", "Steuern transparent"], richtig: 1, erklaerung: "Einzelunternehmen: steuerliche Einheit." },
    { frage: "Was ist eine Quellenabzugsteuer?", optionen: ["Steuer auf Wasserquellen", "Direkt an der Quelle einbehalten", "Selbst berechnen", "Nur nat\u00fcrliche Quellen"], richtig: 1, erklaerung: "Z.B. Lohnsteuer \u2013 Arbeitgeber zieht sie direkt ab." },
    { frage: "Was regelt die AO?", optionen: ["Nur ESt", "Allgemeines Fundament f\u00fcr alle Steuerarten", "Nur Finanzgericht", "Verteilung Bund/L\u00e4nder"], richtig: 1, erklaerung: "AO = Fundament f\u00fcr alle Steuerarten." },
    { frage: "USt ist eine ...", optionen: ["Ertragsteuer", "Grundsteuer", "Verkehrsteuer", "GewSt"], richtig: 2, erklaerung: "USt = Verkehrsteuer (Rechtsgesch\u00e4fte)." },
    { frage: "Hundesteuer wird erhoben von ...", optionen: ["Bund", "Land", "Gemeinde", "Bund+L\u00e4nder"], richtig: 2, erklaerung: "\u00d6rtliche Aufwandsteuer = Gemeinde." },
    { frage: "Freigrenze 1.000\u20ac, Einkommen 1.500\u20ac?", optionen: ["500\u20ac besteuert", "1.000\u20ac besteuert", "1.500\u20ac voll besteuert", "Nichts"], richtig: 2, erklaerung: "Freigrenze: bei \u00dcberschreitung gesamter Betrag." },
    { frage: "Wer haftet bei KG unbeschr\u00e4nkt?", optionen: ["Alle", "Kommanditist", "Komplement\u00e4r", "Niemand"], richtig: 2, erklaerung: "Komplement\u00e4r = unbeschr\u00e4nkt." },
    { frage: "KapGes auf Gesellschaftsebene?", optionen: ["ESt+SolZ+KiSt", "GewSt+KSt+SolZ", "Nur GewSt", "Nur KSt"], richtig: 1, erklaerung: "GewSt + KSt + SolZ." },
    { frage: "Rechtsverordnungen werden erlassen von ...", optionen: ["Dem Bundestag", "Der Exekutive", "Den Gerichten", "Der EU"], richtig: 1, erklaerung: "Exekutive (z.B. Bundesfinanzministerium)." },
    { frage: "Was ist ein DBA?", optionen: ["Doppelte Buchf\u00fchrungsanordnung", "Doppelbesteuerungsabkommen", "Durchf\u00fchrungsbestimmung Abgaben", "Digitaler Bescheid-Automat"], richtig: 1, erklaerung: "DBA = Doppelbesteuerungsabkommen." },
    { frage: "Indirekte Steuern kann man ...", optionen: ["Nicht zahlen", "Auf andere \u00fcberw\u00e4lzen", "Beim FA anfechten", "Nur bar zahlen"], richtig: 1, erklaerung: "Indirekt = \u00dcberw\u00e4lzung, z.B. USt auf Kunden." },
    { frage: "Lohnsteuer wird erhoben durch ...", optionen: ["Veranlagung", "Quellenabzug", "Selbstveranlagung", "Sch\u00e4tzung"], richtig: 1, erklaerung: "Arbeitgeber beh\u00e4lt Lohnsteuer direkt ein." },
    { frage: "Periodische Steuer?", optionen: ["ErbSt", "GrESt", "ESt", "Schenkungsteuer"], richtig: 2, erklaerung: "ESt f\u00e4llt jedes Jahr an." },
    { frage: "Typisch stille Eink\u00fcnfte = ...", optionen: ["Gewerbeeink\u00fcnfte", "Kapitalverm\u00f6gen", "V&V", "Sonstige"], richtig: 1, erklaerung: "Typisch still = Eink\u00fcnfte aus Kapitalverm\u00f6gen." },
    { frage: "Ohne Gewinnbeteiligung ist eine stille Beteiligung ein ...", optionen: ["Geschenk", "Darlehen", "Beitrag", "Gewerbebetrieb"], richtig: 1, erklaerung: "Ohne Gewinnbeteiligung = Darlehen." },
    { frage: "Grundformel der Steuerschuld?", optionen: ["Einkommen \u2013 Freibetrag", "BMG \u00d7 Steuertarif", "Umsatz \u00f7 Steuer", "Gewinn + Verlust"], richtig: 1, erklaerung: "BMG \u00d7 Tarif = Steuerschuld." },
    { frage: "Grenzsteuersatz bezieht sich auf ...", optionen: ["Gesamtes Einkommen", "Den letzten Euro", "Den Durchschnitt", "Den ersten Euro"], richtig: 1, erklaerung: "Grenzsteuersatz = Steuer auf den letzten zusätzlichen Euro." },
    { frage: "Wie viele Tarifzonen hat die ESt?", optionen: ["3", "4", "5", "6"], richtig: 2, erklaerung: "5 Zonen: Grundfreibetrag, Eingang, Progression, Spitze, Reiche." },
    { frage: "Was ist die gr\u00f6\u00dfte Einzelsteuer?", optionen: ["ESt", "GewSt", "USt", "KSt"], richtig: 2, erklaerung: "Die Umsatzsteuer bringt am meisten ein." },
    { frage: "Der KSt-Satz betr\u00e4gt ...", optionen: ["10%", "15%", "25%", "42%"], richtig: 1, erklaerung: "KSt = 15%." }
  ],
  lueckentext: [
    { text: "Steuern sind in \u00a73 Abs. 1 ___ definiert und es besteht kein Anspruch auf eine individuelle ___.", luecken: ["AO", "Gegenleistung"], erklaerung: "Steuern: AO, keine Gegenleistung." },
    { text: "Art. 105 GG regelt die ___, Art. 106 GG die Verteilung des ___ und Art. 108 GG die ___.", luecken: ["Gesetzgebungskompetenz", "Steueraufkommens", "Finanzverwaltung"], erklaerung: "Die drei GG-Artikel." },
    { text: "Beim ___ wird nur der \u00fcbersteigende Betrag besteuert ('___'), bei der ___ der gesamte Betrag ('___').", luecken: ["Freibetrag", "soweit", "Freigrenze", "wenn"], erklaerung: "Freibetrag='soweit', Freigrenze='wenn'." },
    { text: "Die GmbH ben\u00f6tigt ein Stammkapital von mindestens ___ \u20ac und hat eine eigene ___.", luecken: ["25.000", "Rechtspers\u00f6nlichkeit"], erklaerung: "GmbH = Kapitalgesellschaft." },
    { text: "Bei Personenunternehmen f\u00e4llt auf Unternehmensebene ___ an, bei KapGes zus\u00e4tzlich ___ und ___.", luecken: ["Gewerbesteuer", "K\u00f6rperschaftsteuer", "Solidarit\u00e4tszuschlag"], erklaerung: "KapGes: GewSt + KSt + SolZ." },
    { text: "___ Steuern tr\u00e4gt man selbst, ___ Steuern werden auf andere \u00fcberw\u00e4lzt (z.B. ___).", luecken: ["Direkte", "indirekte", "USt"], erklaerung: "Direkt = selbst tragen. Indirekt = \u00fcberw\u00e4lzen." },
    { text: "Beim ___ wird die Steuer direkt einbehalten (z.B. ___), bei der ___ gibt man eine Steuererkl\u00e4rung ab.", luecken: ["Quellenabzug", "Lohnsteuer", "Veranlagung"], erklaerung: "Quellenabzug vs. Veranlagung." },
    { text: "___ Steuern fallen jedes Jahr an, ___ Steuern nur einmalig bei einem Ereignis (z.B. ___).", luecken: ["Periodische", "aperiodische", "Erbschaft"], erklaerung: "Periodisch = j\u00e4hrlich. Aperiodisch = einmalig." },
    { text: "Die stille Gesellschaft ist eine reine ___. Bei der ___ stillen Gesellschaft sind die Eink\u00fcnfte aus Kapitalverm\u00f6gen.", luecken: ["Innengesellschaft", "typisch"], erklaerung: "Stille Gesellschaft = Innengesellschaft. Typisch = Kapitalverm\u00f6gen." },
    { text: "Die Steuerschuld ergibt sich aus: ___ \u00d7 ___ = Steuerschuld.", luecken: ["Bemessungsgrundlage", "Steuertarif"], erklaerung: "BMG \u00d7 Tarif = Steuerschuld." },
    { text: "Der ___ ist der Steuersatz auf den letzten Euro. Der ___ ist Gesamtsteuer geteilt durch Gesamteinkommen.", luecken: ["Grenzsteuersatz", "Durchschnittssteuersatz"], erklaerung: "Grenz = letzter Euro. Durchschnitt = Gesamt/Gesamt." },
    { text: "Der ESt-Tarif hat ___ Zonen. Zone 1 ist der ___ (0%), Zone 4 der ___ (42%).", luecken: ["5", "Grundfreibetrag", "Spitzensteuersatz"], erklaerung: "5 Zonen von 0% bis 45%." }
  ],
  zuordnung: [
    { titel: "Abgabenarten zuordnen", paare: [
      { links: "Einkommensteuer", rechts: "Steuer (keine Gegenleistung)" },
      { links: "Personalausweis", rechts: "Geb\u00fchr (tats\u00e4chliche Gegenleistung)" },
      { links: "Rundfunkbeitrag", rechts: "Beitrag (m\u00f6gliche Gegenleistung)" },
      { links: "Versp\u00e4tungszuschlag", rechts: "Steuerliche Nebenleistung" }
    ]},
    { titel: "Juristische Steuerarten zuordnen", paare: [
      { links: "ESt, KSt, GewSt", rechts: "Ertragsteuern" },
      { links: "ErbSt bei Erbschaft", rechts: "Substanzsteuern" },
      { links: "USt, ErbSt bei Schenkung", rechts: "Verkehrsteuern" },
      { links: "Bier-, Tabaksteuer", rechts: "Verbrauchsteuern" }
    ]},
    { titel: "Politische Einteilung zuordnen", paare: [
      { links: "Tabak-, Energiesteuer", rechts: "Bundessteuern" },
      { links: "Erbschaftsteuer", rechts: "Landessteuern" },
      { links: "Grund-, Gewerbesteuer", rechts: "Gemeindesteuern" },
      { links: "ESt, USt", rechts: "Gemeinschaftsteuern" }
    ]},
    { titel: "Unternehmensformen zuordnen", paare: [
      { links: "Einzelunternehmen", rechts: "Unbeschr\u00e4nkte Haftung, Transparenzprinzip" },
      { links: "GmbH", rechts: "25.000\u20ac Stammkapital" },
      { links: "AG", rechts: "50.000\u20ac Grundkapital, 3 Organe" },
      { links: "KG", rechts: "Komplement\u00e4r unbeschr\u00e4nkt, Kommanditist beschr\u00e4nkt" }
    ]},
    { titel: "Direkte vs. indirekte Steuern", paare: [
      { links: "ESt, KSt, GewSt", rechts: "Direkte Steuern" },
      { links: "USt, Biersteuer, Tabaksteuer", rechts: "Indirekte Steuern" },
      { links: "Man tr\u00e4gt sie selbst", rechts: "Direkte Steuer" },
      { links: "\u00dcberw\u00e4lzung auf Kunden", rechts: "Indirekte Steuer" }
    ]},
    { titel: "Steuererhebung zuordnen", paare: [
      { links: "Lohnsteuer", rechts: "Quellenabzug" },
      { links: "Kapitalertragsteuer", rechts: "Quellenabzug" },
      { links: "J\u00e4hrliche ESt-Erkl\u00e4rung", rechts: "Veranlagung" },
      { links: "USt-Voranmeldung", rechts: "Selbstveranlagung" }
    ]},
    { titel: "Stille Gesellschaft zuordnen", paare: [
      { links: "Typisch still", rechts: "Eink\u00fcnfte aus Kapitalverm\u00f6gen" },
      { links: "Atypisch still", rechts: "Eink\u00fcnfte aus Gewerbebetrieb" },
      { links: "Kein unternehmerisches Risiko", rechts: "Typisch still" },
      { links: "Beteiligung an Wertentwicklung", rechts: "Atypisch still" }
    ]},
    { titel: "Steuertarif-Begriffe zuordnen", paare: [
      { links: "Steuer auf den letzten Euro", rechts: "Grenzsteuersatz" },
      { links: "Gesamtsteuer \u00f7 Gesamteinkommen", rechts: "Durchschnittssteuersatz" },
      { links: "42%", rechts: "Spitzensteuersatz" },
      { links: "45%", rechts: "Reichensteuersatz" }
    ]},
    { titel: "Tarifzonen zuordnen", paare: [
      { links: "0% Steuern", rechts: "Zone 1 \u2013 Grundfreibetrag" },
      { links: "14% \u2013 24%", rechts: "Zone 2 \u2013 Eingangssteuersatz" },
      { links: "42% fest", rechts: "Zone 4 \u2013 Spitzensteuersatz" },
      { links: "45% fest", rechts: "Zone 5 \u2013 Reichensteuersatz" }
    ]}
  ]
};

// ============================================================
// STEUERRECHT - Kapitel 2: Einkommensteuer
// ============================================================
FAECHER["steuerrecht"].themen["einkommensteuer"] = {
  name: "2. Einkommensteuer",
  zusammenfassung: `<h4>2. Einkommensteuer – Vollständige Zusammenfassung</h4>

<h5>📌 Allgemeine Charakterisierung</h5>
<p><strong>Rechtsgrundlagen:</strong> EStG, EStDV, LStDV (+ Richtlinien: EStR, EStH, LStR, LStH)</p>
<table class="erk-table">
  <tr><th>Merkmal</th><th>Inhalt</th><th>Rechtsgrundlage</th></tr>
  <tr><td><strong>Personensteuer</strong></td><td>Berücksichtigt persönliche Verhältnisse (Familienstand, Kinder, Leistungsfähigkeit)</td><td>§ 1 EStG</td></tr>
  <tr><td><strong>Ertragsteuer</strong></td><td>Bemessungsgrundlage = zu versteuerndes Einkommen</td><td>§ 2 Abs. 5 EStG</td></tr>
  <tr><td><strong>Gemeinschaftsteuer</strong></td><td>Aufkommen: Bund / Länder / Gemeinden</td><td>Art. 106 Abs. 3 und 5 GG</td></tr>
  <tr><td><strong>Jahressteuer</strong></td><td>Veranlagungszeitraum = Kalenderjahr</td><td>§ 2 Abs. 7, § 25 Abs. 1 EStG</td></tr>
</table>

<h5>📌 7 Einkunftsarten (§ 2 Abs. 1 EStG)</h5>
<table class="erk-table">
  <tr><th>Einkunftsart</th><th>Kategorie</th><th>Ermittlung</th></tr>
  <tr><td>Einkünfte aus Land- und Forstwirtschaft</td><td rowspan="3"><strong>Gewinneinkunftsarten</strong></td><td rowspan="3">Bilanz oder EÜR (§ 4 Abs. 3 EStG)</td></tr>
  <tr><td>Einkünfte aus Gewerbebetrieb</td></tr>
  <tr><td>Einkünfte aus selbständiger Arbeit</td></tr>
  <tr><td>Einkünfte aus nichtselbständiger Arbeit</td><td rowspan="4"><strong>Überschusseinkunftsarten</strong></td><td rowspan="4">Einnahmen − Werbungskosten</td></tr>
  <tr><td>Einkünfte aus Kapitalvermögen</td></tr>
  <tr><td>Einkünfte aus Vermietung und Verpachtung</td></tr>
  <tr><td>Sonstige Einkünfte</td></tr>
</table>

<h5>📌 Persönliche Steuerpflicht – Prüfungsschema</h5>
<p><strong>Schritt 1: Unbeschränkte Steuerpflicht (§ 1 Abs. 1–3 EStG)</strong></p>
<table class="erk-table">
  <tr><th>Art</th><th>Voraussetzungen</th><th>Prinzip</th></tr>
  <tr><td>Normal (§ 1 Abs. 1)</td><td>Natürliche Person + Wohnsitz (§ 8 AO) oder gewöhnlicher Aufenthalt &gt;6 Monate (§ 9 AO) im Inland</td><td>Welteinkommensprinzip</td></tr>
  <tr><td>Erweitert (§ 1 Abs. 2)</td><td>Deutsche Staatsangehörige im Ausland (z.B. Diplomaten)</td><td>Welteinkommensprinzip</td></tr>
  <tr><td>Fiktiv / Grenzpendler (§ 1 Abs. 3)</td><td>Antrag + Wohnsitz Ausland + inländische Einkünfte (§ 49 EStG) + mind. 90% der dt. ESt unterliegend + Nachweis</td><td>Welteinkommensprinzip</td></tr>
</table>
<p><strong>Schritt 2: Beschränkte Steuerpflicht (§ 1 Abs. 4 EStG)</strong></p>
<table class="erk-table">
  <tr><th>Art</th><th>Voraussetzungen</th><th>Prinzip</th></tr>
  <tr><td>Normal (§ 1 Abs. 4)</td><td>Wohnsitz/Aufenthalt Ausland + inländische Einkünfte (§ 49 EStG)</td><td>Inlandsprinzip</td></tr>
  <tr><td>Erweitert (§ 2 AStG)</td><td>Wegzügler</td><td>Inlandsprinzip</td></tr>
</table>
<div class="def-box"><div class="def-label">Prüfungshinweis</div>Immer systematisch prüfen: erst § 1 Abs. 1 → dann § 8/9 AO → dann § 1 Abs. 3 → dann § 1 Abs. 4. <strong>Rechenweg immer vollständig notieren!</strong></div>

<h5>📌 Steuerbefreiungen (§ 3 EStG – Auswahl)</h5>
<p>Nr. 1: KV, PV, UV | Nr. 2: Arbeitslosengeld | Nr. 11c: Inflationsausgleich | Nr. 15: AG-Zuschüsse ÖPNV | Nr. 16: Reisekostenerstattung | Nr. 26/26a: Übungsleiter / Ehrenamt | Nr. 45: Dienst-Handy</p>
<div class="def-box"><div class="def-label">Progressionsvorbehalt (§ 32b EStG)</div>Steuerfreie Leistungen (ALG, Krankengeld, Elterngeld, KUG) erhöhen den <strong>Steuersatz</strong> auf das restliche Einkommen. Bei &gt;410 € pro Jahr → Pflichtveranlagung!</div>

<h5>📌 Verlustverrechnung – 3 Stufen</h5>
<table class="erk-table">
  <tr><th>Stufe</th><th>Art</th><th>Erklärung</th></tr>
  <tr><td>1</td><td><strong>Horizontaler Verlustausgleich</strong></td><td>Verrechnung innerhalb derselben Einkunftsart (z.B. 2 Gewerbebetriebe)</td></tr>
  <tr><td>2</td><td><strong>Vertikaler Verlustausgleich</strong></td><td>Verrechnung zwischen verschiedenen Einkunftsarten (z.B. Gewerbe+ mit V&amp;V−)</td></tr>
  <tr><td>3</td><td><strong>Verlustabzug (§ 10d EStG)</strong></td><td>Verlustrücktrag (Vorjahr) oder Verlustvortrag (Folgejahre)</td></tr>
</table>
<p><strong>Ausnahmen</strong> (kein vertikaler Ausgleich): Einkünfte aus Kapitalvermögen · private Veräußerungsgeschäfte · sonstige Einkünfte (§ 22 Nr. 3)</p>

<h5>📌 Steuerveranlagung (§§ 25 ff. EStG)</h5>
<p><strong>Abgabefristen (§ 149 AO):</strong> Grundsätzlich Ende Juli des Folgejahres; bei steuerlicher Vertretung Ende Februar des zweiten Folgejahres. Datenfernübertragung bei Gewinneinkünften verpflichtend.</p>
<table class="erk-table">
  <tr><th>Veranlagungsart</th><th>Personenkreis</th><th>Tarif</th></tr>
  <tr><td>Einzelveranlagung</td><td>Ledige, Verwitwete, Geschiedene, dauerhaft getrennte Ehegatten, beschränkt Steuerpflichtige</td><td>Grundtarif</td></tr>
  <tr><td><strong>Zusammenveranlagung</strong></td><td>Ehegatten: beide unbeschränkt steuerpflichtig, nicht getrennt lebend (1 Tag im VZ genügt)</td><td><strong>Splittingtarif</strong></td></tr>
</table>

<h5>📌 Einkünfte aus Gewerbebetrieb (§ 15 EStG)</h5>
<p><strong>Voraussetzungen (kumulativ, § 15 Abs. 2 S. 1 EStG):</strong> Selbständigkeit · Nachhaltigkeit · Gewinnerzielungsabsicht · Beteiligung am allgemeinen wirtschaftlichen Verkehr · Keine LuF · Keine freiberufliche/selbständige Tätigkeit · (Keine Vermögensverwaltung)</p>
<p><strong>Einkünfteermittlungsmethoden:</strong></p>
<table class="erk-table">
  <tr><th>Methode</th><th>Voraussetzung</th><th>Grundlage</th></tr>
  <tr><td>Betriebsvermögensvergleich (Bilanz)</td><td>Buchführungspflichtige Unternehmen</td><td>Maßgeblichkeitsprinzip: HB → StB (steuerliche Abweichungen möglich)</td></tr>
  <tr><td>EÜR (§ 4 Abs. 3 EStG)</td><td>Befreiung Buchführungspflicht (§ 241a HGB)</td><td>Zu-/Abflussprinzip (§ 11 EStG); Ausnahmen: 10-Tages-Fiktion, AfA</td></tr>
</table>
<p><strong>Wichtige Abweichungen Handelsbilanz / Steuerbilanz:</strong></p>
<table class="erk-table">
  <tr><th>Position</th><th>Handelsbilanz</th><th>Steuerbilanz</th></tr>
  <tr><td>Reinvestitionsrücklagen</td><td>❌ nicht zulässig</td><td>✅ zulässig</td></tr>
  <tr><td>Drohverlustrückstellungen</td><td>✅ zulässig</td><td>❌ nicht zulässig</td></tr>
  <tr><td>AfA-Tabellen</td><td>eigene</td><td>steuerliche AfA-Tabellen</td></tr>
</table>
<p><strong>Nicht abziehbare Betriebsausgaben (§ 4 Abs. 5 EStG):</strong> Geschenke &gt;50€ p.a. · Jagd/Yachten · Geschäftsessen nur 70% · Geldstrafen · Bestechungsgelder</p>
<p><strong>Sonderbetriebseinkünfte:</strong> Vergütungen, die der Gesellschafter von der PersGes erhält (Gehalt, Darlehenszinsen, Miete/Pacht) → erhöhen / vermindern das steuerliche Gesamtergebnis</p>
<p><strong>Veräußerung Gewerbebetrieb (§ 16 EStG):</strong> Veräußerungspreis − Veräußerungskosten − Buchwert BV = Veräußerungsgewinn. Steuerlich begünstigt (§ 16 Abs. 4 + § 34 EStG).</p>

<h5>📌 Einkünfte aus selbständiger Arbeit (§ 18 EStG)</h5>
<p><strong>Freiberufliche Tätigkeit (§ 18 Abs. 1 Nr. 1):</strong> Wissenschaftliche, künstlerische, schriftstellerische, unterrichtende oder erzieherische Tätigkeit + Katalogberufe (Ärzte, Zahnärzte, Rechtsanwälte, EDV-Berater, Hebammen u.a.)</p>
<p><strong>Sonstige selbständige Arbeit (§ 18 Abs. 1 Nr. 3):</strong> Gelegentlich oder ausnahmsweise nachhaltig (z.B. Aufsichtsrat, Testamentsvollstrecker)</p>
<p><strong>Voraussetzungen</strong> wie Gewerbebetrieb: Selbständigkeit · Nachhaltigkeit · Gewinnerzielungsabsicht · Beteiligung am wirtschaftlichen Verkehr. Abgrenzung zum Gewerbebetrieb nach 15.6 EStH.</p>`,
  erklaerungen: [
    {
      titel: "\u{1F464} Pers\u00f6nliche Steuerpflicht",
      inhalt: `<table class="erk-table">
  <tr><th></th><th><span class="term" data-label="Unbeschr. Steuerpflicht" data-def="Alle weltweiten Eink\u00fcnfte besteuert (\u00a71 EStG). Voraussetzung: Wohnsitz oder gew. Aufenthalt in DE.">Unbeschr\u00e4nkt (\u00a71 EStG)</span></th><th><span class="term" data-label="Beschr. Steuerpflicht" data-def="Nur inl\u00e4ndische Eink\u00fcnfte besteuert (\u00a71 Abs. 4 EStG). Keine Bindung an DE.">Beschr\u00e4nkt (\u00a71 Abs. 4 EStG)</span></th></tr>
  <tr><td><strong>Wer?</strong></td><td>Wohnsitz/gew. Aufenthalt in DE</td><td>Kein Wohnsitz, kein gew. Aufenthalt</td></tr>
  <tr><td><strong>Was?</strong></td><td><strong>Welteinkommen</strong></td><td>Nur <strong>inl\u00e4ndische</strong> Eink\u00fcnfte</td></tr>
</table>
<div class="def-box"><div class="def-label"><span class="term" data-label="\u00a78 AO \u2013 Wohnsitz" data-def="Wohnsitz = Wohnung, die jemand inne hat und die auf dauerhaften Aufenthalt schlie\u00dfen l\u00e4sst. Geregelt in \u00a78 AO.">Wohnsitz (\u00a78 AO)</span></div>Innegehaltene Wohnung, auf dauerhaften Aufenthalt ausgerichtet.</div>
<div class="def-box"><div class="def-label"><span class="term" data-label="\u00a79 AO \u2013 Gew. Aufenthalt" data-def="Gew\u00f6hnlicher Aufenthalt = mehr als 6 Monate ununterbrochen in Deutschland. Geregelt in \u00a79 AO.">Gew\u00f6hnlicher Aufenthalt (\u00a79 AO)</span></div>Mehr als 6 Monate zusammenh\u00e4ngend.</div>`,
      merke: `Unbeschr\u00e4nkt = Welteinkommen. Beschr\u00e4nkt = nur inl\u00e4ndisch.`,
      schritte: [
        {
          titel: "Schritt 1: Ist die Person natürlich?",
          inhalt: `<p>Die ESt betrifft nur <strong>natürliche Personen</strong> – also Menschen, keine Kapitalgesellschaften (GmbH, AG zahlen stattdessen KSt).</p>
<p>👉 Prüffrage: Handelt es sich um einen <strong>Menschen</strong> (nicht um eine Firma)?</p>`
        },
        {
          titel: "Schritt 2: Wohnsitz oder gewöhnlicher Aufenthalt in DE?",
          inhalt: `<p>Hat die Person einen <strong>Wohnsitz (§ 8 AO)</strong> in Deutschland?<br>→ Dauerhaft genutzte Wohnung im Inland = <strong>Ja</strong></p>
<p>Oder hat sie ihren <strong>gewöhnlichen Aufenthalt (§ 9 AO)</strong> in DE?<br>→ Ununterbrochener Aufenthalt von <strong>mehr als 6 Monaten</strong> = <strong>Ja</strong></p>
<div class="def-box"><div class="def-label">Merke</div>Hotelzimmer ≠ Wohnsitz. Aber 7 Monate im Hotel = gew. Aufenthalt!</div>`
        },
        {
          titel: "Schritt 3: Unbeschränkt oder beschränkt?",
          inhalt: `<p><strong>Wohnsitz oder gew. Aufenthalt in DE?</strong></p>
<table class="erk-table">
  <tr><th>Ergebnis</th><th>Steuerpflicht</th><th>Besteuerung</th></tr>
  <tr><td>✅ Ja</td><td><strong>Unbeschränkt</strong> (§ 1 Abs. 1 EStG)</td><td>Welteinkommensprinzip</td></tr>
  <tr><td>❌ Nein</td><td><strong>Beschränkt</strong> (§ 1 Abs. 4 EStG)</td><td>Nur inländ. Einkünfte (§ 49 EStG)</td></tr>
</table>`
        },
        {
          titel: "Schritt 4: Fallbeispiele lösen",
          inhalt: `<p><strong>Fall 1:</strong> Prof. Tax hat Wohnsitz in Rosenheim + Florenz.<br>
→ Wohnsitz in DE ✅ → <strong>unbeschränkt steuerpflichtig</strong>, Welteinkommen</p>
<p><strong>Fall 2:</strong> Prof. Tax wohnt in Florenz, ist aber 8 Monate im Hotel in Rosenheim.<br>
→ Kein Wohnsitz, aber gew. Aufenthalt (>6 Monate) ✅ → <strong>unbeschränkt steuerpflichtig</strong></p>
<p><strong>Fall 3:</strong> Prof. Tax wohnt in Kufstein (Österreich), pendelt täglich.<br>
→ Kein Wohnsitz, kein gew. Aufenthalt ❌ → <strong>Antrag auf fiktive Steuerpflicht</strong> (§ 1 Abs. 3 EStG) möglich</p>`
        }
      ],
      interaktion: [
        { frage: "Franzose arbeitet 8 Monate in DE, kein Wohnsitz. Wie besteuert?", optionen: ["Gar nicht", "Beschr\u00e4nkt", "Unbeschr\u00e4nkt", "Nur in Frankreich"], richtig: 2, erklaerung: ">6 Monate = gew. Aufenthalt \u2192 unbeschr\u00e4nkt." },
        { frage: "Was wird bei unbeschr\u00e4nkter Steuerpflicht besteuert?", optionen: ["Nur dt. Einkommen", "Welteinkommen", "Nur Gehalt", "Nichts"], richtig: 1, erklaerung: "Unbeschr\u00e4nkt = gesamtes Welteinkommen." },
        { frage: "Ab wann liegt ein gew\u00f6hnlicher Aufenthalt vor?", optionen: ["Ab 1 Monat", "Ab 3 Monaten", "Ab 6 Monaten", "Ab 12 Monaten"], richtig: 2, erklaerung: "\u00a79 AO: >6 Monate zusammenh\u00e4ngend." },
        { frage: "Beschr\u00e4nkt steuerpflichtig hei\u00dft ...", optionen: ["Man zahlt weniger", "Nur inl\u00e4ndische Eink\u00fcnfte besteuert", "Man ist von Steuern befreit", "Nur Kapitalertr\u00e4ge besteuert"], richtig: 1, erklaerung: "Beschr\u00e4nkt = nur inl\u00e4ndische Eink\u00fcnfte." },
        { frage: "Was definiert einen Wohnsitz (\u00a78 AO)?", optionen: ["Hotelzimmer reicht", "Innegehaltene Wohnung f\u00fcr dauerhaften Aufenthalt", "Briefkastenadresse", "Nur Eigentum z\u00e4hlt"], richtig: 1, erklaerung: "Wohnung, die auf dauerhaften Aufenthalt schlie\u00dfen l\u00e4sst." }
      ]
    },
    {
      titel: "\u{1F4CB} Die 7 Einkunftsarten",
      inhalt: `<div class="erk-tree">
  <div class="tree-root">7 Einkunftsarten (\u00a72 Abs. 1 EStG)</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>Gewinn</strong><br>1. Land/Forst<br>2. Gewerbe<br>3. Selbst\u00e4ndig</div>
    <div class="tree-branch" style="background:#FEF3C7;border-color:#F59E0B;"><strong>\u00dcberschuss</strong><br>4. Angestellt<br>5. Kapital<br>6. V&V<br>7. Sonstige</div>
  </div>
</div>
<p><strong>Gewinn</strong> = Betriebseinnahmen \u2013 Betriebsausgaben</p>
<p><strong>\u00dcberschuss</strong> = Einnahmen \u2013 Werbungskosten</p>`,
      merke: `1-3 = Gewinn. 4-7 = \u00dcberschuss. Was nicht in die 7 passt, ist <strong>nicht steuerbar</strong>!`,
      schritte: [
        {
          titel: "Schritt 1: Zwei Gruppen \u2013 Gewinn vs. \u00dcberschuss",
          inhalt: `<p>Die 7 Einkunftsarten teilen sich in zwei Ermittlungsgruppen:</p>
<div class="def-box"><div class="def-label">Gewinneinkunftsarten (Nr. 1-3)</div>
Gewinn = Betriebseinnahmen \u2212 Betriebsausgaben<br>
\u2192 Bilanzierung oder EAR-Rechnung</div>
<div class="def-box"><div class="def-label">\u00dcberschusseinkunftsarten (Nr. 4-7)</div>
\u00dcberschuss = Einnahmen \u2212 Werbungskosten<br>
\u2192 Keine Bilanz erforderlich</div>`
        },
        {
          titel: "Schritt 2: Alle 7 Einkunftsarten",
          inhalt: `<table class="erk-table">
  <tr><th>Nr.</th><th>Einkunftsart</th><th>Gruppe</th><th>\u00a7 EStG</th></tr>
  <tr><td>1</td><td>Land- und Forstwirtschaft</td><td>Gewinn</td><td>\u00a713</td></tr>
  <tr><td>2</td><td>Gewerbebetrieb</td><td>Gewinn</td><td>\u00a715</td></tr>
  <tr><td>3</td><td>Selbst\u00e4ndige Arbeit</td><td>Gewinn</td><td>\u00a718</td></tr>
  <tr><td>4</td><td>Nichtselbst\u00e4ndige Arbeit</td><td>\u00dcberschuss</td><td>\u00a719</td></tr>
  <tr><td>5</td><td>Kapitalverm\u00f6gen</td><td>\u00dcberschuss</td><td>\u00a720</td></tr>
  <tr><td>6</td><td>Vermietung & Verpachtung</td><td>\u00dcberschuss</td><td>\u00a721</td></tr>
  <tr><td>7</td><td>Sonstige Eink\u00fcnfte</td><td>\u00dcberschuss</td><td>\u00a722</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Sonderregeln f\u00fcr Kapitalverm\u00f6gen",
          inhalt: `<p>Einkunftsart 5 (Kapitalverm\u00f6gen) hat eine <strong>Sonderbehandlung</strong>:</p>
<p>\ud83d\udcb9 Abgeltungsteuer: <strong>pauschal 25%</strong> (+ SolZ + ggf. KiSt)<br>
\ud83d\udd12 "Abgeltend": diese Eink\u00fcnfte m\u00fcssen <strong>nicht mehr</strong> in der ESt-Erkl\u00e4rung angegeben werden<br>
\ud83c\udfe6 Bank zieht die Steuer automatisch ab (Quellenabzug)</p>
<div class="def-box"><div class="def-label">Ausnahme</div>
G\u00fcnstigerpr\u00fcfung: Wenn pers\u00f6nlicher Steuersatz unter 25%, kann man die Kapitalertr\u00e4ge doch in die Erkl\u00e4rung einbeziehen.</div>`
        },
        {
          titel: "Schritt 4: Reihenfolge der Berechnung",
          inhalt: `<p>Wie kommt man vom Einkommen zur Steuerschuld?</p>
<p>1. Alle Einkunftsarten einzeln ermitteln<br>
2. Verlustausgleich (horizontal + vertikal)<br>
3. Summe der Eink\u00fcnfte<br>
4. \u2212 Sonderausgaben, au\u00dfergew\u00f6hnliche Belastungen<br>
5. = <strong>Zu versteuerndes Einkommen (zvE)</strong><br>
6. \u00d7 ESt-Tarif = <strong>Steuerschuld</strong></p>`
        }
      ],

      fallbeispiele: [
        {
          titel: "Fall 1: Welche Einkunftsart liegt vor?",
          situation: `<p>Petra ist Steuerberaterin (selbstst\u00e4ndig t\u00e4tig, hat eigene Kanzlei) und vermietet nebenbei eine Eigentumswohnung. Zus\u00e4tzlich hat sie 500 \u20ac Zinsen auf ihrem Tagesgeldkonto erhalten.</p>`,
          aufgabe: `Ordne die drei T\u00e4tigkeiten den Einkunftsarten zu und gib die jeweiligen Paragraphen an.`,
          hinweis: `Steuerberater = freier Beruf. Vermietung hat eine eigene Einkunftsart. Zinsen geh\u00f6ren zu Kapitalverm\u00f6gen.`,
          loesung: [
            `<strong>Steuerberaterin (selbständig):</strong><br>Steuerberater ist ein <strong>freier Beruf</strong> → Einkünfte aus <strong>selbständiger Arbeit</strong> § 18 EStG (KEINE Einkünfte aus Gewerbebetrieb!)`,
            `<strong>Vermietung der Eigentumswohnung:</strong><br>Vermietung einer Immobilie → Einkünfte aus <strong>Vermietung und Verpachtung</strong> § 21 EStG`,
            `<strong>Zinsen auf Tagesgeldkonto:</strong><br>Zinserträge = Einkünfte aus <strong>Kapitalvermögen</strong> § 20 EStG → Abgeltungsteuer 25%`
          ],
          ergebnis: `Petra hat Eink\u00fcnfte aus drei verschiedenen Einkunftsarten: \u00a718 (selbst\u00e4ndig), \u00a721 (V&V), \u00a720 (Kapital). Alle werden separat ermittelt und dann zusammengez\u00e4hlt.`
        },
        {
          titel: "Fall 2: Gewerbebetrieb oder nicht?",
          situation: `<p>Max ist Softwareentwickler und arbeitet als Freelancer f\u00fcr verschiedene Unternehmen. Er hat einen Gewerbeschein angemeldet. Sein Kumpel Tom ist ebenfalls Softwareentwickler, hat sich aber als "IT-Berater" freiberuflich niedergelassen.</p>`,
          aufgabe: `Welche Einkunftsart erzielt Max? Welche Tom? Warum ist das relevant?`,
          hinweis: `Softwareentwicklung kann Gewerbe oder freier Beruf sein \u2013 die Abgrenzung ist gar nicht so einfach!`,
          loesung: [
            `<strong>Max (Gewerbeschein):</strong><br>Max hat Gewerbeschein → <strong>Einkünfte aus Gewerbebetrieb § 15</strong>. Er zahlt zusätzlich <strong>Gewerbesteuer</strong> (wird aber auf ESt angerechnet).`,
            `<strong>Tom (freiberuflich):</strong><br>IT-Berater/Programmierer können unter §18 fallen, wenn ihre Tätigkeit überwiegend <strong>schöpferisch-intellektuell</strong> ist. Tom → <strong>selbständige Arbeit § 18</strong> – keine GewSt!`,
            `<strong>Relevanz des Unterschieds:</strong><br>Tom spart die Gewerbesteuer! Bei §18: nur ESt. Bei §15: ESt + GewSt (auch wenn GewSt angerechnet wird, bleibt manchmal Mehrbelastung).`
          ],
          ergebnis: `Die Einordnung als Freiberufler (\u00a718) statt Gewerbebetrieb (\u00a715) spart die Gewerbesteuer und vereinfacht die Buchf\u00fchrung erheblich.`
        }
      ],

      interaktion: [
        { frage: "Nichtselbst\u00e4ndige Arbeit ist eine ...", optionen: ["Gewinneinkunftsart", "\u00dcberschusseinkunftsart", "Keine Einkunftsart", "Sondereinkunft"], richtig: 1, erklaerung: "Nr. 4 = \u00dcberschusseinkunftsart." },
        { frage: "Wie viele Einkunftsarten gibt es?", optionen: ["5", "6", "7", "8"], richtig: 2, erklaerung: "Genau 7 (\u00a72 Abs. 1 EStG)." },
        { frage: "Was sind die ersten 3 Einkunftsarten?", optionen: ["Angestellt, Kapital, V&V", "Land/Forst, Gewerbe, Selbst\u00e4ndig", "Gewerbe, Angestellt, V&V", "Kapital, Sonstige, V&V"], richtig: 1, erklaerung: "1. Land/Forst, 2. Gewerbe, 3. Selbst\u00e4ndig = Gewinneinkunftsarten." },
        { frage: "Gewinn berechnet man durch ...", optionen: ["Einnahmen \u2013 Werbungskosten", "Betriebseinnahmen \u2013 Betriebsausgaben", "Umsatz \u2013 Steuern", "Einnahmen \u2013 Ausgaben \u2013 Steuern"], richtig: 1, erklaerung: "Gewinn = Betriebseinnahmen \u2013 Betriebsausgaben." },
        { frage: "Was passiert wenn Einkommen in keine der 7 Arten passt?", optionen: ["Es wird trotzdem besteuert", "Es ist nicht steuerbar", "Es wird gesch\u00e4tzt", "Es z\u00e4hlt als Sonstige"], richtig: 1, erklaerung: "Nicht steuerbar! Nur was in die 7 Arten f\u00e4llt, wird besteuert." }
      ]
    },
    {
      titel: "\u{1F3ED} Eink\u00fcnfte aus Gewerbebetrieb (\u00a715 EStG)",
      inhalt: `<p><strong>4 Voraussetzungen</strong> (alle gleichzeitig!):</p>
<ol>
  <li><strong>Selbst\u00e4ndigkeit</strong> \u2013 eigene Rechnung und Gefahr</li>
  <li><strong>Nachhaltigkeit</strong> \u2013 wiederholte T\u00e4tigkeit</li>
  <li><strong><span class="term" data-label="Gewinnerzielungsabsicht" data-def="Subjektive Absicht, auf Dauer Gewinne zu erzielen. Fehlt sie, liegt steuerlich irrelevante Liebhaberei vor.">Gewinnerzielungsabsicht</span></strong> \u2013 keine Liebhaberei</li>
  <li><strong>Beteiligung am wirtschaftlichen Verkehr</strong></li>
</ol>
<p>Dazu: <strong>Kein</strong> Land/Forst und <strong>keine</strong> freiberufliche T\u00e4tigkeit.</p>`,
      beispiel: `Hobby-Maler verkauft regelm\u00e4\u00dfig Bilder = Gewerbe. Malt nur f\u00fcr sich = kein Gewerbe.`,
      schritte: [
        {
          titel: "Schritt 1: Die 4 Voraussetzungen",
          inhalt: `<p>Ein Gewerbebetrieb liegt vor, wenn <strong>alle 4 Merkmale gleichzeitig</strong> erf\u00fcllt sind:</p>
<p>1\ufe0f\u20e3 <strong>Selbst\u00e4ndigkeit</strong> \u2013 eigene Rechnung und Gefahr (kein Angestellter!)<br>
2\ufe0f\u20e3 <strong>Nachhaltigkeit</strong> \u2013 wiederholte T\u00e4tigkeit (kein einmaliger Verkauf)<br>
3\ufe0f\u20e3 <strong>Gewinnerzielungsabsicht</strong> \u2013 kein Hobby/Liebhaberei<br>
4\ufe0f\u20e3 <strong>Beteiligung am wirtschaftlichen Verkehr</strong> \u2013 \u00f6ffentliches Angebot</p>`
        },
        {
          titel: "Schritt 2: Negativabgrenzung",
          inhalt: `<p>Zus\u00e4tzlich darf es sich NICHT um folgende T\u00e4tigkeiten handeln:</p>
<p>\u274c <strong>Land- und Forstwirtschaft</strong> (\u00a713 EStG)<br>
\u274c <strong>Selbst\u00e4ndige Arbeit</strong> (\u00a718 EStG) = Freie Berufe (Arzt, Anwalt, Steuerberater, Lehrer, K\u00fcnstler)</p>
<div class="def-box"><div class="def-label">Abgrenzung Selbst\u00e4ndige Arbeit</div>
Freie Berufe = \u00fcberwiegend pers\u00f6nliche Leistung + besondere Qualifikation \u2192 kein Gewerbe, keine GewSt!</div>`
        },
        {
          titel: "Schritt 3: Liebhaberei abgrenzen",
          inhalt: `<p>Liebhaberei = fehlendes Merkmal "Gewinnerzielungsabsicht"</p>
<table class="erk-table">
  <tr><th></th><th>Gewerbebetrieb</th><th>Liebhaberei</th></tr>
  <tr><td><strong>Ziel</strong></td><td>Gewinn erzielen</td><td>Spa\u00df haben</td></tr>
  <tr><td><strong>Verluste</strong></td><td>Steuerlich abzugsf\u00e4hig</td><td>Nicht abzugsf\u00e4hig</td></tr>
  <tr><td><strong>Beispiel</strong></td><td>Professioneller Kunsth\u00e4ndler</td><td>Hobby-Maler der gelegentlich Bilder verkauft</td></tr>
</table>`
        },
        {
          titel: "Schritt 4: Steuerliche Folgen",
          inhalt: `<p>Wenn Gewerbebetrieb: <strong>Doppelbelastung</strong> mit Ertragsteuern:</p>
<p>\ud83d\udccd <strong>Gewerbesteuer</strong> (GewSt): direkt auf den Gewerbeertrag<br>
\ud83d\udccd <strong>Einkommensteuer</strong> (ESt): auf den Gewinn beim Unternehmer</p>
<p>Entlastung: Die GewSt wird auf die ESt <strong>angerechnet</strong> (Gewerbesteuermessbetrag \u00d7 3,8 = Anrechnungsbetrag).</p>
<div class="def-box"><div class="def-label">Merkformel</div>
Gewerbebetrieb = 4 positive Merkmale + keine Land/Forst + kein Freiberuf</div>`
        }
      ],

      interaktion: [
        { frage: "Was fehlt bei Liebhaberei?", optionen: ["Selbst\u00e4ndigkeit", "Nachhaltigkeit", "Gewinnerzielungsabsicht", "Beteiligung am Verkehr"], richtig: 2, erklaerung: "Liebhaberei = keine Gewinnerzielungsabsicht." },
        { frage: "Wie viele Voraussetzungen f\u00fcr Gewerbebetrieb?", optionen: ["2", "3", "4", "5"], richtig: 2, erklaerung: "4 Voraussetzungen m\u00fcssen gleichzeitig erf\u00fcllt sein." },
        { frage: "Ein Arzt mit eigener Praxis ist ...", optionen: ["Gewerbetreibender", "Freiberufler", "Angestellter", "Landwirt"], richtig: 1, erklaerung: "\u00c4rzte = freiberufliche T\u00e4tigkeit (\u00a718 EStG), nicht Gewerbe." },
        { frage: "Ist Handelsregistereintrag eine Voraussetzung?", optionen: ["Ja, immer", "Nein", "Nur bei GmbH", "Nur bei OHG"], richtig: 1, erklaerung: "Nein! Die 4 Merkmale z\u00e4hlen, nicht die formale Registrierung." },
        { frage: "'Nachhaltigkeit' bedeutet ...", optionen: ["Umweltschutz", "Wiederholte T\u00e4tigkeit mit Wiederholungsabsicht", "Langfristige Planung", "Dauerhafte Anstellung"], richtig: 1, erklaerung: "Nachhaltig = wiederholte T\u00e4tigkeit (nicht im \u00f6kologischen Sinne!)." }
      ]
    },
    {
      titel: "\u{1F4C9} Verlustverrechnung",
      inhalt: `<table class="erk-table">
  <tr><th>Art</th><th>Was</th><th>Beispiel</th></tr>
  <tr><td><strong>Horizontal</strong></td><td>Gleiche Einkunftsart</td><td>Verlust Gewerbe A + Gewinn Gewerbe B</td></tr>
  <tr><td><strong>Vertikal</strong></td><td>Andere Einkunftsart</td><td>Verlust V&V + Gewinn Gehalt</td></tr>
</table>
<p>Falls nicht verrechenbar: <strong><span class="term" data-label="Verlustr\u00fccktrag" data-def="Verluste k\u00f6nnen ins Vorjahr zur\u00fcckgetragen werden (max. 1 Jahr, max. 10 Mio. \u20ac).">R\u00fccktrag</span></strong> (1 Jahr) oder <strong><span class="term" data-label="Verlustvortrag" data-def="Nicht verrechenbare Verluste werden auf k\u00fcnftige Jahre vorgetragen (unbegrenzt, aber Mindestbesteuerung).">Vortrag</span></strong> (unbegrenzt, bis 1 Mio. voll, dar\u00fcber 60%).</p>`,
      merke: `Horizontal = gleiche Art. Vertikal = andere Art. R\u00fccktrag: 1 Jahr. Vortrag: unbegrenzt.`,
      schritte: [
        {
          titel: "Schritt 1: Warum Verlustverrechnung?",
          inhalt: `<p>Ein Unternehmer macht manchmal Verluste. Das Steuerrecht erlaubt, diese Verluste gegen Gewinne zu verrechnen.</p>
<p>Zwei Arten der Verrechnung:</p>
<div class="def-box"><div class="def-label">Horizontaler Ausgleich</div>
Verlust und Gewinn in der <strong>gleichen Einkunftsart</strong>.<br>Beispiel: 2 Gewerbebetriebe \u2013 einer macht Verlust, einer Gewinn.</div>
<div class="def-box"><div class="def-label">Vertikaler Ausgleich</div>
Verlust aus einer Einkunftsart wird mit Gewinn einer <strong>anderen Einkunftsart</strong> verrechnet.</div>`
        },
        {
          titel: "Schritt 2: Die Reihenfolge der Verlustverrechnung",
          inhalt: `<p>Verluste werden in dieser Reihenfolge verrechnet:</p>
<p>1. <strong>Horizontal</strong>: gleiche Einkunftsart (automatisch, immer m\u00f6glich)<br>
2. <strong>Vertikal</strong>: andere Einkunftsart (mit Einschr\u00e4nkungen!)<br>
3. <strong>Verlustr\u00fccktrag</strong>: 1 Jahr zur\u00fcck (max. 10 Mio. \u20ac)<br>
4. <strong>Verlustvortrag</strong>: beliebig viele Jahre vor (max. 60% des Gesamtbetrags)</p>`
        },
        {
          titel: "Schritt 3: Mindestbesteuerung beim Vortrag",
          inhalt: `<p>Beim Verlustvortrag gibt es eine Begrenzung (Mindestbesteuerung):</p>
<table class="erk-table">
  <tr><th>Gewinn</th><th>Maximaler Verlustabzug</th></tr>
  <tr><td>Bis 1.000.000 \u20ac</td><td>100% des Verlustes</td></tr>
  <tr><td>\u00dcber 1.000.000 \u20ac</td><td>1.000.000 \u20ac + 60% des \u00fcbersteigenden Betrags</td></tr>
</table>
<div class="def-box"><div class="def-label">Beispiel</div>
Gewinn 3.000.000 \u20ac, Verlustvortrag 2.500.000 \u20ac<br>
Abzug: 1.000.000 + 60% \u00d7 2.000.000 = 1.000.000 + 1.200.000 = 2.200.000 \u20ac<br>
Restlich zu versteuern: 3.000.000 - 2.200.000 = 800.000 \u20ac</div>`
        },
        {
          titel: "Schritt 4: Sonderregel Kapitalverm\u00f6gen",
          inhalt: `<p>Achtung: F\u00fcr Kapitalverm\u00f6gen (\u00a720 EStG) gibt es eine <strong>Verlustverrechnungsbeschr\u00e4nkung</strong>:</p>
<p>\ud83d\udd34 Verluste aus Kapitalverm\u00f6gen k\u00f6nnen nur mit <strong>Gewinnen aus Kapitalverm\u00f6gen</strong> verrechnet werden (kein vertikaler Ausgleich!).<br>
\ud83d\udd34 Aktienverkaufsverluste nur mit Aktiengewinnen verrechenbar.</p>
<div class="def-box"><div class="def-label">Merke</div>
Kapitalverluste = "gefangen" im Topf Kapitalverm\u00f6gen. Kein Ausgleich mit anderen Einkunftsarten!</div>`
        }
      ],

      fallbeispiele: [
        {
          titel: "Fall 1: Verlustausgleich verstehen",
          situation: `<p>Sandra hat folgende Einkommen im Jahr 2024:</p>
<p>- Gehalt (Angestellte): <strong>50.000 \u20ac</strong><br>
- Mieteinnahmen: <strong>15.000 \u20ac</strong><br>
- Werbungskosten Vermietung: <strong>20.000 \u20ac</strong> (Renovierung!)<br>
- Aktienverkauf: <strong>\u2212 3.000 \u20ac</strong> (Verlust)</p>`,
          aufgabe: `Wie kann Sandra ihre Verluste ausgleichen? Wie hoch ist ihr zu versteuerndes Einkommen?`,
          hinweis: `Mieteinnahmen - Werbungskosten = Verlust V&V. Aktienverkaufsverlust hat eine Sonderregel.`,
          loesung: [
            `<strong>Einkunftsermittlung:</strong><br>V&V: 15.000 - 20.000 = <strong>-5.000 €</strong> (Verlust!)<br>Nichtselbständig: <strong>+50.000 €</strong><br>Aktienverkauf: <strong>-3.000 €</strong>`,
            `<strong>Vertikaler Verlustausgleich:</strong><br>V&V-Verlust (-5.000 €) kann mit Gehalt (50.000 €) verrechnet werden → vertikaler Ausgleich erlaubt!<br>Ergebnis: 50.000 - 5.000 = <strong>45.000 €</strong>`,
            `<strong>Aktienverkaufsverlust:</strong><br><strong>Achtung:</strong> Aktienverkaufsverluste können <strong>nicht</strong> mit anderen Einkunftsarten verrechnet werden! Der Verlust von 3.000 € wird vorgetragen und kann nur mit künftigen Aktiengewinnen verrechnet werden.`
          ],
          ergebnis: `Sandras zvE = 45.000 \u20ac (nach V&V-Verlustausgleich). Aktienverkaufsverlust = 3.000 \u20ac Verlustvortrag f\u00fcr zuk\u00fcnftige Aktiengewinne.`
        }
      ],

      interaktion: [
        { frage: "Was ist horizontale Verlustverrechnung?", optionen: ["Zwischen Ehepartnern", "Gleiche Einkunftsart", "Ins Vorjahr", "Andere Einkunftsart"], richtig: 1, erklaerung: "Horizontal = innerhalb derselben Einkunftsart." },
        { frage: "Verlustr\u00fccktrag geht wie weit zur\u00fcck?", optionen: ["Gar nicht", "1 Jahr", "2 Jahre", "Unbegrenzt"], richtig: 1, erklaerung: "\u00a710d Abs. 1 EStG: 1 Jahr." },
        { frage: "Verlustvortrag ist zeitlich ...", optionen: ["Auf 5 Jahre begrenzt", "Auf 10 Jahre begrenzt", "Unbegrenzt", "Nicht m\u00f6glich"], richtig: 2, erklaerung: "Vortrag: unbegrenzt (bis 1 Mio. voll, dar\u00fcber 60%)." },
        { frage: "Vertikale Verrechnung bedeutet ...", optionen: ["Gleiche Einkunftsart", "Verschiedene Einkunftsarten", "Zwischen Jahren", "Zwischen L\u00e4ndern"], richtig: 1, erklaerung: "Vertikal = verschiedene Einkunftsarten." },
        { frage: "Verluste aus Kapitalverm\u00f6gen k\u00f6nnen vertikal verrechnet werden?", optionen: ["Ja, immer", "Nein, nur horizontal", "Nur mit Gewerbeeink\u00fcnften", "Nur mit Gehalt"], richtig: 1, erklaerung: "Kapitalverluste k\u00f6nnen grunds\u00e4tzlich nur mit Kapitalgewinnen verrechnet werden." }
      ]
    },
    {
      titel: "\u{1F4C4} Veranlagungsarten",
      inhalt: `<table class="erk-table">
  <tr><th>Art</th><th>Wer</th><th>Tarif</th></tr>
  <tr><td><strong>Einzelveranlagung</strong></td><td>Ledige / Wahl</td><td>Grundtarif</td></tr>
  <tr><td><strong>Zusammenveranlagung</strong></td><td>Ehepaare</td><td>Splittingtarif</td></tr>
</table>
<p>Grenzsteuersatz: 0% (bis 12.096\u20ac) \u2192 14% \u2192 progressiv \u2192 42% (ab 68.430\u20ac) \u2192 45% (ab 277.826\u20ac)</p>`,
      merke: `Splittingvorteil = am gr\u00f6\u00dften bei <strong>unterschiedlichen</strong> Einkommen der Partner.`,
      schritte: [
        {
          titel: "Schritt 1: Was ist Veranlagung?",
          inhalt: `<p><strong>Veranlagung</strong> = das Verfahren, bei dem das Finanzamt die Steuerpflicht einer Person f\u00fcr einen bestimmten Zeitraum feststellt und einen Steuerbescheid erteilt.</p>
<p>Jede nat\u00fcrliche Person wird <strong>einzeln</strong> veranlagt \u2013 au\u00dfer wenn sie w\u00e4hlt:</p>
<div class="def-box"><div class="def-label">Ehepaare k\u00f6nnen w\u00e4hlen</div>
Einzelveranlagung (Grundtarif) oder Zusammenveranlagung (Splittingtarif)</div>`
        },
        {
          titel: "Schritt 2: Grundtarif vs. Splittingtarif",
          inhalt: `<table class="erk-table">
  <tr><th></th><th>Einzelveranlagung</th><th>Zusammenveranlagung</th></tr>
  <tr><td><strong>Wer</strong></td><td>Ledige, Wahl</td><td>Ehepaare/eingetragene Lebenspartner</td></tr>
  <tr><td><strong>Tarif</strong></td><td>Grundtarif</td><td>Splittingtarif</td></tr>
  <tr><td><strong>Berechnung</strong></td><td>Pers\u00f6nliches zvE</td><td>Gemeinsames zvE / 2 \u2192 Steuer \u00d7 2</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Wie funktioniert der Splittingtarif?",
          inhalt: `<p>Beim Splittingverfahren wird das gemeinsame Einkommen "gesplittet":</p>
<p>1. Gemeinsames zvE berechnen<br>
2. Durch 2 teilen<br>
3. ESt f\u00fcr diesen Betrag berechnen<br>
4. ESt \u00d7 2 = gemeinsame Steuerschuld</p>
<div class="def-box"><div class="def-label">Beispiel</div>
Partner A: 80.000 \u20ac, Partner B: 0 \u20ac<br>
Ohne Splitting: ESt auf 80.000 \u20ac = ca. 24.000 \u20ac<br>
Mit Splitting: ESt auf 40.000 \u20ac \u00d7 2 = ca. 17.000 \u20ac<br>
Vorteil: ca. 7.000 \u20ac weniger Steuer!</div>`
        },
        {
          titel: "Schritt 4: Wann lohnt sich Zusammenveranlagung?",
          inhalt: `<p>Der Splittingvorteil ist umso gr\u00f6\u00dfer, je <strong>unterschiedlicher</strong> die Einkommen der Partner sind:</p>
<table class="erk-table">
  <tr><th>Situation</th><th>Splittingvorteil</th></tr>
  <tr><td>A: 100.000 \u20ac, B: 0 \u20ac</td><td>Maximal (Alleinverdiener)</td></tr>
  <tr><td>A: 60.000 \u20ac, B: 40.000 \u20ac</td><td>Gering</td></tr>
  <tr><td>A: 50.000 \u20ac, B: 50.000 \u20ac</td><td>Kein Vorteil (gleiche Einkommen)</td></tr>
</table>
<p>\u2192 Zusammenveranlagung ist fast immer sinnvoll, au\u00dfer bei v\u00f6llig gleichen Einkommen.</p>`
        }
      ],

      interaktion: [
        { frage: "Wann ist der Splittingvorteil am gr\u00f6\u00dften?", optionen: ["Beide gleich viel", "Beide wenig", "Einer viel, einer wenig", "Beide \u00fcber 277.826\u20ac"], richtig: 2, erklaerung: "Progressiver Tarif \u2192 gr\u00f6\u00dfter Vorteil bei stark unterschiedlichen Einkommen." },
        { frage: "Grundfreibetrag 2025?", optionen: ["10.000\u20ac", "11.604\u20ac", "12.096\u20ac", "15.000\u20ac"], richtig: 2, erklaerung: "12.096\u20ac \u2013 bis dahin 0% Steuern." },
        { frage: "Ab wann gilt der Spitzensteuersatz 42%?", optionen: ["12.096\u20ac", "45.000\u20ac", "68.430\u20ac", "277.826\u20ac"], richtig: 2, erklaerung: "42% ab 68.430\u20ac. 45% (Reichensteuer) ab 277.826\u20ac." },
        { frage: "Zusammenveranlagung nutzt welchen Tarif?", optionen: ["Grundtarif", "Splittingtarif", "Pauschaltarif", "Sondertarif"], richtig: 1, erklaerung: "Zusammenveranlagung = Splittingtarif." },
        { frage: "Der Eingangssteuersatz betr\u00e4gt ...", optionen: ["0%", "14%", "25%", "42%"], richtig: 1, erklaerung: "Nach dem Grundfreibetrag startet der Tarif bei 14%." }
      ]
    },
    {
      titel: "\u{1F4CB} Allgemeine Charakterisierung der ESt",
      inhalt: `<p>Die Einkommensteuer hat <strong>4 wesentliche Merkmale</strong>:</p>
<table class="erk-table">
  <tr><th>Merkmal</th><th>Bedeutung</th><th>Rechtsgrundlage</th></tr>
  <tr><td><strong>Personensteuer</strong></td><td>Pers\u00f6nliche Verh\u00e4ltnisse z\u00e4hlen (Familienstand, Kinder, Leistungsf\u00e4higkeit)</td><td>\u00a72 EStG</td></tr>
  <tr><td><strong>Ertragsteuer</strong></td><td>Bemessungsgrundlage = zu versteuerndes Einkommen</td><td>\u00a72 Abs. 5 EStG</td></tr>
  <tr><td><strong>Gemeinschaftsteuer</strong></td><td>Aufkommen geteilt: Bund, L\u00e4nder, Gemeinden</td><td>Art. 106 Abs. 3, 5 GG</td></tr>
  <tr><td><strong>Jahressteuer</strong></td><td>Veranlagungszeitraum = Kalenderjahr</td><td>\u00a72 Abs. 7, \u00a725 Abs. 1 EStG</td></tr>
</table>
<div class="def-box"><div class="def-label">Rechtsgrundlagen der ESt</div>
Gesetze: <strong>EStG, EStDV, LStDV</strong><br>
Hinweise/Richtlinien: EStR, EStH, LStR, LStH</div>`,
      merke: `ESt = Personensteuer + Ertragsteuer + Gemeinschaftsteuer + Jahressteuer`,
      schritte: [
        {
          titel: "Schritt 1: Personensteuer",
          inhalt: `<p>Die ESt ist eine <strong>Personensteuer</strong>: Die pers\u00f6nlichen Verh\u00e4ltnisse des Steuerpflichtigen bestimmen die H\u00f6he der Steuer.</p>
<p>Was ber\u00fccksichtigt wird:</p>
<p>\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 <strong>Familienstand</strong> (ledig, verheiratet \u2192 Splittingtarif)<br>
\ud83d\udc76 <strong>Kinder</strong> (Kinderfreibetrag, Kindergeld)<br>
\ud83d\udcb0 <strong>Leistungsf\u00e4higkeit</strong> (progressiver Tarif \u2013 mehr Einkommen = h\u00f6herer %)<br>
\ud83c\udfdb\ufe0f <strong>Lenkungsnormen</strong> (z.B. Steuerverg\u00fcnstigungen f\u00fcr Wohnungsbau)</p>`
        },
        {
          titel: "Schritt 2: Ertragsteuer + Gemeinschaftsteuer",
          inhalt: `<p><strong>Ertragsteuer</strong>: Was besteuert wird = das <strong>zu versteuernde Einkommen (zvE)</strong></p>
<p>zvE = Einkommen \u2212 Sonderausgaben \u2212 au\u00dfergew\u00f6hnliche Belastungen<br>
Rechtsgrundlage: \u00a72 Abs. 5 EStG</p>
<p><strong>Gemeinschaftsteuer</strong>: Das Aufkommen wird geteilt:</p>
<p>\ud83c\udfe6 Bund: 42,5% | \ud83c\udff0 L\u00e4nder: 42,5% | \ud83c\udfe1 Gemeinden: 15%</p>
<p>Rechtsgrundlage: Art. 106 Abs. 3, 5 GG</p>`
        },
        {
          titel: "Schritt 3: Jahressteuer + Rechtsgrundlagen",
          inhalt: `<p><strong>Jahressteuer</strong>: Die ESt wird f\u00fcr das <strong>Kalenderjahr</strong> (= Veranlagungszeitraum) ermittelt.</p>
<p>Rechtsgrundlage: \u00a72 Abs. 7 EStG i.V.m. \u00a725 Abs. 1 EStG</p>
<div class="def-box"><div class="def-label">Rechtsquellenhierarchie ESt</div>
<strong>Gesetze</strong>: EStG (Einkommensteuergesetz), EStDV (Durchf\u00fchrungsverordnung), LStDV<br>
<strong>Richtlinien/Hinweise</strong>: EStR, EStH (Einkommensteuer-Richtlinien/-Hinweise), LStR, LStH<br>
\u26a0\ufe0f Richtlinien binden nur Finanzbeh\u00f6rden, nicht Gerichte!</div>`
        },
        {
          titel: "Schritt 4: Pr\u00fcfungsschema",
          inhalt: `<p>F\u00fcr die Kl\u00e4rung ob ESt anf\u00e4llt, pr\u00fcfe systematisch:</p>
<p>1\ufe0f\u20e3 <strong>Pers\u00f6nliche Steuerpflicht</strong> (\u00a71 EStG) \u2013 wer?<br>
2\ufe0f\u20e3 <strong>Sachliche Steuerpflicht</strong> (\u00a72 EStG) \u2013 was?<br>
3\ufe0f\u20e3 <strong>Steuerbefreiungen</strong> (\u00a73 EStG) \u2013 ausgenommen?<br>
4\ufe0f\u20e3 <strong>Eink\u00fcnfteermittlung</strong> (\u00a7\u00a74-23 EStG) \u2013 wie viel?<br>
5\ufe0f\u20e3 <strong>Tarifberechnung</strong> (\u00a732a EStG) \u2013 Steuerschuld?</p>
<div class="def-box"><div class="def-label">Klausurhinweis (Prof. Mayr)</div>
\u201EDer Paragraph muss immer durchgegangen werden f\u00fcr die Kontrolle.\u201C \u2192 Jeden Pr\u00fcfungsschritt mit Paragraphen notieren!</div>`
        }
      ],
      interaktion: [
        { frage: "Was macht die ESt zu einer Personensteuer?", optionen: ["Fester Steuersatz", "Ber\u00fccksichtigung pers\u00f6nlicher Verh\u00e4ltnisse", "Nur Kapitalertr\u00e4ge", "Nur Unternehmen"], richtig: 1, erklaerung: "Personensteuer = pers\u00f6nliche Verh\u00e4ltnisse (Familie, Kinder, Einkommen) beeinflussen die Steuer." },
        { frage: "Veranlagungszeitraum der ESt?", optionen: ["Monat", "Quartal", "Kalenderjahr", "5 Jahre"], richtig: 2, erklaerung: "ESt ist Jahressteuer: Veranlagungszeitraum = Kalenderjahr." },
        { frage: "Welcher Anteil der ESt geht an die Gemeinden?", optionen: ["42,5%", "50%", "15%", "25%"], richtig: 2, erklaerung: "Gemeinden erhalten 15% der ESt (Gemeinschaftsteuer)." },
        { frage: "Bemessungsgrundlage der ESt?", optionen: ["Umsatz", "Zu versteuerndes Einkommen", "Betriebsverm\u00f6gen", "Jahresumsatz"], richtig: 1, erklaerung: "Ertragsteuer: Bemessungsgrundlage = zvE nach \u00a72 Abs. 5 EStG." }
      ]
    },
    {
      titel: "\u{1F9ED} Pr\u00fcfschema: Pers\u00f6nliche Steuerpflicht",
      inhalt: `<p><strong>3-Stufen-Pr\u00fcfung</strong> f\u00fcr die pers\u00f6nliche Steuerpflicht:</p>
<div class="def-box"><div class="def-label">Stufe 1: Normale unbeschr\u00e4nkte Steuerpflicht (\u00a71 Abs. 1 EStG)</div>
Nat\u00fcrliche Person + Wohnsitz (\u00a78 AO) oder gew. Aufenthalt (\u00a79 AO) in DE \u2192 unbeschr\u00e4nkt</div>
<div class="def-box"><div class="def-label">Stufe 2: Fiktive unbeschr\u00e4nkte Steuerpflicht (\u00a71 Abs. 3 EStG)</div>
Grenzpendler: nat. Person + Antrag + kein Wohnsitz in DE + inl\u00e4nd. Eink\u00fcnfte + min. 90% inl. Eink\u00fcnfte \u2192 unbeschr\u00e4nkt</div>
<div class="def-box"><div class="def-label">Stufe 3: Beschr\u00e4nkte Steuerpflicht (\u00a71 Abs. 4 EStG)</div>
Nat. Person + kein Wohnsitz/Aufenthalt in DE + inl\u00e4ndische Eink\u00fcnfte (\u00a749 EStG) \u2192 beschr\u00e4nkt</div>`,
      merke: `Pr\u00fcfung immer in Reihenfolge: \u00a71 Abs. 1 \u2192 \u00a71 Abs. 3 \u2192 \u00a71 Abs. 4 EStG. Rechenweg notieren!`,
      schritte: [
        {
          titel: "Schritt 1: Stufe 1 \u2013 Normale unbeschr\u00e4nkte Steuerpflicht (\u00a71 Abs. 1)",
          inhalt: `<p>Voraussetzungen <strong>kumulativ</strong>:</p>
<p>\u2705 Nat\u00fcrliche Person<br>
\u2705 Wohnsitz (\u00a78 AO) oder gew\u00f6hnlicher Aufenthalt (\u00a79 AO) in Deutschland</p>
<div class="def-box"><div class="def-label">Fallbeispiel 1 (Prof. Mayr)</div>
Prof. Tax hat Wohnung in Rosenheim + Zweitwohnsitz in Florenz.<br>
\u00a71 Abs. 1: nat. Person \u2713 | \u00a78 AO Wohnsitz DE \u2713 \u2192 <strong>unbeschr\u00e4nkt ESt-pflichtig</strong><br>
F\u00fcr Italien: Doppelbesteuerungsabkommen pr\u00fcfen!</div>`
        },
        {
          titel: "Schritt 2: Fallbeispiel 2 + Grenzpendler",
          inhalt: `<div class="def-box"><div class="def-label">Fallbeispiel 2</div>
Prof. Tax Wohnsitz Florenz, 8 Monate Hotel Rosenheim.<br>
\u00a71 Abs. 1: nat. Person \u2713 | \u00a78 AO kein Wohnsitz DE \u2715 | \u00a79 AO gew. Aufenthalt >6 Monate \u2713<br>
\u2192 <strong>unbeschr\u00e4nkt ESt-pflichtig</strong></div>
<p><strong>Fiktive unbeschr\u00e4nkte Steuerpflicht (\u00a71 Abs. 3)</strong> \u2013 Grenzpendlerregelung:</p>
<p>\u2705 Nat. Person + Antrag stellen + kein Wohnsitz in DE + inl\u00e4ndische Eink\u00fcnfte (\u00a749 EStG) + min. 90% inl\u00e4ndische Eink\u00fcnfte + Nachweis ausl. Beh\u00f6rde</p>`
        },
        {
          titel: "Schritt 3: Fallbeispiel 3 \u2013 Grenzpendler aus \u00d6sterreich",
          inhalt: `<div class="def-box"><div class="def-label">Fallbeispiel 3</div>
Prof. Tax Wohnung Kufstein, pendelt t\u00e4glich nach Rosenheim, nur Eink\u00fcnfte aus \u00a749 EStG.<br>
<strong>\u00a71 Abs. 1 EStG</strong>: nat. Person \u2713 | \u00a78 + 9 AO kein DE-Wohnsitz/-Aufenthalt \u2715<br>
\u21922. Schritt: <strong>\u00a71 Abs. 3 EStG</strong>: nat. Person \u2713 | Antrag \u2713 | kein DE-Wohnsitz \u2713 | inl. Eink. nach \u00a749 \u2713 | 90% inl. Eink. \u2713 | Nachweis \u2713<br>
\u2192 <strong>fiktiv unbeschr\u00e4nkt ESt-pflichtig</strong></div>`
        },
        {
          titel: "Schritt 4: Fallbeispiel 4 \u2013 Beschr\u00e4nkte Steuerpflicht",
          inhalt: `<div class="def-box"><div class="def-label">Fallbeispiel 4</div>
Prof. Tax arbeitet in Kufstein, hat Eigentumswohnung in Rosenheim (Vermietungseink\u00fcnfte).<br>
<strong>\u00a71 Abs. 1</strong>: nat. Person \u2713 | kein DE-Wohnsitz \u2715<br>
<strong>\u00a71 Abs. 3</strong>: Antrag/Nachweis \u2715 | 90%-Grenze \u2715 \u21922 nicht unbeschr\u00e4nkt<br>
<strong>\u00a71 Abs. 4</strong>: nat. Person \u2713 | kein DE-Wohnsitz \u2713 | inl. Eink. aus V&V (\u00a749 Abs. 1 Nr. 6) \u2713<br>
\u2192 <strong>beschr\u00e4nkt ESt-pflichtig</strong></div>
<div class="def-box"><div class="def-label">Klausurhinweis</div>
Rechenweg z\u00e4hlt! Immer alle Stufen notieren, auch wenn erste Stufe bereits erf\u00fcllt.</div>`
        }
      ],
      fallbeispiele: [
        {
          titel: "Fall: Wer ist wie steuerpflichtig?",
          situation: `<p>Vier F\u00e4lle aus der Vorlesung von Prof. Mayr:</p>
<p>A: Wohnsitz Rosenheim + Zweitwohnsitz Florenz<br>
B: Wohnsitz Florenz, 8 Monate Hotel Rosenheim<br>
C: Wohnsitz Kufstein, pendelt nach Rosenheim, 100% inl\u00e4ndische Eink\u00fcnfte<br>
D: Arbeitet in Kufstein, hat Mietwohnung in Rosenheim</p>`,
          aufgabe: `Wende das 3-Stufen-Pr\u00fcfschema an. Welche Steuerpflicht liegt jeweils vor?`,
          hinweis: `Starte immer mit \u00a71 Abs. 1, dann \u00a71 Abs. 3, dann \u00a71 Abs. 4. Notiere jeden Pr\u00fcfschritt!`,
          loesung: [
            `<strong>A: Wohnsitz Rosenheim + Florenz:</strong><br>§1 Abs. 1: nat. Person ✓ | §8 AO Wohnsitz DE ✓ → <strong>normale unbeschränkte Steuerpflicht</strong>`,
            `<strong>B: Wohnsitz Florenz, Hotel 8 Monate:</strong><br>§1 Abs. 1: nat. Person ✓ | §8 AO kein Wohnsitz ✗ | §9 AO gew. Aufenthalt >6 Monate ✓ → <strong>normale unbeschränkte Steuerpflicht</strong>`,
            `<strong>C: Kufstein, Grenzpendler:</strong><br>§1 Abs. 1: kein DE-Wohnsitz/-Aufenthalt ✗ | §1 Abs. 3: alle Voraussetzungen ✓ → <strong>fiktiv unbeschränkte Steuerpflicht</strong>`,
            `<strong>D: Kufstein, Mietwohnung Rosenheim:</strong><br>§1 Abs. 1: kein Wohnsitz ✗ | §1 Abs. 3: 90%-Grenze nicht erfüllt ✗ | §1 Abs. 4: inl. Eink. (§49 Abs. 1 Nr. 6) ✓ → <strong>beschränkte Steuerpflicht</strong>`
          ],
          ergebnis: `Merke: Immer in Reihenfolge pr\u00fcfen! Sobald eine Stufe erf\u00fcllt ist, ben\u00f6tigt man die n\u00e4chste nicht mehr zu pr\u00fcfen.`
        }
      ],
      interaktion: [
        { frage: "Was pr\u00fcft \u00a71 Abs. 1 EStG?", optionen: ["Beschr\u00e4nkte Steuerpflicht", "Grenzpendler", "Normale unbeschr\u00e4nkte Steuerpflicht", "Steuerbefreiung"], richtig: 2, erklaerung: "§1 Abs. 1 = normale (Inl\u00e4nder) unbeschr\u00e4nkte Steuerpflicht." },
        { frage: "Grenzpendler f\u00e4llt unter ...", optionen: ["\u00a71 Abs. 1 EStG", "\u00a71 Abs. 3 EStG", "\u00a71 Abs. 4 EStG", "\u00a749 EStG"], richtig: 1, erklaerung: "Grenzpendler = fiktive unbeschr\u00e4nkte nach \u00a71 Abs. 3 EStG." },
        { frage: "Beschr\u00e4nkte Steuerpflicht = ?", optionen: ["Wohnsitz DE, kein Auslandseinkommen", "Kein Wohnsitz DE, inl\u00e4ndische Eink\u00fcnfte", "Alle Welteinkommensteinkommen", "Freiberufler"], richtig: 1, erklaerung: "Beschr\u00e4nkte Steuerpflicht: kein Wohnsitz in DE, aber inl\u00e4ndische Eink\u00fcnfte (\u00a749 EStG)." },
        { frage: "In welcher Reihenfolge pr\u00fcft man?", optionen: ["Abs. 3 \u2192 1 \u2192 4", "Abs. 1 \u2192 3 \u2192 4", "Abs. 4 \u2192 1 \u2192 3", "Beliebig"], richtig: 1, erklaerung: "Immer: Abs. 1 (normal) \u2192 Abs. 3 (fiktiv) \u2192 Abs. 4 (beschr\u00e4nkt)." }
      ]
    },
    {
      titel: "\u{1F6AB} Steuerbefreiungen & Progressionsvorbehalt",
      inhalt: `<p><strong>Steuerbefreiungen (\u00a73 EStG)</strong>: Best. Einnahmen sind von der ESt ausgenommen.</p>
<table class="erk-table">
  <tr><th>Norm</th><th>Befreit</th></tr>
  <tr><td>\u00a73 Nr. 1</td><td>Leistungen Kranken-, Pflege-, gesetzliche Unfallversicherung</td></tr>
  <tr><td>\u00a73 Nr. 2</td><td>Arbeitslosengeld</td></tr>
  <tr><td>\u00a73 Nr. 11c</td><td>Inflationsausgleich</td></tr>
  <tr><td>\u00a73 Nr. 15</td><td>AG-Zusch\u00fcsse zum \u00d6PNV</td></tr>
  <tr><td>\u00a73 Nr. 26/26a</td><td>\u00dcbungsleiter / Ehrenamt</td></tr>
  <tr><td>\u00a73 Nr. 45</td><td>Nutzung Dienst-Handy</td></tr>
</table>
<div class="def-box"><div class="def-label">Progressionsvorbehalt \u00a732b EStG</div>
Steuerfreie Lohnersatzleistungen (Arbeitslosengeld, Elterngeld, Kurzarbeitergeld) erh\u00f6hen den <strong>Steuersatz</strong> f\u00fcr das restliche Einkommen!</div>`,
      merke: `Steuerbefreiung \u2260 steuerfrei insgesamt! Progressionsvorbehalt: die Leistung selbst ist frei, erh\u00f6ht aber den Tarif auf andere Eink\u00fcnfte.`,
      schritte: [
        {
          titel: "Schritt 1: Was sind Steuerbefreiungen?",
          inhalt: `<p>Bestimmte Einnahmen sind <strong>komplett von der ESt befreit</strong> (\u00a73 EStG mit 73 Nummern!).</p>
<p>Die wichtigsten Kategorien:</p>
<p>\ud83c\udfe5 <strong>Sozialleistungen</strong> (Kranken-, Pflegeversicherung, Arbeitslosengeld)<br>
\ud83c\udfeb <strong>AG-Leistungen</strong> (\u00d6PNV-Zuschuss, Reisekostenerstattung, Dienst-Handy)<br>
\ud83e\udd1d <strong>Ehrenamt</strong> (\u00dcbungsleiter bis 3.000 \u20ac, Ehrenamt bis 840 \u20ac)<br>
\ud83d\udcb0 <strong>Inflationsausgleich</strong> (Einmalung bis 3.000 \u20ac)</p>`
        },
        {
          titel: "Schritt 2: Progressionsvorbehalt verstehen",
          inhalt: `<p>Manche steuerfreien Leistungen unterliegen dem <strong>Progressionsvorbehalt (\u00a732b EStG)</strong>:</p>
<p>Was das bedeutet:</p>
<p>1. Die Leistung selbst bleibt <strong>steuerfrei</strong><br>
2. Sie wird aber zum Einkommen <strong>hinzugerechnet</strong>, um den Steuersatz zu bestimmen<br>
3. Dieser h\u00f6here Satz gilt dann f\u00fcr das restliche, steuerpflichtige Einkommen</p>
<div class="def-box"><div class="def-label">Betroffene Leistungen</div>
Arbeitslosengeld, Krankengeld, Mutterschaftsgeld, Elterngeld, <strong>Kurzarbeitergeld</strong></div>`
        },
        {
          titel: "Schritt 3: Beispiel Progressionsvorbehalt",
          inhalt: `<p>Beispiel (aus Vorlesungsfolien): 30.000 \u20ac regul\u00e4res Einkommen + 5.000 \u20ac Arbeitslosengeld</p>
<table class="erk-table">
  <tr><th></th><th>Ohne Progressionsvorbehalt</th><th>Mit Progressionsvorbehalt</th></tr>
  <tr><td><strong>Basis f\u00fcr Steuersatz</strong></td><td>30.000 \u20ac</td><td>35.000 \u20ac (30.000 + 5.000)</td></tr>
  <tr><td><strong>Steuersatz daraus</strong></td><td>niedriger</td><td>h\u00f6her</td></tr>
  <tr><td><strong>Besteuert wird</strong></td><td>30.000 \u20ac</td><td>30.000 \u20ac (ALG bleibt frei)</td></tr>
</table>
<p>\u2192 Ergebnis: Nachzahlung, weil h\u00f6herer Tarif auf 30.000 \u20ac angewendet wird!</p>`
        },
        {
          titel: "Schritt 4: Pflichtveranlagung durch Progressionsvorbehalt",
          inhalt: `<p>Wichtige Konsequenz:</p>
<p>Wer mehr als <strong>410 \u20ac</strong> Progressionseink\u00fcnfte hat (\u00a746 Abs. 2 Nr. 1 EStG) \u2192 <strong>Pflichtveranlagung!</strong></p>
<p>D.h. du musst eine Steuererkl\u00e4rung abgeben, auch wenn du sonst nur Arbeitnehmer w\u00e4rst.</p>
<div class="def-box"><div class="def-label">Klausurtipp</div>
Progressionsvorbehalt taucht oft als Fangfrage auf: "Arbeitslosengeld ist steuerfrei, also keine Steuern?" NEIN \u2013 es erh\u00f6ht den Steuersatz auf andere Eink\u00fcnfte!</div>`
        }
      ],
      interaktion: [
        { frage: "Was macht der Progressionsvorbehalt?", optionen: ["Macht ALG steuerpflichtig", "Erh\u00f6ht den Steuersatz auf andere Eink\u00fcnfte", "Befreit von der Steuer", "Senkt die Steuerlast"], richtig: 1, erklaerung: "Progressionsvorbehalt: steuerfreie Leistungen erh\u00f6hen den Tarif f\u00fcr das restliche Einkommen." },
        { frage: "Ab wann Pflichtveranlagung bei Progressionseink\u00fcnften?", optionen: ["Ab 1 \u20ac", "Ab 410 \u20ac", "Ab 1.000 \u20ac", "Immer"], richtig: 1, erklaerung: "\u00a746 Abs. 2 Nr. 1 EStG: Progressionseink\u00fcnfte >410 \u20ac \u2192 Pflichtveranlagung." },
        { frage: "Welche Leistung ist steuerbefreit?", optionen: ["Arbeitslohn", "Kurzarbeitergeld", "Mieteink\u00fcnfte", "Dividenden"], richtig: 1, erklaerung: "Kurzarbeitergeld ist nach \u00a73 EStG steuerfrei (aber unterliegt Progressionsvorbehalt!)." },
        { frage: "Unterliegt das Ehrenamts-Freibetrag dem Progressionsvorbehalt?", optionen: ["Ja", "Nein", "Nur \u00fcber 840 \u20ac", "Nur bei Selbst\u00e4ndigen"], richtig: 1, erklaerung: "Steuerbefreiungen nach \u00a73 Nr. 26/26a EStG (Ehrenamt) unterliegen NICHT dem Progressionsvorbehalt." }
      ]
    },
    {
      titel: "\u{1F4DD} Gewinnermittlung: BVV & E\u00dcR",
      inhalt: `<p>F\u00fcr Gewinneinkunftsarten gibt es zwei Ermittlungsmethoden:</p>
<table class="erk-table">
  <tr><th>Methode</th><th>Grundlage</th><th>F\u00fcr wen?</th></tr>
  <tr><td><strong>Betriebsverm\u00f6gensvergleich (BVV)</strong></td><td>Steuerbilanz (\u00a74 Abs. 1 EStG)</td><td>Buchf\u00fchrungspflichtige</td></tr>
  <tr><td><strong>E\u00dcR (\u00a74 Abs. 3 EStG)</strong></td><td>Einnahmen \u2212 Ausgaben</td><td>Befreiung Buchf\u00fchrung (\u00a7241a HGB)</td></tr>
</table>
<div class="def-box"><div class="def-label">Ma\u00dfgeblichkeitsprinzip</div>
Die <strong>Handelsbilanz</strong> ist Ausgangspunkt f\u00fcr die Steuerbilanz \u2013 Handelsbilanzan\u00e4tze werden \u00fcbernommen, soweit keine steuerlichen Abweichungen bestehen.</div>`,
      merke: `BVV = Bilanzmethode. E\u00dcR = vereinfacht: Einnahmen - Ausgaben. Ma\u00dfgeblichkeit: HB \u2192 StB.`,
      schritte: [
        {
          titel: "Schritt 1: Betriebsverm\u00f6gensvergleich (BVV)",
          inhalt: `<p>Grundformel: <strong>Gewinn = BV Ende \u2212 BV Anfang + Entnahmen \u2212 Einlagen</strong></p>
<p>Das Betriebsverm\u00f6gen ergibt sich aus der Steuerbilanz, die aus der Handelsbilanz abgeleitet wird.</p>
<div class="def-box"><div class="def-label">Ma\u00dfgeblichkeitsprinzip</div>
Handelsbilanzans\u00e4tze \u00fcbernehmen (Grund + H\u00f6he), au\u00dfer wenn steuerliche Vorschriften Abweichungen gebieten oder Wahlrechte bestehen.</div>`
        },
        {
          titel: "Schritt 2: Abweichungen HB / Steuerbilanz",
          inhalt: `<p>Diese Positionen weichen Handelsbilanz \u2194 Steuerbilanz ab:</p>
<table class="erk-table">
  <tr><th>Position</th><th>Handelsbilanz</th><th>Steuerbilanz</th></tr>
  <tr><td>Reinvestitionsr\u00fccklagen</td><td>Nicht m\u00f6glich</td><td>Steuerlich zul\u00e4ssig</td></tr>
  <tr><td>Drohverlustr\u00fcckstellungen</td><td>Zul\u00e4ssig</td><td>Steuerlich <strong>nicht</strong> zul\u00e4ssig</td></tr>
  <tr><td>AfA-Tabellen</td><td>HGB-AfA</td><td>Steuerliche AfA-Tabellen</td></tr>
  <tr><td>PensionsRSt</td><td>Handelsbilanzberechnung</td><td>Eigene steuerliche Berechnung</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Nicht abziehbare Betriebsausgaben (\u00a74 Abs. 5 EStG)",
          inhalt: `<p>Bestimmte Betriebsausgaben d\u00fcrfen den Gewinn steuerlich <strong>nicht mindern</strong>:</p>
<p>\ud83d\uded2 <strong>Geschenke an Gesch\u00e4ftspartner</strong> \u00fcber 50 \u20ac p.a. pro Person<br>
\ud83c\udfaf <strong>Jagd, Fischerei, Yachten</strong> \u2013 vollst\u00e4ndig nicht abziehbar<br>
\ud83c\udf7d\ufe0f <strong>Gesch\u00e4ftsessen</strong>: nur 70% abziehbar (wenn angemessen)<br>
\u26d4 <strong>Geldstrafen/Bu\u00dfgelder</strong> \u2013 nicht abziehbar<br>
\u274c <strong>Bestechungs- und Schmiergelder</strong> \u2013 nicht abziehbar</p>`
        },
        {
          titel: "Schritt 4: E\u00dcR als Alternative",
          inhalt: `<p>Die <strong>Einnahmen-\u00dcberschuss-Rechnung (E\u00dcR)</strong> ist eine vereinfachte Methode:</p>
<p>Grundformel: <strong>Gewinn = Einnahmen \u2212 Ausgaben</strong></p>
<p>Prinzip: <strong>Zufluss- und Abflussprinzip</strong> (\u00a711 EStG) \u2013 Einnahmen/Ausgaben im Jahr der Zahlung</p>
<p>Ausnahmen:</p>
<p>\ud83d\udd01 <strong>10-Tages-Fiktion</strong>: Regelm\u00e4\u00dfig wiederkehrende Zahlung kurz vor/nach Jahreswechsel \u2192 z\u00e4hlt zum Vorjahr<br>
\ud83d\udcbc <strong>AfA</strong> bei abnutzbarem Anlagegut: nicht Zahlungszeitpunkt, sondern Nutzungsdauer ma\u00dfgeblich</p>`
        }
      ],
      interaktion: [
        { frage: "Grundlage des Ma\u00dfgeblichkeitsprinzips?", optionen: ["Steuerbilanz f\u00fchrt", "Handelsbilanz ist Ausgangspunkt f\u00fcr Steuerbilanz", "E\u00dcR ist Pflicht", "Beide unabh\u00e4ngig"], richtig: 1, erklaerung: "Ma\u00dfgeblichkeit: HB-Ansatz gilt grunds\u00e4tzlich auch f\u00fcr die Steuerbilanz." },
        { frage: "Drohverlustr\u00fcckstellungen in der Steuerbilanz?", optionen: ["Immer zul\u00e4ssig", "Nicht zul\u00e4ssig", "Nur \u00fcber 10.000 \u20ac", "Nur bei GmbH"], richtig: 1, erklaerung: "Drohverlustr\u00fcckstellungen = steuerlich nicht zul\u00e4ssig (Abweichung HB/StB)." },
        { frage: "Gesch\u00e4ftsessen: wie viel abziehbar?", optionen: ["100%", "50%", "70%", "0%"], richtig: 2, erklaerung: "Gesch\u00e4ftsessen: nur 70% abziehbar (\u00a74 Abs. 5 Nr. 2 EStG)." },
        { frage: "E\u00dcR-Prinzip?", optionen: ["Bilanzierung", "Zufluss- und Abflussprinzip", "Maschinen-Prinzip", "Leistungsprinzip"], richtig: 1, erklaerung: "E\u00dcR: Zufluss- und Abflussprinzip \u2013 Zahlung im Jahr der Buchung." }
      ]
    },
    {
      titel: "\u{1F4BC} Sonderbetriebseink\u00fcnfte",
      inhalt: `<div class="def-box"><div class="def-label">Definition</div>
Einkommen, das ein <strong>Mitunternehmer (Gesellschafter)</strong> von seiner Personengesellschaft zus\u00e4tzlich erh\u00e4lt und das in Zusammenhang mit seiner Beteiligung steht.</div>
<p>Typische <strong>Sonderbetriebseinnahmen</strong>:</p>
<p>\ud83d\udcb0 <strong>Gesellschafter-Geh\u00e4lt</strong> (Verg\u00fctung f\u00fcr T\u00e4tigkeit in der Gesellschaft)<br>
\ud83c\udfe6 <strong>Zinsen auf Gesellschafterdarlehen</strong><br>
\ud83c\udfe0 <strong>Miete/Pacht</strong> f\u00fcr \u00fcberlassene Wirtschaftsg\u00fcter</p>`,
      merke: `Sonderbetriebseink\u00fcnfte erh\u00f6hen/vermindern das steuerliche Gesamtergebnis der Gesellschaft und werden dem jeweiligen Gesellschafter zugerechnet.`,
      schritte: [
        {
          titel: "Schritt 1: Warum Sonderbetriebseink\u00fcnfte?",
          inhalt: `<p>Bei Personengesellschaften (OHG, KG) werden Gewinne auf die Gesellschafter aufgeteilt.</p>
<p>Aber: Wenn ein Gesellschafter <strong>zus\u00e4tzliche Leistungen</strong> erbringt (Darlehen, Miete, Arbeit), geh\u00f6ren diese Eink\u00fcnfte auch zu seinen <strong>Eink\u00fcnften aus Gewerbebetrieb</strong>.</p>
<div class="def-box"><div class="def-label">Logik</div>
Bei Kapitalgesellschaften w\u00e4re das ein Gehalt/Zins aus einer anderen Einkunftsart. Bei Personengesellschaften bleibt alles in \u00a715 EStG!</div>`
        },
        {
          titel: "Schritt 2: Arten von Sonderbetriebseink\u00fcnften",
          inhalt: `<table class="erk-table">
  <tr><th>Art</th><th>Beispiel</th><th>Steuerlich</th></tr>
  <tr><td><strong>Sonder-BA</strong> (Geh\u00e4lt)</td><td>G'schafter erh\u00e4lt 5.000 \u20ac/Monat Geh\u00e4lt</td><td>BA bei Gesellschaft, SBE beim Gesellschafter</td></tr>
  <tr><td><strong>Sonder-BA</strong> (Zinsen)</td><td>G'schafter leiht 100.000 \u20ac zu 2%</td><td>BA bei Gesellschaft, SBE beim Gesellschafter</td></tr>
  <tr><td><strong>Sonder-BA</strong> (Miete)</td><td>G'schafter vermietet B\u00fcro an OHG</td><td>BA bei Gesellschaft, SBE beim Gesellschafter</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Fallbeispiel 7 (Prof. Mayr)",
          inhalt: `<div class="def-box"><div class="def-label">Fallbeispiel 7</div>
Prof. Tax = 50% OHG-Gesellschafter. Hat der OHG 100.000 \u20ac Darlehen gegeben, Zinsen 2.000 \u20ac (als BA bei OHG gebucht). Handelsrechtl. OHG-Gewinn: 80.000 \u20ac (h\u00e4lftig geteilt).</div>
<p><strong>Steuerliches Ergebnis:</strong></p>
<p>OHG-Gewinn: 80.000 + 2.000 (Zinsen r\u00fcckaddieren) = <strong>82.000 \u20ac</strong><br>
Prof. Tax: 50% \u00d7 82.000 = 41.000 + 2.000 SBE = <strong>43.000 \u20ac</strong><br>
Herr Anton: 50% \u00d7 82.000 = <strong>41.000 \u20ac</strong></p>`
        },
        {
          titel: "Schritt 4: Pr\u00fcfungsschema Sonderbetriebseink\u00fcnfte",
          inhalt: `<p>Pr\u00fcfung in der Klausur:</p>
<p>1. Liegt eine Personengesellschaft vor?<br>
2. Welche Zusatzleistungen erbringt der Gesellschafter?<br>
3. Diese als BA bei der Gesellschaft rausrechnen (Hinzurechnung)<br>
4. Dem Gesellschafter als Sonderbetriebseinnahmen zurechnen</p>
<div class="def-box"><div class="def-label">Wichtig</div>
Alles bleibt Eink\u00fcnfte aus Gewerbebetrieb (\u00a715 EStG)! Die Zinsen sind beim Gesellschafter keine Kapitalertr\u00e4ge (\u00a720).</div>`
        }
      ],
      interaktion: [
        { frage: "Was sind Sonderbetriebseink\u00fcnfte?", optionen: ["Dividenden einer GmbH", "Vergabe von Darlehen an Dritte", "Zus\u00e4tzliche Verg\u00fctungen des Gesellschafters von seiner PersG", "Eink\u00fcnfte aus Kapitalverm\u00f6gen"], richtig: 2, erklaerung: "SBE = Eink\u00fcnfte des Gesellschafters aus Leistungsbeziehungen mit seiner Personengesellschaft." },
        { frage: "Gesellschafter-Zinsen bei Personengesellschaft = welche Einkunftsart?", optionen: ["\u00a720 Kapitalverm\u00f6gen", "\u00a715 Gewerbebetrieb", "\u00a721 V&V", "\u00a722 Sonstige"], richtig: 1, erklaerung: "Bei Personengesellschaft: Zinsen bleiben bei \u00a715 EStG als Sonderbetriebseinnahmen!" },
        { frage: "Was passiert mit dem Gesellschafter-Geh\u00e4lt bei der OHG?", optionen: ["Bleibt als BA", "Wird r\u00fcckaddiert + SBE beim G'schafter", "Ist steuerfrei", "Wird bei der GmbH gebucht"], richtig: 1, erklaerung: "Geh\u00e4lt = Betriebsausgabe OHG (rausrechnen) + Sonderbetriebseinnahme beim Gesellschafter." }
      ]
    },
    {
      titel: "\u{1F4B4} Ver\u00e4u\u00dferung Gewerbebetrieb (\u00a716 EStG)",
      inhalt: `<div class="def-box"><div class="def-label">Grundformel</div>
<strong>Ver\u00e4u\u00dferungsgewinn = Ver\u00e4u\u00dferungspreis \u2212 Ver\u00e4u\u00dferungskosten \u2212 Wert Betriebsverm\u00f6gen</strong></div>
<p>Steuerlich <strong>beg\u00fcnstigt</strong> nach \u00a716 Abs. 4 EStG und \u00a734 EStG!</p>`,
      merke: `Ver\u00e4u\u00dferungsgewinn \u00a716 EStG = Geh\u00f6rt zu Eink\u00fcnften aus Gewerbebetrieb, aber steuerlich beg\u00fcnstigt.`,
      schritte: [
        {
          titel: "Schritt 1: Was f\u00e4llt unter \u00a716 EStG?",
          inhalt: `<p>Beginn\u00fcnstigte Vorg\u00e4nge:</p>
<p>\ud83d\udcc4 Ver\u00e4u\u00dferung des <strong>gesamten Betriebs</strong><br>
\ud83c\udfed Ver\u00e4u\u00dferung eines <strong>Teilbetriebs</strong><br>
\ud83e\udd1d Ver\u00e4u\u00dferung eines <strong>Mitunternehmeranteils</strong> (z.B. OHG-Anteil)<br>
\ud83c\udfe2 Ver\u00e4u\u00dferung einer <strong>100%-Beteiligung an Kapitalgesellschaft</strong><br>
\ud83d\udd1a <strong>Aufgabe</strong> des Betriebs</p>`
        },
        {
          titel: "Schritt 2: Berechnung des Ver\u00e4u\u00dferungsgewinns",
          inhalt: `<p>Formel:</p>
<p>Ver\u00e4u\u00dferungspreis<br>
<strong>\u2212</strong> Ver\u00e4u\u00dferungskosten<br>
<strong>\u2212</strong> Wert des Betriebsverm\u00f6gens (nach \u00a74 Abs. 1 EStG)<br>
<strong>= Ver\u00e4u\u00dferungsgewinn</strong></p>
<div class="def-box"><div class="def-label">Fallbeispiel 8 (Folie 66)</div>
Verkaufspreis: 200.000 \u20ac | Kosten: 10.000 \u20ac | BV: 150.000 \u20ac<br>
Ver\u00e4u\u00dferungsgewinn = 200.000 \u2212 10.000 \u2212 150.000 = <strong>40.000 \u20ac</strong></div>`
        },
        {
          titel: "Schritt 3: Steuerliche Beg\u00fcnstigungen",
          inhalt: `<p>Zwei Beg\u00fcnstigungen m\u00f6glich:</p>
<p>\ud83d\udfe2 <strong>Freibetrag (\u00a716 Abs. 4 EStG)</strong>: 45.000 \u20ac, wenn mind. 55 Jahre alt oder dauerhaft berufsunf\u00e4hig<br>
\ud83d\udd35 <strong>F\u00fcnftelregelung (\u00a734 EStG)</strong>: Au\u00dfergew\u00f6hnliche Einnahme auf 5 Jahre verteilt \u2192 niedrigerer Durchschnittssteuersatz</p>
<div class="def-box"><div class="def-label">Freibetrag abschmelzen</div>
Freibetrag 45.000 \u20ac schmilzt ab, wenn Ver\u00e4u\u00dferungsgewinn >136.000 \u20ac. Ab 181.000 \u20ac = kein Freibetrag mehr.</div>`
        },
        {
          titel: "Schritt 4: Szenarien (Fallbeispiel 8)",
          inhalt: `<p>Prof. Tax (57 Jahre), ver\u00e4u\u00dfert OHG-Anteil:</p>
<table class="erk-table">
  <tr><th>Szenario</th><th>Ver\u00e4u\u00dferungsgewinn</th><th>Freibetrag</th></tr>
  <tr><td>Basis</td><td>40.000 \u20ac</td><td>45.000 \u20ac \u2192 Steuerfrei!</td></tr>
  <tr><td>2</td><td>90.000 \u20ac</td><td>45.000 \u20ac (voll)</td></tr>
  <tr><td>3</td><td>160.000 \u20ac</td><td>45.000 \u2212 (160k-136k) = 21.000 \u20ac</td></tr>
  <tr><td>4</td><td>181.000 \u20ac</td><td>0 \u20ac (abgeschmolzen)</td></tr>
</table>`
        }
      ],
      interaktion: [
        { frage: "Ver\u00e4u\u00dferungsgewinn Formel?", optionen: ["Preis \u2212 BV", "Preis \u2212 Kosten \u2212 BV", "Preis + Kosten + BV", "BV \u2212 Preis"], richtig: 1, erklaerung: "Ver\u00e4u\u00dferungsgewinn = Ver\u00e4u\u00dferungspreis \u2212 Ver\u00e4u\u00dferungskosten \u2212 Wert BV." },
        { frage: "Freibetrag nach \u00a716 Abs. 4 EStG?", optionen: ["10.000 \u20ac", "25.000 \u20ac", "45.000 \u20ac", "100.000 \u20ac"], richtig: 2, erklaerung: "Freibetrag: 45.000 \u20ac (ab 55 Jahre oder dauerhaft berufsunf\u00e4hig)." },
        { frage: "Freibetrag ab welchem Alter?", optionen: ["45 Jahre", "55 Jahre", "60 Jahre", "65 Jahre"], richtig: 1, erklaerung: "\u00a716 Abs. 4 EStG: Freibetrag gilt ab dem vollendeten 55. Lebensjahr." },
        { frage: "Ab welchem Ver\u00e4u\u00dferungsgewinn kein Freibetrag mehr?", optionen: ["100.000 \u20ac", "136.000 \u20ac", "181.000 \u20ac", "200.000 \u20ac"], richtig: 2, erklaerung: "Ab 181.000 \u20ac ist der Freibetrag vollst\u00e4ndig abgeschmolzen." }
      ]
    },
    {
      titel: "\u{1F454} Eink\u00fcnfte aus selbst\u00e4ndiger Arbeit (\u00a718 EStG)",
      inhalt: `<p>Eink\u00fcnfte aus selbst\u00e4ndiger Arbeit = <strong>freiberufliche T\u00e4tigkeit</strong> (kein Gewerbebetrieb!).</p>
<table class="erk-table">
  <tr><th>Norm</th><th>T\u00e4tigkeit</th><th>Beispiele</th></tr>
  <tr><td><strong>\u00a718 Abs. 1 Nr. 1</strong></td><td>Freie Berufe</td><td>\u00c4rzte, Anw\u00e4lte, Steuerberater, EDV-Berater, Lehrer, Schriftsteller</td></tr>
  <tr><td><strong>\u00a718 Abs. 1 Nr. 3</strong></td><td>Gelegentliche T\u00e4tigkeit</td><td>Aufsichtsrat, Testamentsvollstrecker, Verm\u00f6gensverwalter</td></tr>
</table>`,
      merke: `\u00a718 EStG = freie Berufe. Gleiche Voraussetzungen wie \u00a715, aber: kein Gewerbe \u2192 KEINE Gewerbesteuer!`,
      schritte: [
        {
          titel: "Schritt 1: Was sind freie Berufe?",
          inhalt: `<p>Freie Berufe nach \u00a718 Abs. 1 Nr. 1 EStG:</p>
<p>\ud83d\udc8a <strong>Heilberufe</strong>: \u00c4rzte, Zahn\u00e4rzte, Tier\u00e4rzte, Hebammen<br>
\u2696\ufe0f <strong>Rechtsberatung</strong>: Rechtsanw\u00e4lte, Notare, Steuerberater, Wirtschaftspr\u00fcfer<br>
\ud83d\udcbb <strong>Technisch/wissenschaftlich</strong>: Ingenieure, Architekten, EDV-Berater<br>
\ud83c\udfa8 <strong>K\u00fcnstlerisch/lehrend</strong>: K\u00fcnstler, Schriftsteller, Lehrer, Erzieher</p>
<div class="def-box"><div class="def-label">\u201c\u00c4hnliche Berufe\u201c</div>
Auch neue Berufe k\u00f6nnen freie Berufe sein, wenn sie einem Katalogberuf \u00e4hnlich sind (z.B. EDV-Berater = \u00e4hnlich Ingenieur).</div>`
        },
        {
          titel: "Schritt 2: Voraussetzungen wie \u00a715 \u2013 aber Abgrenzung",
          inhalt: `<p>Die gleichen 4 Voraussetzungen wie Gewerbebetrieb:</p>
<p>\u2705 Selbst\u00e4ndigkeit | \u2705 Nachhaltigkeit | \u2705 Gewinnerzielungsabsicht | \u2705 Beteiligung am wirtschaftl. Verkehr</p>
<p>Aber: Es darf sich <strong>nicht</strong> um einen Gewerbebetrieb handeln!</p>
<div class="def-box"><div class="def-label">Abgrenzungsproblem (EStH 15.6)</div>
Wann ist ein IT-Entwickler Freiberufler und wann Gewerbetreibender? \u2192 H\u00e4ngt davon ab, ob er <strong>\u00fcberwiegend pers\u00f6nlich und qualifiziert</strong> t\u00e4tig ist.</div>`
        },
        {
          titel: "Schritt 3: Steuerliche Konsequenzen",
          inhalt: `<p>Der entscheidende Unterschied zu \u00a715 EStG:</p>
<table class="erk-table">
  <tr><th></th><th>\u00a715 Gewerbebetrieb</th><th>\u00a718 Selbst\u00e4ndige Arbeit</th></tr>
  <tr><td><strong>Gewerbesteuer</strong></td><td>\u2757 Ja</td><td>\u2705 Nein!</td></tr>
  <tr><td><strong>IHK-Pflicht</strong></td><td>Ja</td><td>Nein</td></tr>
  <tr><td><strong>Gewinnermittlung</strong></td><td>BVV oder E\u00dcR</td><td>Freiwillig \u00a74 Abs. 1 oder E\u00dcR</td></tr>
</table>
<p>\u2192 Freiberufler sparen die Gewerbesteuer \u2013 erheblicher finanzieller Vorteil!</p>`
        },
        {
          titel: "Schritt 4: \u00a718 Abs. 1 Nr. 3 \u2013 Sonstige selbst\u00e4ndige Arbeit",
          inhalt: `<p>Neben den freien Berufen gibt es noch <strong>gelegentliche/ausnahmsweise</strong> nachhaltige T\u00e4tigkeiten:</p>
<p>\ud83d\udcbc <strong>Aufsichtsratsmitglied</strong><br>
\u2696\ufe0f <strong>Testamentsvollstrecker</strong><br>
\ud83d\udcb0 <strong>Verm\u00f6gensverwalter</strong> (nicht gewerblich)</p>
<div class="def-box"><div class="def-label">Klausurtipp</div>
Nr. 3 taucht in Klausuren oft auf: Aufsichtsrat-Verg\u00fctung = selbst\u00e4ndige Arbeit nach \u00a718 Abs. 1 Nr. 3 EStG, NICHT \u00a715!</div>`
        }
      ],
      interaktion: [
        { frage: "Freiberufler zahlt ...", optionen: ["ESt + KSt + GewSt", "Nur KSt", "ESt (kein Gewerbe!)", "Nur GewSt"], richtig: 2, erklaerung: "Freiberufler (\u00a718 EStG): nur Einkommensteuer. Keine Gewerbesteuer!" },
        { frage: "EDV-Berater f\u00e4llt unter \u00a718, weil ...", optionen: ["Immer freiberuflich", "\u00c4hnlichkeit mit Ingenieur (Katalogberuf)", "Alle IT-Berufe sind frei", "Nur wenn zugelassen"], richtig: 1, erklaerung: "EDV-Berater als '\u00e4hnlicher Beruf' zum Ingenieur nach \u00a718 Abs. 1 Nr. 1 EStG." },
        { frage: "Aufsichtsrat-Verg\u00fctung ist ...", optionen: ["\u00a715 Gewerbebetrieb", "\u00a718 Abs. 1 Nr. 3 selbst\u00e4ndige Arbeit", "\u00a719 Nichtselbst\u00e4ndige Arbeit", "\u00a720 Kapitalverm\u00f6gen"], richtig: 1, erklaerung: "Aufsichtsratsverg\u00fctung = \u00a718 Abs. 1 Nr. 3 EStG." },
        { frage: "Selbst\u00e4ndig-freiwillig: Gewinnermittlung nach \u00a718?", optionen: ["Immer Bilanz", "Immer E\u00dcR", "Freiwillig \u00a74 Abs. 1 oder E\u00dcR", "Keine Gewinnermittlung"], richtig: 2, erklaerung: "Freiberufler d\u00fcrfen freiwillig bilanzieren oder E\u00dcR verwenden." }
      ]
    }
  ],
  quiz: [
    { frage: "Unbeschr\u00e4nkte Steuerpflicht bedeutet ...", optionen: ["100% Steuern", "Welteinkommen besteuert", "Nur dt. Einkommen", "Steuerbefreiung"], richtig: 1, erklaerung: "Welteinkommen wird besteuert." },
    { frage: "Wie viele Einkunftsarten?", optionen: ["5", "6", "7", "8"], richtig: 2, erklaerung: "7 (\u00a72 Abs. 1 EStG)." },
    { frage: "Die ersten 3 Einkunftsarten sind ...", optionen: ["Kapital, V&V, Sonstige", "Land/Forst, Gewerbe, Selbst\u00e4ndig", "Angestellt, Kapital, V&V", "Gewerbe, Angestellt, V&V"], richtig: 1, erklaerung: "1. Land/Forst, 2. Gewerbe, 3. Selbst\u00e4ndig." },
    { frage: "KEINE Voraussetzung f\u00fcr Gewerbebetrieb?", optionen: ["Selbst\u00e4ndigkeit", "Nachhaltigkeit", "Handelsregistereintrag", "Gewinnerzielungsabsicht"], richtig: 2, erklaerung: "HR-Eintrag ist keine Voraussetzung." },
    { frage: "Verlustvortrag bedeutet ...", optionen: ["Ins Vorjahr", "In k\u00fcnftige Jahre", "Zwischen Ehepartnern", "Wird ignoriert"], richtig: 1, erklaerung: "Vortrag = in die Zukunft." },
    { frage: "Spitzensteuersatz 42% ab ...", optionen: ["12.096\u20ac", "45.000\u20ac", "68.430\u20ac", "277.826\u20ac"], richtig: 2, erklaerung: "42% ab 68.430\u20ac." },
    { frage: "Grundfreibetrag 2025?", optionen: ["10.000\u20ac", "11.604\u20ac", "12.096\u20ac", "15.000\u20ac"], richtig: 2, erklaerung: "12.096\u20ac." },
    { frage: "Betriebsausgaben vs. Werbungskosten?", optionen: ["Kein Unterschied", "BA bei Gewinn, WK bei \u00dcberschuss", "BA h\u00f6her", "WK nur bei Angestellten"], richtig: 1, erklaerung: "BA bei Gewinneink\u00fcnften (1-3), WK bei \u00dcberschuss (4-7)." },
    { frage: "Kapitalverluste vertikal verrechenbar?", optionen: ["Ja, immer", "Nein, nur horizontal", "Nur mit Gewerbe", "Nur mit Gehalt"], richtig: 1, erklaerung: "Kapitalverluste nur mit Kapitalgewinnen." },
    { frage: "Was ist Liebhaberei?", optionen: ["Teures Hobby", "T\u00e4tigkeit ohne Gewinnabsicht", "Spende", "Kapitalanlage <1.000\u20ac"], richtig: 1, erklaerung: "Keine Gewinnerzielungsabsicht = steuerlich irrelevant." },
    { frage: "Verlustr\u00fccktrag: wie weit zur\u00fcck?", optionen: ["Gar nicht", "1 Jahr", "2 Jahre", "Unbegrenzt"], richtig: 1, erklaerung: "1 Jahr (\u00a710d Abs. 1 EStG)." },
    { frage: "Eingangssteuersatz?", optionen: ["0%", "14%", "25%", "42%"], richtig: 1, erklaerung: "14% nach dem Grundfreibetrag." }
  ],
  lueckentext: [
    { text: "Bei unbeschr\u00e4nkter Steuerpflicht wird das ___ besteuert, bei beschr\u00e4nkter nur ___ Eink\u00fcnfte.", luecken: ["Welteinkommen", "inl\u00e4ndische"], erklaerung: "Unbeschr\u00e4nkt = Welt. Beschr\u00e4nkt = inl\u00e4ndisch." },
    { text: "Es gibt ___ Gewinneinkunftsarten und ___ \u00dcberschusseinkunftsarten.", luecken: ["3", "4"], erklaerung: "1-3 Gewinn, 4-7 \u00dcberschuss." },
    { text: "Gewerbebetrieb: Selbst\u00e4ndigkeit, ___, Gewinnerzielungsabsicht und ___.", luecken: ["Nachhaltigkeit", "Beteiligung am wirtschaftlichen Verkehr"], erklaerung: "Die 4 Voraussetzungen." },
    { text: "Horizontale Verlustverrechnung: ___ Einkunftsart. Vertikale: ___ Einkunftsart.", luecken: ["derselben", "anderer"], erklaerung: "Horizontal = gleich. Vertikal = anders." }
  ],
  zuordnung: [
    { titel: "Einkunftsarten zuordnen", paare: [
      { links: "Gewerbebetrieb", rechts: "Gewinneinkunftsart" },
      { links: "Nichtselbst\u00e4ndige Arbeit", rechts: "\u00dcberschusseinkunftsart" },
      { links: "Land- und Forstwirtschaft", rechts: "Gewinneinkunftsart" },
      { links: "Vermietung und Verpachtung", rechts: "\u00dcberschusseinkunftsart" }
    ]},
    { titel: "Verlustverrechnung zuordnen", paare: [
      { links: "Verlust Gewerbe A + Gewinn Gewerbe B", rechts: "Horizontal" },
      { links: "Verlust V&V + Gewinn Gehalt", rechts: "Vertikal" },
      { links: "Verlust ins Vorjahr", rechts: "Verlustr\u00fccktrag" },
      { links: "Verlust in k\u00fcnftige Jahre", rechts: "Verlustvortrag" }
    ]},
    { titel: "Steuerpflicht zuordnen", paare: [
      { links: "Wohnsitz in DE", rechts: "Unbeschr\u00e4nkt" },
      { links: "Kein Wohnsitz, kein Aufenthalt", rechts: "Beschr\u00e4nkt" },
      { links: "Welteinkommen", rechts: "Unbeschr\u00e4nkt" },
      { links: "Nur inl\u00e4ndische Eink\u00fcnfte", rechts: "Beschr\u00e4nkt" }
    ]}
  ]
};

// ============================================================
// WINF-SEIDLMEIER - Kapitel 1
// ============================================================
FAECHER["winf-seidlmeier"].themen["was-ist-wi"] = {
  name: "1. Was ist Wirtschaftsinformatik?",
  zusammenfassung: `<h4>1. Was ist Wirtschaftsinformatik? – Vollständige Zusammenfassung</h4>

<h5>📌 Definition und Grundverständnis</h5>
<div class="def-box"><div class="def-label">WI als Schnitt- und Zusatzmenge</div>
<strong>WI1:</strong> Wirtschaftsinformatik als Schnittmenge aus Informatik + BWL<br>
<strong>WI2:</strong> WI als Zusatzmenge – eigene Inhalte, die über INF und BWL hinausgehen (z.B. neues Wissen aus der Zusammenführung)
</div>
<div class="def-box"><div class="def-label">Merksatz (GI-Definition)</div>
Analyse, Gestaltung und Nutzung von <strong>betrieblichen Informationssystemen</strong> auf der Basis eines gemeinsamen <strong>Prozessverständnisses</strong>.
</div>
<p><em>Hintergrund: Das gemeinsame Prozessverständnis ist der „Dolmetscher" zwischen BWL und Informatik. Wirtschaftsinformatik ist eine Wissenschaft, nicht nur Praxis!</em></p>

<h5>📌 Das Grundverständnis: Strategie – Prozess – IS (nach Österle)</h5>
<table class="erk-table">
  <tr><th>Ebene</th><th>Inhalt</th><th>Verbindung</th></tr>
  <tr><td><strong>Geschäftsstrategie</strong></td><td>Unternehmensziele (z.B. Kostenführerschaft, Qualitätsführerschaft nach Porter)</td><td>Prozesse müssen der Strategie entsprechen</td></tr>
  <tr><td><strong>Prozess</strong></td><td>Zielgerichtete Durchführung betrieblicher Aufgaben in allen Funktionsbereichen</td><td>IS setzt Prozesse um</td></tr>
  <tr><td><strong>Informationssystem (IS)</strong></td><td>Datenbank, E-Mail-System, ERP – verbessert Prozessabläufe</td><td>IS leistet Erfolgsbeitrag durch Prozessunterstützung</td></tr>
</table>
<p><strong>Hauptziel der WI:</strong> Unterstützung von Unternehmensprozessen durch betriebliche IS = prozessorientierte Wirtschaftsinformatik</p>
<p><strong>Bedeutung:</strong> IS als „befähigende Technik" (enabling technology) – niemals fertig, weil sich Geschäftsbedingungen laufend ändern! Treiber: zunehmende Digitalisierung von Arbeitsplätzen, Unternehmen und Gesellschaft → attraktive Tätigkeitsfelder für BWL'er.</p>

<h5>📌 Was ist ein Prozess?</h5>
<div class="def-box"><div class="def-label">Definition Prozess</div>
Ein Prozess ist eine <strong>zielgerichtete, logisch zusammenhängende Folge von Aktivitäten</strong>, die durch ein Ereignis ausgelöst wird und ein definiertes Ergebnis erzeugt.
</div>
<p><strong>Bestandteile eines Prozesses:</strong></p>
<table class="erk-table">
  <tr><th>Bestandteil</th><th>Erklärung</th><th>Beispiel</th></tr>
  <tr><td>Startereignis</td><td>Auslöser des Prozesses – muss genau definiert sein</td><td>„Kundenbestellung eingetroffen"</td></tr>
  <tr><td>Schritte / Funktionen</td><td>Einzelne Aktivitäten, die Input zu Output verarbeiten</td><td>Prüfen, Freigeben, Versenden</td></tr>
  <tr><td>Ausführende Elemente</td><td>Personen, Stellen, Abteilungen, Anwendungssysteme</td><td>Mitarbeiter 1, Abteilung A</td></tr>
  <tr><td>Input / Output</td><td>Daten und Informationen, die ein- und ausgehen</td><td>Dokument, Datenbankeinträge</td></tr>
  <tr><td>Endereignis</td><td>Abschluss des Prozesses – muss genau definiert sein</td><td>„Lieferung bestätigt"</td></tr>
</table>
<p><em>Merke: Der Prozess selbst ist immer eine vereinfachte Abbildung der Realität = ein Modell!</em></p>

<h5>📌 Informationssysteme (IS) – Arten und Beitrag</h5>
<p><strong>IS-Arten nach Aufgabe:</strong> Operative IS (unterstützen Tagesgeschäft) · Führungs-IS / MIS (Management Information Systems) · Entscheidungsunterstützungs-IS (DSS) · Wissensmanagement-IS</p>
<p><strong>4 wirtschaftliche Ziele des IS-Einsatzes:</strong></p>
<table class="erk-table">
  <tr><th>Ziel</th><th>Beschreibung</th></tr>
  <tr><td>Kostensenkung</td><td>Effizienzsteigerung durch Automatisierung</td></tr>
  <tr><td>Qualitätssteigerung</td><td>Fehlerreduktion, konsistentere Ergebnisse</td></tr>
  <tr><td>Zeitersparnis</td><td>Schnellere Prozessabwicklung</td></tr>
  <tr><td>Flexibilität</td><td>Schnellere Anpassung an veränderte Bedingungen</td></tr>
</table>

<h5>📌 Praktisches Beispiel: Marktforschungsunternehmen</h5>
<p><strong>Situation:</strong> Umstieg von Papier-Befragungen auf Smartphones. IT-Leiter kann Wirtschaftlichkeit nicht belegen → BWL-Assistentin mit WI-Schwerpunkt übernimmt.</p>
<p><strong>Lösung:</strong> Prozessbasierte Analyse von 2 Prozessen (Interview + Datenaufbereitung) → Kennzahlenvergleich:</p>
<table class="erk-table">
  <tr><th></th><th>Papier</th><th>Smartphone</th></tr>
  <tr><td>Gesamtkosten/Auftrag</td><td>5.150 €</td><td>4.224,54 €</td></tr>
  <tr><td>Kostensenkung/Auftrag</td><td colspan="2">925,46 €</td></tr>
  <tr><td>Amortisationszeit</td><td colspan="2"><strong>0,42 Jahre (≈ 5 Monate)</strong> bei Investition 95.000 €</td></tr>
</table>
<div class="def-box"><div class="def-label">Kernbotschaft</div>
WI verknüpft <strong>Prozessanalyse + betriebswirtschaftliche Bewertung + technische Möglichkeiten</strong>. Genau das ist Wirtschaftsinformatik in der Praxis!
</div>`,
  erklaerungen: [
    {
      titel: "\u{1F4D6} Definition Wirtschaftsinformatik",
      inhalt: `<div class="def-box"><div class="def-label">Wirtschaftsinformatik (Vorlesung)</div>
<strong>WI\u2081</strong> = Fachliche Schnittmenge aus <strong>Informatik</strong> und <strong>Betriebswirtschaftslehre</strong><br>
<strong>WI\u2082</strong> = Enth\u00e4lt dar\u00fcber hinaus <strong>eigene Inhalte</strong> (neues Wissen aus der Kombination)<br>
+ <strong>Informationstechnische Grundlagen</strong> (z.B. wie funktioniert ein Prozessor?)</div>
<div class="def-box"><div class="def-label">\u{1F3AF} Merke (Folie 1.-4)</div>
<strong>Analyse, Gestaltung und Nutzung von betrieblichen IS auf der Basis eines gemeinsamen Prozessverst\u00e4ndnisses</strong></div>
<div class="def-box"><div class="def-label">Hauptziel der WI</div>
Unterst\u00fctzung von <strong>Unternehmensprozessen</strong> durch betriebliche IS<br>
<small>= prozessorientierte Wirtschaftsinformatik (Prozesse stehen im Vordergrund)</small></div>
<div class="erk-tree">
  <div class="tree-root">Wirtschaftsinformatik</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#DBEAFE;"><strong>BWL</strong></div>
    <div class="tree-branch" style="background:#EDE9FE;"><strong>Informatik</strong></div>
    <div class="tree-branch" style="background:#FEF3C7;"><strong>WI\u2082 (eigene Inhalte)</strong></div>
  </div>
</div>`,
      schritte: [
        {
          titel: "Schritt 1: Was ist WI überhaupt?",
          inhalt: `<p>WI ist eine <strong>Schnittmengendisziplin</strong> – sie liegt genau zwischen BWL und Informatik.</p>
<p>Kernfrage der WI: <em>„Wie können Informationssysteme Geschäftsprozesse unterstützen und Wettbewerbsvorteile schaffen?"</em></p>
<div class="def-box"><div class="def-label">Gesamtdefinition</div>WI = Wissenschaft von Entwurf, Entwicklung und Einsatz computergestützter <strong>Informations- und Kommunikationssysteme (IKS)</strong> in Wirtschaft und Verwaltung.</div>`
        },
        {
          titel: "Schritt 2: WI als Zusatzmenge – was kommt hinzu?",
          inhalt: `<p>WI ist mehr als nur „BWL + Informatik". Sie bringt <strong>eigene Methoden</strong> mit:</p>
<p>• <strong>Systemanalyse</strong> – Prozesse verstehen und modellieren<br>
• <strong>Softwareentwicklung</strong> für betriebliche Anforderungen<br>
• <strong>Projektmanagement</strong> für IT-Einführungen<br>
• <strong>Change Management</strong> – Menschen durch IT-Wandel führen</p>
<p>👉 Ohne WI würden Informatiker tolle Software schreiben, die niemand braucht – und BWLer würden Prozesse beschreiben, die niemand digitalisiert.</p>`
        },
        {
          titel: "Schritt 3: WI und das Informationssystem (IS)",
          inhalt: `<p>Zentrales Objekt der WI ist das <strong>Informationssystem (IS)</strong>:</p>
<div class="def-box"><div class="def-label">Informationssystem</div>Sociotechnisches System zur <strong>Erfassung, Speicherung, Verarbeitung und Bereitstellung</strong> von Informationen in Organisationen.</div>
<p>Wichtig: IS = <strong>Mensch + Technik</strong>. Der Mensch gehört dazu!</p>
<p>Beispiele: SAP ERP, Online-Banking, Booking.com, Amazon-Lagerverwaltung.</p>`
        },
        {
          titel: "Schritt 4: IS – Prozess – Strategie",
          inhalt: `<p>Das Dreieck der WI:</p>
<p>🏢 <strong>Strategie</strong> (Was will das Unternehmen?)<br>
→ bestimmt die Prozesse<br>
⚙️ <strong>Prozesse</strong> (Wie wird es gemacht?)<br>
→ werden durch IS unterstützt<br>
💻 <strong>IS</strong> (Womit wird es gemacht?)</p>
<p>Fehler in der Praxis: Oft wird das IS eingeführt, <em>ohne</em> den Prozess vorher zu optimieren – dann automatisiert man einen schlechten Prozess.</p>`
        }
      ],
      fallbeispiele: [
        {
          situation: "Ein Marktforschungsunternehmen erfasst Umfrageergebnisse aktuell auf Papierbögen. Die Interviewer fahren täglich ins Büro, um die Bögen abzugeben. Die Daten werden dann manuell in Excel eingegeben – dauert 3 Tage.",
          aufgabe: "Wie würde ein WI-Experte dieses Problem analysieren und lösen?",
          hinweis: "Denk an den IS-Prozess-Strategie-Zusammenhang. Welcher Schritt kommt zuerst?",
          loesung: [
            "<strong>Ist-Analyse:</strong> Prozess verstehen – wer macht was, wann, wo? Papier → Abgabe → manuelle Eingabe → 3 Tage Verzögerung.",
            "<strong>Schwachstellen:</strong> Medienbruch (Papier→Digital), Redundanz (Schreiben + Eintippen), Verzögerung, Fehleranfälligkeit.",
            "<strong>Soll-Konzept:</strong> Interviewer nutzen Smartphones/Tablets → Daten direkt digital erfassen → automatische Übertragung in die Datenbank.",
            "<strong>IS-Lösung:</strong> Mobile Datenerfassungs-App + Backend-Datenbank + Auswertungsdashboard."
          ],
          ergebnis: "Durch IS-Unterstützung: Auswertung in Echtzeit statt nach 3 Tagen – Wettbewerbsvorteil durch schnellere Marktinformationen."
        }
      ],
      interaktion: [
        { frage: "Was ist der Kern der WI?", optionen: ["Programmieren", "Entwurf, Entwicklung & Einsatz von IKS", "Nur BWL mit PC", "Datenbanken"], richtig: 1, erklaerung: "WI = IKS in Wirtschaft und Verwaltung." },
        { frage: "Wof\u00fcr steht IKS?", optionen: ["Internationale Kontrollsysteme", "Informations- und Kommunikationssysteme", "Integrierte Kernsysteme", "Informatik-Koordination"], richtig: 1, erklaerung: "IKS = Informations- und Kommunikationssysteme." },
        { frage: "WI verbindet welche Disziplinen?", optionen: ["BWL und Mathe", "Informatik und Physik", "BWL und Informatik", "Jura und IT"], richtig: 2, erklaerung: "WI = Interdisziplin aus BWL + Informatik (+ Systemtheorie)." },
        { frage: "WI ist eine ...", optionen: ["Reine Informatik", "Reine BWL", "Interdisziplin", "Naturwissenschaft"], richtig: 2, erklaerung: "WI verbindet mehrere Disziplinen = Interdisziplin." },
        { frage: "Was ist ein typisches WI-Thema?", optionen: ["Wie unterst\u00fctzen IS Gesch\u00e4ftsprozesse?", "Wie baut man Br\u00fccken?", "Wie funktioniert Quantenphysik?", "Wie berechnet man Integrale?"], richtig: 0, erklaerung: "Typisch WI: Wie IS Gesch\u00e4ftsprozesse unterst\u00fctzen." }
      ]
    },
    {
      titel: "📚 Grundbegriffe nach Hansen (S. 1–7)",
      inhalt: `<p><small>Quelle: Hansen, Mendling, Neumann: Wirtschaftsinformatik, 12. Aufl. 2019 – prüfungsrelevant S. 1–7</small></p>
<div class="def-box"><div class="def-label">Betrieb</div>
Wirtschaftseinheit, die zielgerichtet Güter für Außenstehende bereitstellt.<br>
<strong>Produktionsfaktoren:</strong> Arbeit · Betriebsmittel · Werkstoffe · Wissen<br>
<small>Mit Gewinnziel = <strong>Unternehmen</strong> · Ohne Gewinnziel = <strong>NPO</strong> (Non-Profit-Organisation)</small>
</div>
<div class="def-box"><div class="def-label">Rechner (Computer) – DIN-Definition</div>
Funktionseinheit zur Verarbeitung von Daten: <strong>mathematisch, umformend, übertragend und speichernd</strong>.
</div>
<div class="def-box"><div class="def-label">Daten</div>
Stellen Information aufgrund <strong>bekannter oder unterstellter Abmachungen</strong> in <strong>maschinell verarbeitbarer Form</strong> dar.
</div>
<div class="def-box"><div class="def-label">Informationssystem (IS)</div>
Besteht aus <strong>Menschen und Maschinen</strong> (Rechner, Software, Netze, Kommunikationseinrichtungen), die Information erzeugen und/oder benutzen und durch Kommunikationsbeziehungen verbunden sind.
</div>
<div class="def-box"><div class="def-label">Betriebliches IS</div>
Unterstützt <strong>Leistungsprozesse und Austauschbeziehungen</strong> innerhalb eines Betriebs sowie zwischen dem Betrieb und seiner Umwelt.
</div>
<div class="def-box"><div class="def-label">Rechnergestütztes IS</div>
IS, bei dem Erfassung, Speicherung, Übertragung und/oder Transformation von Information durch <strong>Informationstechnik</strong> unterstützt wird.
</div>
<div class="def-box"><div class="def-label">ERP-System</div>
<strong>Enterprise Resource Planning</strong>: Integriertes IS, das alle wesentlichen betrieblichen Funktionsbereiche unterstützt und den laufenden Ressourceneinsatz (Kapital, Arbeit, Betriebsmittel, Werkstoffe) steuert.
</div>`,
      merke: `Betrieb = Wirtschaftseinheit (mit Gewinn = Unternehmen, ohne = NPO) • IS = Menschen + Maschinen • Betriebliches IS = Leistungsprozesse • Rechnergestütztes IS = IT-Unterstützung`,
      flipcards: [
        { vorne: "Betrieb", hinten: "Wirtschaftseinheit zur zielgerichteten Güterbereitstellung<br><small>Produktionsfaktoren: Arbeit, Betriebsmittel, Werkstoffe, Wissen</small>" },
        { vorne: "Unternehmen vs. NPO", hinten: "<strong>Unternehmen</strong> = Betrieb mit Gewinnziel<br><strong>NPO</strong> = Betrieb ohne Gewinnziel" },
        { vorne: "Rechner (DIN)", hinten: "Funktionseinheit zur Datenverarbeitung:<br>mathematisch · umformend · übertragend · speichernd" },
        { vorne: "Daten (Hansen)", hinten: "Information in <strong>maschinell verarbeitbarer Form</strong><br>aufgrund bekannter/unterstellter Abmachungen" },
        { vorne: "IS (Hansen)", hinten: "Menschen + Maschinen, verbunden durch<br>Kommunikationsbeziehungen" },
        { vorne: "Betriebliches IS", hinten: "Unterstützt Leistungsprozesse &<br>Austauschbeziehungen im/zwischen Betrieb(en)" },
        { vorne: "Rechnergestütztes IS", hinten: "IS mit IT-Unterstützung bei Erfassung,<br>Speicherung, Übertragung oder Transformation" },
        { vorne: "ERP-System", hinten: "Integriertes IS für alle betrieblichen<br>Funktionsbereiche (SAP, Oracle, MS Dynamics)" }
      ],
      interaktion: [
        { frage: "Was ist ein Betrieb laut Hansen?", optionen: ["Ein Gebäude", "Wirtschaftseinheit zur zielgerichteten Güterbereitstellung", "Eine Softwarefirma", "Ein staatliches Amt"], richtig: 1, erklaerung: "Betrieb = Wirtschaftseinheit, die zielgerichtet Güter für Außenstehende bereitstellt." },
        { frage: "Was unterscheidet Unternehmen von NPO?", optionen: ["Die Größe", "Der Standort", "Das Gewinnziel", "Die Mitarbeiterzahl"], richtig: 2, erklaerung: "Unternehmen = Betrieb mit Gewinnziel. NPO = Non-Profit-Organisation ohne Gewinnziel." },
        { frage: "DIN-Definition des Rechners?", optionen: ["Gerät zur Texteingabe", "Funktionseinheit zur Datenverarbeitung: mathematisch, umformend, übertragend, speichernd", "Netzwerkgerät", "Drucker und Scanner"], richtig: 1, erklaerung: "DIN-Definition: Funktionseinheit zur Verarbeitung von Daten: mathematisch, umformend, übertragend und speichernd." },
        { frage: "Was sind Daten laut Hansen?", optionen: ["Alles was gespeichert ist", "Information in maschinell verarbeitbarer Form aufgrund bekannter Abmachungen", "Nur Zahlen", "Texte und Bilder"], richtig: 1, erklaerung: "Daten stellen Information aufgrund bekannter oder unterstellter Abmachungen in maschinell verarbeitbarer Form dar." },
        { frage: "Woraus besteht ein IS nach Hansen?", optionen: ["Nur Software", "Nur Hardware", "Menschen und Maschinen verbunden durch Kommunikation", "Nur Datenbanken"], richtig: 2, erklaerung: "IS = Menschen + Maschinen (Rechner, Software, Netze), verbunden durch Kommunikationsbeziehungen." }
      ]
    },
    {
      titel: "\u{1F504} Betriebliche Prozesse",
      inhalt: `<div class="def-box"><div class="def-label">Prozess als Modell (Folie 1.-5)</div>
Ein Prozess ist eine <strong>Folge von Schritten</strong>,<br>
\u2022 mit einem <strong>Start- und Endereignis</strong>,<br>
\u2022 mit ausf\u00fchrenden <strong>Organisationselementen</strong> (Personen, Stellen, Abteilungen u.\u00a0\u00e4.)<br>
\u2022 sowie mit den notwendigen <strong>Input-</strong> und erzeugten <strong>Output-Informationen</strong></div>
<p><small>\u{1F4A1} Vereinfachte Abbildung der Realit\u00e4t = Modell. Start- und Endereignis m\u00fcssen genau definiert werden.</small></p>
<div class="erk-tree">
  <div class="tree-root">Auftragsabwicklung (Beispiel)</div>
  <div class="tree-branches">
    <div class="tree-branch">1. Bestellung</div>
    <div class="tree-branch">2. Pr\u00fcfung</div>
    <div class="tree-branch">3. Kommission</div>
    <div class="tree-branch">4. Versand</div>
    <div class="tree-branch">5. Rechnung</div>
  </div>
</div>
<p>Prozesse gehen oft \u00fcber <strong>Abteilungsgrenzen</strong> hinweg.</p>`,
      schritte: [
        {
          titel: "Schritt 1: Was ist ein Gesch\u00e4ftsprozess?",
          inhalt: `<p>Ein <strong>Gesch\u00e4ftsprozess</strong> ist eine Folge von zusammenh\u00e4ngenden Aktivit\u00e4ten, die einen Input in einen Output transformieren und Kundenwert schaffen.</p>
<div class="def-box"><div class="def-label">3 Kernelemente</div>
\ud83d\udce5 <strong>Input</strong> \u2013 was reinkommt (z.B. Kundenauftrag)<br>
\u2699\ufe0f <strong>Transformation</strong> \u2013 was passiert drin (z.B. Bearbeitung, Fertigung)<br>
\ud83d\udce4 <strong>Output</strong> \u2013 was rauskommt (z.B. geliefertes Produkt)</div>`
        },
        {
          titel: "Schritt 2: Kernprozesse vs. Unterst\u00fctzungsprozesse",
          inhalt: `<p>Nicht alle Prozesse sind gleich wichtig:</p>
<div class="def-box"><div class="def-label">Kernprozesse (Prim\u00e4rprozesse)</div>
Direkt wertsch\u00f6pfend, der Kunde erlebt sie: Auftragsabwicklung, Produktion, Lieferung</div>
<div class="def-box"><div class="def-label">Unterst\u00fctzungsprozesse (Sekund\u00e4rprozesse)</div>
Erm\u00f6glichen Kernprozesse: HR, IT, Buchhaltung, Geb\u00e4udemanagement</div>
<p>IT-Systeme unterst\u00fctzen meistens <strong>beide</strong> Arten!</p>`
        },
        {
          titel: "Schritt 3: Prozess vs. Funktion",
          inhalt: `<p>Wichtiger Unterschied:</p>
<table class="erk-table">
  <tr><th></th><th>Prozessorientierung</th><th>Funktionsorientierung</th></tr>
  <tr><td><strong>Sicht</strong></td><td>Ablauf \u00fcber Abteilungen</td><td>Aufgaben pro Abteilung</td></tr>
  <tr><td><strong>Fokus</strong></td><td>Kundenwert</td><td>Effizienz pro Funktion</td></tr>
  <tr><td><strong>Nachteil</strong></td><td>Schnittstellen komplex</td><td>Silodenken</td></tr>
</table>
<p>Moderne Unternehmen: <strong>Prozessorientierung</strong> mit IT-Unterst\u00fctzung (z.B. ERP-Systeme).</p>`
        },
        {
          titel: "Schritt 4: Prozessmodellierung",
          inhalt: `<p>Prozesse m\u00fcssen modelliert werden, um sie zu verstehen und zu optimieren:</p>
<p>\ud83d\uddfa\ufe0f <strong>EPK</strong> (Ereignisgesteuerte Prozesskette) \u2013 deutschsprachig, ereignisorientiert<br>
\ud83d\udcdd <strong>BPMN 2.0</strong> (Business Process Model and Notation) \u2013 international, standardisiert</p>
<div class="def-box"><div class="def-label">Warum modellieren?</div>
Dokumentation, Kommunikation, Optimierung, IT-Implementierung. Ohne Modell kein funktionierendes ERP-System!</div>`
        }
      ],

      fallbeispiele: [
        {
          titel: "Fall 1: Prozessoptimierung im Online-Shop",
          situation: `<p>Ein mittelst\u00e4ndischer Online-Shop hat folgendes Problem: Kundenbeschwerden h\u00e4ufen sich. Die durchschnittliche Lieferzeit betr\u00e4gt 7 Tage. Konkurrenten liefern in 2 Tagen.</p>
<p>Aktueller Ablauf: Bestellung eingeht \u2192 Mitarbeiter tippt Bestellung ins Lager-System \u2192 Lager packt \u2192 Versand bucht DHL manuell \u2192 Kunde informiert per Brief.</p>`,
          aufgabe: `Analysiere den Prozess nach dem WI-Framework: Was sind Schwachstellen? Wie kann IT den Prozess verbessern?`,
          hinweis: `Suche nach manuellen Schritten, Medienbrüchen und fehlenden Automatisierungen.`,
          loesung: [
            `<strong>Schwachstellen identifizieren:</strong><br>Medienbruch 1: Bestellung → manuelles Eintippen<br>Medienbruch 2: DHL-Buchung manuell<br>Medienbruch 3: Kundeninfo per Brief<br>Fehlende Integration: Shop, Lager, Versand in verschiedenen Systemen`,
            `<strong>IT-Optimierung:</strong><br>ERP-System: Bestellung l\u00e4uft automatisch ins Lagersystem<br>Schnittstelle DHL-API: Versandetikett automatisch generiert<br>E-Mail-Automatisierung: Kunde erh\u00e4lt sofort Trackingnummer`,
            `<strong>Ergebnis der IT-Unterst\u00fctzung:</strong><br>Manueller Eingriff eliminiert. Lieferzeit reduziert auf 1-2 Tage. Mitarbeiter frei f\u00fcr wertsch\u00f6pfende Aufgaben.`
          ],
          ergebnis: `IT-Unterst\u00fctzung beseitigt Medienbrüche und automatisiert den Kernprozess "Auftragsabwicklung". Wettbewerbsvorteil durch IT!`
        },
        {
          situation: `<p>Ein <strong>Marktforschungsunternehmen</strong> f\u00fchrt Massenbefragungen mit \u201ePapier und Bleistift\u201c durch. Die GF \u00fcberlegt den Umstieg auf <strong>Smartphones</strong>.</p>
<p>Der IT-Leiter kann die Wirtschaftlichkeit nicht belegen. Die <strong>BWL-Assistentin (WI-Schwerpunkt)</strong> \u00fcbernimmt die Analyse.</p>`,
          aufgabe: "Bewerte die Wirtschaftlichkeit des Umstiegs auf Smartphones anhand der Amortisationsdauer.",
          loesung: [
            `<strong>Effizienzvergleich:</strong><br><table class="erk-table">
  <tr><th>Kennzahl</th><th>Mit Fragebogen</th><th>Mit Smartphone</th></tr>
  <tr><td>Bearbeitungszeit Interview</td><td>6,0 Min.</td><td>5,0 Min.</td></tr>
  <tr><td>Max. Interviews/Tag (6 Std.)</td><td>60</td><td>72</td></tr>
  <tr><td>Interviewtage f\u00fcr 1.000 Interviews</td><td>55,6 Tage</td><td>46,3 Tage</td></tr>
  <tr><td>Datenaufbereitung pro Auftrag</td><td>600 Min.</td><td>231,5 Min.</td></tr>
</table>`,
            `<strong>Wirtschaftlichkeitsrechnung:</strong><br><table class="erk-table">
  <tr><th>Position</th><th>Betrag</th></tr>
  <tr><td>Kostensenkung pro Auftrag</td><td>925,46 \u20ac</td></tr>
  <tr><td>Auftr\u00e4ge p.a.</td><td>300</td></tr>
  <tr><td>Kostensenkung p.a.</td><td>277.639 \u20ac</td></tr>
  <tr><td>Investitionskosten gesamt</td><td>95.000 \u20ac</td></tr>
  <tr><td>Laufende Mehrkosten p.a.</td><td>51.000 \u20ac</td></tr>
  <tr><td><strong>Amortisationsdauer</strong></td><td><strong>0,42 Jahre (\u2248 5 Monate)</strong></td></tr>
</table>`,
            `\ud83d\udcc8 <strong>Amortisation</strong> = 95.000 / (277.639 \u2212 51.000) = <strong>0,42 Jahre (\u2248 5 Monate)</strong><br>\u2705 Investition lohnt sich! Die Assistentin verbindet Prozessanalyse + BWL-Bewertung + IT = <em>Wirtschaftsinformatik in der Praxis!</em>`
          ],
          ergebnis: "Amortisationsdauer ≈ 5 Monate – die Investition lohnt sich klar."
        }
      ],

      interaktion: [
        { frage: "Was zeichnet einen Gesch\u00e4ftsprozess aus?", optionen: ["Nur in einer Abteilung", "Input \u2192 Output + Kundenwert", "Nur IT-Abl\u00e4ufe", "Kein definierter Anfang"], richtig: 1, erklaerung: "Gesch\u00e4ftsprozess transformiert Input in Output und schafft Kundenwert." },
        { frage: "Warum gehen Prozesse \u00fcber Abteilungsgrenzen?", optionen: ["Schlecht organisiert", "Wertsch\u00f6pfung braucht mehrere Bereiche", "IT gibt es vor", "Management will es"], richtig: 1, erklaerung: "Wertsch\u00f6pfung erfordert mehrere Bereiche." },
        { frage: "Was ist Input bei einer Auftragsabwicklung?", optionen: ["Die Rechnung", "Die Kundenbestellung", "Der Versand", "Das Lager"], richtig: 1, erklaerung: "Input = Bestellung, Output = gelieferte Ware + Rechnung." },
        { frage: "Ein Prozess ohne Kundenwert ist ...", optionen: ["Trotzdem ein Gesch\u00e4ftsprozess", "Kein Gesch\u00e4ftsprozess", "Nur ein IT-Prozess", "Ein Hilfsprozess"], richtig: 1, erklaerung: "Per Definition muss ein Gesch\u00e4ftsprozess Wert f\u00fcr den Kunden schaffen." },
        { frage: "Welche Abteilungen durchl\u00e4uft eine Auftragsabwicklung?", optionen: ["Nur Vertrieb", "Vertrieb, Lager, Buchhaltung", "Nur IT", "Nur Gesch\u00e4ftsf\u00fchrung"], richtig: 1, erklaerung: "Typisch: Vertrieb \u2192 Lager \u2192 Versand \u2192 Buchhaltung." }
      ]
    },
    {
      titel: "\u{1F5A5}\uFE0F Arten von Informationssystemen",
      inhalt: `<table class="erk-table">
  <tr><th>System</th><th>Ebene</th><th>Aufgabe</th></tr>
  <tr><td><strong>ERP</strong></td><td>Operativ</td><td>Ressourcenplanung</td></tr>
  <tr><td><strong>MIS</strong></td><td>Taktisch</td><td>Berichte f\u00fcrs Management</td></tr>
  <tr><td><strong>DSS</strong></td><td>Strategisch</td><td>Entscheidungsunterst\u00fctzung</td></tr>
  <tr><td><strong>EIS/F\u00dcIS</strong></td><td>Top-Management</td><td>Dashboards</td></tr>
</table>`,
      merke: `ERP=operativ \u2022 MIS=taktisch \u2022 DSS=strategisch \u2022 EIS=Top-Management`,
      schritte: [
        {
          titel: "Schritt 1: Warum verschiedene IS-Typen?",
          inhalt: `<p>Verschiedene Managementebenen haben verschiedene Informationsbed\u00fcrfnisse:</p>
<p>\ud83d\udcbc <strong>Operativ</strong>: Tagesgesch\u00e4ft, viele Details, strukturiert<br>
\ud83d\udcca <strong>Taktisch</strong>: Wochen/Monate, Berichte, Auswertungen<br>
\ud83c\udfaf <strong>Strategisch</strong>: Jahre, Trends, Entscheidungsunterst\u00fctzung<br>
\ud83d\udc51 <strong>Top-Management</strong>: Kurzfristiger \u00dcberblick, Dashboards</p>`
        },
        {
          titel: "Schritt 2: Die 4 IS-Typen",
          inhalt: `<table class="erk-table">
  <tr><th>System</th><th>Ebene</th><th>Aufgabe</th><th>Beispiel</th></tr>
  <tr><td><strong><span class="term" data-label="ERP" data-def="Enterprise Resource Planning: Integrierte Software, die alle Unternehmensbereiche (Einkauf, Produktion, Vertrieb, HR, Finanzen) in einem System verbindet. Beispiel: SAP.">ERP</span></strong></td><td>Operativ</td><td>Ressourcenplanung integriert</td><td>SAP, Oracle ERP</td></tr>
  <tr><td><strong>MIS</strong></td><td>Taktisch</td><td>Management-Berichte</td><td>Monatsreports, BI-Tools</td></tr>
  <tr><td><strong>DSS</strong></td><td>Strategisch</td><td>Entscheidungsunterst\u00fctzung</td><td>Simulationen, Szenarien</td></tr>
  <tr><td><strong>EIS/F\u00dcIS</strong></td><td>Top-Management</td><td>Executive Dashboards</td><td>Balanced Scorecard</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: ERP im Fokus",
          inhalt: `<p><strong>ERP (Enterprise Resource Planning)</strong> ist das wichtigste betriebliche IS:</p>
<p>\ud83d\udd17 Integriert <strong>alle Gesch\u00e4ftsbereiche</strong> in einem System:<br>
Produktion, Einkauf, Vertrieb, Finanzen, HR, Logistik</p>
<p>\ud83d\udcbe <strong>Eine gemeinsame Datenbasis</strong> \u2013 kein Datendurcheinander mehr</p>
<div class="def-box"><div class="def-label">Wichtigste Anbieter</div>
SAP (Marktf\u00fchrer), Oracle, Microsoft Dynamics</div>
<p>ERP-Systeme sind die Infrastruktur f\u00fcr alle anderen IS-Typen.</p>`
        },
        {
          titel: "Schritt 4: Zusammenhang der IS-Typen",
          inhalt: `<p>Die IS-Typen bauen aufeinander auf:</p>
<p>\ud83d\udcd0 ERP sammelt Rohdaten (operativ)<br>
\u2192 MIS verdichtet zu Berichten (taktisch)<br>
\u2192 DSS analysiert Szenarien (strategisch)<br>
\u2192 EIS zeigt das Wichtigste (Top-Management)</p>
<div class="def-box"><div class="def-label">Merke</div>
ERP=operativ, MIS=taktisch, DSS=strategisch, EIS=Top-Management<br>
Eselsbrücke: <strong>"Ele Macht Den Erfolg"</strong></div>`
        }
      ],

      interaktion: [
        { frage: "ERP arbeitet auf welcher Ebene?", optionen: ["Strategisch", "Taktisch", "Operativ", "Top-Management"], richtig: 2, erklaerung: "ERP = operative Ebene (Tagesgesch\u00e4ft)." },
        { frage: "SAP ist ein Beispiel f\u00fcr ...", optionen: ["MIS", "DSS", "ERP", "EIS"], richtig: 2, erklaerung: "SAP = ERP-System." },
        { frage: "Wer nutzt ein EIS?", optionen: ["Sachbearbeiter", "Mittleres Management", "Top-Management", "Kunden"], richtig: 2, erklaerung: "EIS = Executive IS f\u00fcr die Chefetage." },
        { frage: "MIS liefert ...", optionen: ["Automatisierte Produktion", "Berichte f\u00fcrs mittlere Management", "Kundendaten", "Programmiercode"], richtig: 1, erklaerung: "MIS = Berichte/Reports f\u00fcr taktische Ebene." },
        { frage: "DSS steht f\u00fcr ...", optionen: ["Data Storage System", "Decision Support System", "Digital Security System", "Document Sharing Service"], richtig: 1, erklaerung: "DSS = Decision Support System (Entscheidungsunterst\u00fctzung)." }
      ]
    },
    {
      titel: "\u{1F3AF} Wettbewerbsvorteile durch IT (Porter)",
      inhalt: `<div class="erk-tree">
  <div class="tree-root">Porters 5 Kr\u00e4fte</div>
  <div class="tree-branches">
    <div class="tree-branch">Rivalit\u00e4t Wettbewerber</div>
    <div class="tree-branch">Neue Anbieter</div>
    <div class="tree-branch">Substitute</div>
    <div class="tree-branch">Macht Lieferanten</div>
    <div class="tree-branch">Macht Kunden</div>
  </div>
</div>
<p><strong>Wertkette:</strong></p>
<table class="erk-table">
  <tr><th>Prim\u00e4r</th><th>Unterst\u00fctzend</th></tr>
  <tr><td>Eingangslogistik, Produktion, Ausgangslogistik, Marketing, Service</td>
      <td>Infrastruktur, Personal, Technologie, Beschaffung</td></tr>
</table>`,
      schritte: [
        {
          titel: "Schritt 1: Porters 5 Wettbewerbskr\u00e4fte",
          inhalt: `<p>Porter identifiziert <strong>5 Kr\u00e4fte</strong>, die den Wettbewerb einer Branche bestimmen:</p>
<p>\ud83d\udcd6 <strong>Rivalit\u00e4t</strong> unter bestehenden Wettbewerbern<br>
\ud83d\udd22 <strong>Bedrohung durch neue Anbieter</strong> (Markteintritt)<br>
\ud83d\udd04 <strong>Bedrohung durch Substitute</strong> (Ersatzprodukte)<br>
\ud83d\udce6 <strong>Verhandlungsmacht der Lieferanten</strong><br>
\ud83d\udc65 <strong>Verhandlungsmacht der Kunden</strong></p>
<p>IT kann alle 5 Kr\u00e4fte <strong>beeinflussen</strong>!</p>`
        },
        {
          titel: "Schritt 2: IT und die 5 Kr\u00e4fte",
          inhalt: `<table class="erk-table">
  <tr><th>Kraft</th><th>IT-Einsatz</th><th>Beispiel</th></tr>
  <tr><td>Rivalit\u00e4t</td><td>Kostenf\u00fchrung durch Automatisierung</td><td>Amazon vs. traditioneller Handel</td></tr>
  <tr><td>Neue Anbieter</td><td>Markteintrittsbarrieren durch IT</td><td>Netflix' Algorithmen</td></tr>
  <tr><td>Substitute</td><td>Eigene Disruption</td><td>Spotify ersetzt CDs</td></tr>
  <tr><td>Lieferanten</td><td>E-Procurement</td><td>Automatische Bestellsysteme</td></tr>
  <tr><td>Kunden</td><td>CRM, Kundenbindung</td><td>Treueprogramme</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Porters Wertkette",
          inhalt: `<p>Die <strong>Wertkette</strong> zeigt, wo im Unternehmen Wert erzeugt wird:</p>
<p><strong>Prim\u00e4re Aktivit\u00e4ten</strong> (direkt wertsch\u00f6pfend):<br>
Eingangslogistik \u2192 Produktion \u2192 Ausgangslogistik \u2192 Marketing \u2192 Service</p>
<p><strong>Unterst\u00fctzende Aktivit\u00e4ten</strong>:<br>
Infrastruktur | HR | Technologieentwicklung | Beschaffung</p>
<p>IT kann in <strong>jeder Stufe</strong> Wettbewerbsvorteile schaffen!</p>`
        },
        {
          titel: "Schritt 4: Strategische Wettbewerbsvorteile durch IT",
          inhalt: `<p>Wie erzielt man nachhaltigen Wettbewerbsvorteil durch IT?</p>
<p>\ud83d\udcb0 <strong>Kostenf\u00fchrung</strong>: Kosten senken durch IT-Automatisierung<br>
\ud83d\udcce <strong>Differenzierung</strong>: Einzigartige Leistungen durch IT (z.B. Personalisierung)<br>
\ud83c\udfaf <strong>Nischenstrategie</strong>: Speziell f\u00fcr eine Nische optimierte IT</p>
<div class="def-box"><div class="def-label">Wichtig f\u00fcr Pr\u00fcfung</div>
Wettbewerbsvorteil durch IT ist <strong>nicht nachhaltig</strong> ohne kontinuierliche Innovation \u2013 Konkurrenten kopieren!</div>`
        }
      ],

      interaktion: [
        { frage: "Wie viele Kr\u00e4fte hat Porters Modell?", optionen: ["3", "4", "5", "6"], richtig: 2, erklaerung: "5 Wettbewerbskr\u00e4fte." },
        { frage: "E-Book statt gedrucktes Buch ist ein Beispiel f\u00fcr ...", optionen: ["Neue Anbieter", "Rivalit\u00e4t", "Substitute", "Kundenmacht"], richtig: 2, erklaerung: "E-Book ersetzt gedrucktes Buch = Substitut." },
        { frage: "Produktion geh\u00f6rt zu den ... Aktivit\u00e4ten", optionen: ["Prim\u00e4ren", "Unterst\u00fctzenden", "Sekund\u00e4ren", "Externen"], richtig: 0, erklaerung: "Produktion = prim\u00e4re Aktivit\u00e4t der Wertkette." },
        { frage: "Personalwirtschaft ist eine ... Aktivit\u00e4t", optionen: ["Prim\u00e4re", "Unterst\u00fctzende", "Operative", "Strategische"], richtig: 1, erklaerung: "Personal = unterst\u00fctzende Aktivit\u00e4t." },
        { frage: "Was ist KEINE der 5 Kr\u00e4fte?", optionen: ["Substitute", "Kundenmacht", "Digitalisierungsdruck", "Rivalit\u00e4t"], richtig: 2, erklaerung: "Digitalisierungsdruck geh\u00f6rt nicht zu Porters 5 Kr\u00e4ften." }
      ]
    },
    {
      titel: "\u{1F30D} Gesch\u00e4ftsstrategie, Prozesse & Digitalisierung",
      inhalt: `<p>Drei Ebenen sind miteinander verkn\u00fcpft (Vorlesung 24.03.2026):</p>
<div class="erk-tree">
  <div class="tree-root">Grundverst\u00e4ndnis WI</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#DBEAFE;border-color:#3B82F6;"><strong>Gesch\u00e4ftsstrategie</strong><br><small>Was will das Unternehmen?</small></div>
    <div class="tree-branch" style="background:#EDE9FE;border-color:#8B5CF6;"><strong>Prozesse</strong><br><small>Wie wird es umgesetzt?</small></div>
    <div class="tree-branch" style="background:#D1FAE5;border-color:#10B981;"><strong>IS (IT)</strong><br><small>Womit wird es gemacht?</small></div>
  </div>
</div>
<p>Porters <strong>generische Wettbewerbsstrategien</strong>:</p>
<table class="erk-table">
  <tr><th>Strategie</th><th>Ziel</th><th>IS-Beitrag</th></tr>
  <tr><td><strong>Kostenf\u00fchrung</strong></td><td>G\u00fcnstigster Anbieter</td><td>Automatisierung, ERP-Effizienz</td></tr>
  <tr><td><strong>Qualit\u00e4tsf\u00fchrung</strong></td><td>Bestes Produkt/Service</td><td>CRM, Qualit\u00e4ts-IS, Analytik</td></tr>
</table>`,
      beispiel: `Amazon = Kostenf\u00fchrung \u2192 IS automatisiert Lager, Preise, Logistik.<br>
Apple = Qualit\u00e4tsf\u00fchrung \u2192 IS unterst\u00fctzt Design, Service, \u00d6kosystem.`,
      merke: `Strategie bestimmt Prozesse \u2192 Prozesse brauchen IS \u2022 Kostenf\u00fchrung & Qualit\u00e4tsf\u00fchrung (Porter)`,
      schritte: [
        {
          titel: "Schritt 1: Das Grundverst\u00e4ndnis",
          inhalt: `<p>Laut Vorlesung (24.03.): <em>\"Gesch\u00e4fts-/Unternehmensprozesse dienen der zielgerichteten Durchf\u00fchrung von betrieblichen Aufgaben zur Umsetzung von Gesch\u00e4ftsstrategien.\"</em></p>
<p>Kurzversion: Strategie \u2192 Prozesse \u2192 IS. Wer das versteht, kann IS richtig einsetzen.</p>`
        },
        {
          titel: "Schritt 2: Porters Wettbewerbsstrategien",
          inhalt: `<p>Porter unterscheidet zwei Grundstrategien:</p>
<p>\ud83d\udcb0 <strong>Kostenf\u00fchrung</strong>: G\u00fcnstigster Anbieter am Markt. IS helfen durch Automatisierung und Effizienz.</p>
<p>\u2b50 <strong>Qualit\u00e4tsf\u00fchrung</strong>: Bestes Produkt oder Service. IS helfen durch bessere Daten, CRM, Analytik.</p>
<p>\u26a0\ufe0f <strong>Stuck in the Middle</strong>: Wer keiner Strategie folgt, verliert gegen beide.</p>`
        },
        {
          titel: "Schritt 3: Digitalisierung als Erfolgsfaktor",
          inhalt: `<p>Die Vorlesung betont: IS leisten <strong>wichtige Erfolgsbeitr\u00e4ge</strong> \u00fcber Prozessunterst\u00fctzung.</p>
<p>Damit verbunden ist die <strong>Digitalisierung</strong> von:<br>
\u2022 <strong>Arbeitspl\u00e4tzen</strong> (weniger manuelle T\u00e4tigkeiten)<br>
\u2022 <strong>Unternehmen & Branchen</strong> (digitale Gesch\u00e4ftsmodelle)<br>
\u2022 <strong>Gesellschaften</strong> (E-Government, digitale Infrastruktur)</p>
<p>\ud83c\udf9f\ufe0f F\u00fcr BWL\u2019er: <strong>Attraktive T\u00e4tigkeitsfelder</strong> an der Schnittstelle von BWL, IT und Digitalisierung.</p>`
        }
      ],
      interaktion: [
        { frage: "Was kommt in der WI-Logik zuerst?", optionen: ["Informationssystem", "Prozesse", "Gesch\u00e4ftsstrategie", "Datenbank"], richtig: 2, erklaerung: "Erst die Strategie bestimmt die Prozesse, dann kommen IS zur Unterst\u00fctzung." },
        { frage: "Welche zwei Strategien nennt Porter?", optionen: ["Wachstum & Schrumpfung", "Kostenf\u00fchrung & Qualit\u00e4tsf\u00fchrung", "Push & Pull", "B2B & B2C"], richtig: 1, erklaerung: "Porter: Kostenf\u00fchrung und Qualit\u00e4tsf\u00fchrung (Differenzierung)." },
        { frage: "Amazon nutzt welche Strategie?", optionen: ["Qualit\u00e4tsf\u00fchrung", "Nischenstrategie", "Kostenf\u00fchrung", "Differenzierung"], richtig: 2, erklaerung: "Amazon = Kostenf\u00fchrung \u2013 g\u00fcnstigste Preise durch maximale Automatisierung." },
        { frage: "'Stuck in the Middle' bedeutet ...", optionen: ["Man ist Marktf\u00fchrer", "Man hat keine klare Strategie", "Man ist in der Mitte der Wertsch\u00f6pfungskette", "ERP-Fehler"], richtig: 1, erklaerung: "Stuck in the Middle = keine klare Strategie, verliert gegen Kostenf\u00fchrer UND Qualit\u00e4tsf\u00fchrer." }
      ]
    },
    {
      titel: "\u{1F3AF} Ziele betrieblicher Informationssysteme",
      inhalt: `<div class="def-box"><div class="def-label">Betriebliches Ziel (Hansen)</div>
Gew\u00fcnschter, in der Zukunft liegender Zustand. Dient zur Orientierung aller Mitarbeiter. IS-Ziele sind <strong>gleichgerichtete Unterziele</strong> der betrieblichen Oberziele.
</div>
<table class="erk-table">
  <tr><th>Ziel</th><th>Was bedeutet das?</th><th>Beispiel</th></tr>
  <tr><td><strong>Rationalisierung</strong></td><td>Sichere, straffe, <em>kosteng\u00fcnstige</em> Abwicklung des Alltagsbetriebs</td><td>Lohnabrechnung f\u00fcr Millionen; Konten-bewegungen; Platzbuchungen \u2013 Rechner rund um die Uhr</td></tr>
  <tr><td><strong>Information &amp; Entscheidungsunterst\u00fctzung</strong></td><td>Aktuelle, umfassende Daten zur besseren Anpassungsf\u00e4higkeit</td><td>Big Data; maschinelles Lernen aus historischen Transaktionsdaten; BI-Dashboards</td></tr>
  <tr><td><strong>Innovation</strong></td><td>Neue Prozesse &amp; Gesch\u00e4ftsmodelle (enabling technology)</td><td>Personalisierte Angebote; Online-Marktpl\u00e4tze; neue Gesch\u00e4ftsfelder durch IT</td></tr>
  <tr><td><strong>Nachhaltigkeit</strong></td><td>Soziale &amp; \u00f6kologische Nebenziele</td><td>Ergonomische Arbeitspl\u00e4tze; Papiereinsparung; weniger Emissionen</td></tr>
</table>`,
      merke: `4 Ziele: Rationalisierung \u2022 Information/Entscheidung \u2022 Innovation \u2022 Nachhaltigkeit`,
      schritte: [
        {
          titel: "Schritt 1: Warum haben IS \u00fcberhaupt Ziele?",
          inhalt: `<p>IS sind <strong>kein Selbstzweck</strong> \u2013 sie dienen betrieblichen Zielen.</p>
<p>\ud83c\udfaf Betriebliche Ziele (z.B. Gewinn, Marktanteil) \u2192 IS-Ziele als <strong>Unterziele</strong></p>
<div class="def-box"><div class="def-label">Merksatz</div>
IS sind <em>Mittel zum Zweck</em>: Sie sollen wirtschaftliche, soziale und \u00f6kologische Oberziele des Betriebs unterst\u00fctzen.
</div>`
        },
        {
          titel: "Schritt 2: Rationalisierung",
          inhalt: `<p><strong>Rationalisierung</strong> = sichere, straffe, kosteng\u00fcnstige Alltagsabwicklung</p>
<p>\ud83d\udd01 Rechner laufen <strong>24/7</strong> ohne Arbeitszeiten</p>
<p>\ud83d\udcc8 Massenverarbeitung: Kontobewe-gungen, Lohnabrechnung, Platzbuchungen</p>
<p>\ud83d\udcb0 Kosteneinsparung durch Automatisierung von Routineaufgaben</p>
<p>\u2705 Fehlerquellen durch menschliche Unzul\u00e4nglichkeit werden ausgeschaltet</p>`
        },
        {
          titel: "Schritt 3: Information & Innovation",
          inhalt: `<p><strong>Information & Entscheidungsunterst\u00fctzung</strong>:</p>
<p>\ud83d\udcca Transaktionsdaten \u2192 Grundlage f\u00fcr Entscheidungen<br>
\ud83e\udd16 Big Data + maschinelles Lernen = neue Erkenntnisse</p>
<br>
<p><strong>Innovation</strong> (enabling technology):</p>
<p>\ud83d\ude80 IT erm\u00f6glicht v\u00f6llig neue Gesch\u00e4ftsmodelle<br>
\ud83d\udc65 Personalisierte Angebote, Online-M\u00e4rkte, Plattformen<br>
\u26a0\ufe0f Ziel: nicht nur effizienter machen, sondern <em>neu denken</em>!</p>`
        },
        {
          titel: "Schritt 4: Merkhilfe & Klausurtipp",
          inhalt: `<p>Merkhilfe: <strong>R-I-I-N</strong></p>
<table class="erk-table">
  <tr><th>Buchstabe</th><th>Ziel</th><th>Stichwort</th></tr>
  <tr><td><strong>R</strong></td><td>Rationalisierung</td><td>Kosten senken, Automatisierung</td></tr>
  <tr><td><strong>I</strong></td><td>Information</td><td>Entscheidungsunterst\u00fctzung, Big Data</td></tr>
  <tr><td><strong>I</strong></td><td>Innovation</td><td>enabling technology, neue Modelle</td></tr>
  <tr><td><strong>N</strong></td><td>Nachhaltigkeit</td><td>sozial, \u00f6kologisch</td></tr>
</table>
<p>\ud83d\udccc <strong>Klausurtipp</strong>: Unterscheide wirtschaftliche Ziele (R, I, I) von sozialen/\u00f6kologischen (N)!</p>`
        }
      ],
      interaktion: [
        { frage: "Was ist das Ziel 'Rationalisierung' beim IS-Einsatz?", optionen: ["Neue Gesch\u00e4ftsmodelle entwickeln", "Sichere, kosteng\u00fcnstige Alltagsabwicklung", "Daten f\u00fcr Entscheidungen aufbereiten", "Soziale Ziele erf\u00fcllen"], richtig: 1, erklaerung: "Rationalisierung = straffe, sichere, kosteng\u00fcnstige Abwicklung des Alltagsbetriebs, z.B. automatische Lohnabrechnung." },
        { frage: "Was meint Hansen mit IS als 'enabling technology'?", optionen: ["IS sind gesetzlich vorgeschrieben", "IS machen bestehende Prozesse schneller", "IS erm\u00f6glichen v\u00f6llig neue Gesch\u00e4ftsmodelle", "IS ersetzen alle Mitarbeiter"], richtig: 2, erklaerung: "Enabling technology (Innovation): IT erm\u00f6glicht neue Formen von Prozessen und Gesch\u00e4ftsmodellen, die ohne IT nicht realisierbar w\u00e4ren." },
        { frage: "Welche vier wirtschaftlichen Ziele nennt Hansen f\u00fcr IS?", optionen: ["Effizienz, Effektivit\u00e4t, Qualit\u00e4t, Service", "Rationalisierung, Information, Innovation, Nachhaltigkeit", "ERP, MIS, DSS, EIS", "Planung, Kontrolle, Steuerung, Koordination"], richtig: 1, erklaerung: "Hansen nennt: Rationalisierung, Information & Entscheidungsunterst\u00fctzung, Innovation und Nachhaltigkeit (sozial/\u00f6kologisch)." }
      ]
    },
    {
      titel: "\u{1F4CA} IS-Typen nach Hansen",
      inhalt: `<p>Hansen unterscheidet IS nach ihrer <strong>Aufgabe</strong> im Betrieb:</p>
<table class="erk-table">
  <tr><th>IS-Typ</th><th>Aufgabe</th><th>Beispiel</th></tr>
  <tr><td><strong>Operatives IS</strong></td><td>Unterst\u00fctzt allt\u00e4gliche Leistungsprozesse (Transaktionen)</td><td>Bestellsystem, Lagerverwaltung, Kassensystem</td></tr>
  <tr><td><strong>ERP-System</strong></td><td>Integriertes IS f\u00fcr alle betrieblichen Funktionsbereiche</td><td>SAP, Oracle ERP</td></tr>
  <tr><td><strong>Planungssystem</strong></td><td>Unterst\u00fctzt F\u00fchrungskr\u00e4fte bei Planungsaufgaben</td><td>Budgetplanung, Kapazit\u00e4tsplanung</td></tr>
  <tr><td><strong>Kontrollsystem</strong></td><td>Soll-Ist-Vergleiche, Korrekturma\u00dfnahmen</td><td>Abweichungsanalyse im Controlling</td></tr>
  <tr><td><strong>MUS</strong></td><td>Managementunterst\u00fctzungssystem = Planungs- + Kontrollsysteme</td><td>BI-Dashboards, Balanced Scorecard</td></tr>
  <tr><td><strong>B\u00fcro-IS</strong></td><td>Kommunikation und Zusammenarbeit</td><td>E-Mail, Textverarbeitung, Videokonferenz</td></tr>
</table>
<div class="def-box"><div class="def-label">Horizontale vs. vertikale Integration</div>
<strong>Horizontal</strong>: Verbindet Teilsysteme aus verschiedenen <em>Funktionsbereichen</em> auf gleicher Ebene (z.B. Einkauf + Vertrieb).<br>
<strong>Vertikal</strong>: Verbindet Teilsysteme des gleichen Bereichs auf <em>verschiedenen Ebenen</em> (z.B. Transaktions-IS + MUS im Finanzwesen).
</div>`,
      merke: `Operatives IS (Transaktionen) \u2192 ERP (integriert) \u2192 Planungs+Kontroll = MUS \u2192 B\u00fcro-IS (Kommunikation)`,
      schritte: [
        {
          titel: "Schritt 1: Operatives IS vs. ERP",
          inhalt: `<p><strong>Operatives IS</strong>: Unterst\u00fctzt das Tagesgesch\u00e4ft</p>
<p>\ud83d\udce6 Typisch: viele Details, strukturierte Daten, hohe Transaktionszahlen</p>
<br>
<p><strong>ERP (Enterprise Resource Planning)</strong>: Spezieller Typ des operativen IS</p>
<p>\ud83d\udd17 Integriert <em>alle</em> betrieblichen Funktionsbereiche in <em>einem</em> System<br>
\ud83d\udcbe Gemeinsame Datenbasis = kein Datenchaos<br>
\ud83c\udfc6 Marktf\u00fchrer: SAP</p>`
        },
        {
          titel: "Schritt 2: Planungssystem & Kontrollsystem = MUS",
          inhalt: `<p><strong>Planungssystem</strong>: Hilft F\u00fchrungskr\u00e4ften bei der Planung</p>
<p>\u2192 Budgets, Kapazit\u00e4ten, Personalplanung</p>
<br>
<p><strong>Kontrollsystem</strong>: \u00dcberwacht Planerf\u00fcllung</p>
<p>\u2192 Soll-Ist-Vergleiche, Abweichungsanalyse</p>
<br>
<p><strong>MUS (Managementunterst\u00fctzungssystem)</strong> = Sammelbegriff:</p>
<p>\ud83d\udccb Planungssystem + Kontrollsystem zusammen<br>
\ud83d\udcca Beispiel: Business Intelligence Dashboards</p>`
        },
        {
          titel: "Schritt 3: B\u00fcro-IS & Integration",
          inhalt: `<p><strong>B\u00fcro-IS</strong>: Unterst\u00fctzt Kommunikation & Zusammenarbeit</p>
<p>\ud83d\udce7 E-Mail, Kalender, Videokonferenzen<br>
\ud83d\udcdd Textverarbeitung, Pr\u00e4sentationen, Ablage</p>
<br>
<p><strong>Integration der IS-Typen</strong>:</p>
<table class="erk-table">
  <tr><th>Art</th><th>Was wird verbunden?</th></tr>
  <tr><td>Horizontal</td><td>Verschiedene Funktionsbereiche (Einkauf \u2194 Vertrieb)</td></tr>
  <tr><td>Vertikal</td><td>Gleicher Bereich, verschiedene Ebenen (Operativ \u2194 Management)</td></tr>
</table>`
        },
        {
          titel: "Schritt 4: Hansen vs. klassische IS-Pyramide",
          inhalt: `<p>Vergleich: <strong>Hansen-Terminologie</strong> vs. klassische Pyramide</p>
<table class="erk-table">
  <tr><th>Hansen</th><th>Klassisch (Pyramide)</th></tr>
  <tr><td>Operatives IS / ERP</td><td>ERP (operativ)</td></tr>
  <tr><td>Planungssystem / MUS</td><td>MIS (taktisch), DSS (strategisch)</td></tr>
  <tr><td>MUS (Kontrollsystem)</td><td>EIS / F\u00dcIS (Top-Management)</td></tr>
  <tr><td>B\u00fcro-IS</td><td>Büroinformationssystem</td></tr>
</table>
<p>\ud83d\udccc <strong>Klausurtipp</strong>: Seidlmeier nutzt Hansens Terminologie. Kenne beide Systeme!</p>`
        }
      ],
      interaktion: [
        { frage: "Was ist ein ERP-System nach Hansen?", optionen: ["Ein Planungssystem f\u00fcr das Top-Management", "Ein integriertes IS f\u00fcr alle betrieblichen Funktionsbereiche", "Ein B\u00fcro-IS f\u00fcr Kommunikation", "Ein Kontrollsystem f\u00fcr Soll-Ist-Vergleiche"], richtig: 1, erklaerung: "ERP (Enterprise Resource Planning): Integriertes IS, das alle wesentlichen Funktionsbereiche unterst\u00fctzt. Ziel: laufenden Ressourceneinsatz steuern und abwickeln." },
        { frage: "Was ist ein MUS?", optionen: ["Ein Kassensystem f\u00fcr den Einzelhandel", "Mobile Unterst\u00fctzungssystem", "Managementunterst\u00fctzungssystem = Planungs- + Kontrollsysteme", "Ein ERP-System von Microsoft"], richtig: 2, erklaerung: "MUS = Managementunterst\u00fctzungssystem: Sammelbegriff f\u00fcr Planungs- und Kontrollsysteme. Unterst\u00fctzt F\u00fchrungskr\u00e4fte bei Planung und Kontrolle." },
        { frage: "Was unterscheidet horizontale von vertikaler Integration?", optionen: ["Horizontal = verschiedene Ebenen, Vertikal = verschiedene Bereiche", "Horizontal = verschiedene Funktionsbereiche gleicher Ebene, Vertikal = gleicher Bereich verschiedener Ebenen", "Horizontal = intern, Vertikal = extern", "Horizontal = Software, Vertikal = Hardware"], richtig: 1, erklaerung: "Horizontal: verbindet verschiedene Funktionsbereiche (z.B. Einkauf + Vertrieb). Vertikal: verbindet gleichen Bereich auf verschiedenen Ebenen (z.B. operativ + taktisch)." }
      ]
    }
  ],
  quiz: [
    { frage: "IKS steht f\u00fcr?", optionen: ["Internationale Kommunikationsstandards", "Informations- und Kommunikationssysteme", "Integrierte Kontrollsysteme", "Informatik-Kernstrukturen"], richtig: 1, erklaerung: "IKS = Informations- und Kommunikationssysteme." },
    { frage: "WI verbindet ...", optionen: ["BWL+Mathe", "Informatik+Physik", "BWL+Informatik", "Jura+IT"], richtig: 2, erklaerung: "BWL + Informatik (+ Systemtheorie)." },
    { frage: "ERP-System ist ...", optionen: ["Betriebssystem", "Ressourcenplanung", "Framework", "Netzwerkprotokoll"], richtig: 1, erklaerung: "ERP = Enterprise Resource Planning." },
    { frage: "Prim\u00e4re Aktivit\u00e4ten der Wertkette?", optionen: ["Personal+Techno", "Eingangslogistik, Produktion, Ausgangslogistik, Marketing, Service", "Nur Marketing", "Beschaffung+Infra"], richtig: 1, erklaerung: "5 prim\u00e4re Aktivit\u00e4ten." },
    { frage: "Gesch\u00e4ftsprozess ist ...", optionen: ["Nur IT", "Aktivit\u00e4ten: Input\u2192Output", "Organigramm", "Nur Finanzen"], richtig: 1, erklaerung: "Zusammenh\u00e4ngende Aktivit\u00e4ten, Input\u2192Output." },
    { frage: "Welches IS f\u00fcrs mittlere Management?", optionen: ["ERP", "MIS", "DSS", "EIS"], richtig: 1, erklaerung: "MIS = taktisch, mittleres Management." },
    { frage: "KEINE der 5 Porter-Kr\u00e4fte?", optionen: ["Substitute", "Kundenmacht", "Digitalisierungsdruck", "Rivalit\u00e4t"], richtig: 2, erklaerung: "Digitalisierungsdruck ist keine Porter-Kraft." },
    { frage: "DSS macht ...", optionen: ["Mitarbeiterdaten", "Entscheidungsunterst\u00fctzung", "Produktion", "Kundendaten"], richtig: 1, erklaerung: "DSS = Decision Support System." },
    { frage: "Prozesse gehen \u00fcber Abteilungsgrenzen weil ...", optionen: ["Schlecht organisiert", "Wertsch\u00f6pfung braucht mehrere Bereiche", "IT gibt es vor", "Management will es"], richtig: 1, erklaerung: "Wertsch\u00f6pfung erfordert mehrere Bereiche." }
  ],
  lueckentext: [
    { text: "WI ist die Wissenschaft von Entwurf, ___ und Einsatz computergest\u00fctzter ___ in Wirtschaft und Verwaltung.", luecken: ["Entwicklung", "Informationssysteme"], erklaerung: "WI-Definition." },
    { text: "Porters Modell umfasst ___ Wettbewerbskr\u00e4fte, darunter die Verhandlungsmacht der ___ und ___.", luecken: ["5", "Lieferanten", "Kunden"], erklaerung: "5-Kr\u00e4fte-Modell." },
    { text: "ERP-Systeme dienen der ___ und arbeiten auf der ___ Ebene.", luecken: ["Ressourcenplanung", "operativen"], erklaerung: "ERP = operativ." },
    { text: "Die prim\u00e4ren Aktivit\u00e4ten sind: Eingangslogistik, ___, Ausgangslogistik, Marketing & Vertrieb und ___.", luecken: ["Produktion", "Service"], erklaerung: "5 prim\u00e4re Aktivit\u00e4ten." }
  ],
  zuordnung: [
    { titel: "IS der Ebene zuordnen", paare: [
      { links: "ERP", rechts: "Operativ" },
      { links: "MIS", rechts: "Taktisch" },
      { links: "DSS", rechts: "Strategisch" },
      { links: "EIS", rechts: "Top-Management" }
    ]},
    { titel: "Porter-Kr\u00e4fte zuordnen", paare: [
      { links: "Amazon vs. Zalando", rechts: "Rivalit\u00e4t" },
      { links: "Neues Startup", rechts: "Neue Anbieter" },
      { links: "E-Book statt Buch", rechts: "Substitute" },
      { links: "Zulieferer erh\u00f6ht Preise", rechts: "Macht Lieferanten" }
    ]},
    { titel: "Wertketten-Aktivit\u00e4ten zuordnen", paare: [
      { links: "Produktion, Marketing, Service", rechts: "Prim\u00e4r" },
      { links: "Personal, Technologie, Beschaffung", rechts: "Unterst\u00fctzend" },
      { links: "Ein-/Ausgangslogistik", rechts: "Prim\u00e4r" },
      { links: "Unternehmensinfrastruktur", rechts: "Unterst\u00fctzend" }
    ]},
  ]
};

// ============================================================
// WINF-SEIDLMEIER - Kapitel 2
// ============================================================
FAECHER["winf-seidlmeier"].themen["system-modell"] = {
  name: "2. System, Modell, Daten & Information",
  zusammenfassung: `<h4>2. System, Modell, Daten und Information – Vollständige Zusammenfassung</h4>

<h5>📌 2.1 System</h5>
<div class="def-box"><div class="def-label">Definition System (Krallmann)</div>
Eine <strong>begrenzte Menge an zusammengehörigen Teilen (Elementen, Objekten)</strong>, die miteinander in Beziehung stehen. Das System umgibt eine Systemumwelt.
</div>
<table class="erk-table">
  <tr><th>Begriff</th><th>Erklärung</th><th>Beispiel (Computer)</th></tr>
  <tr><td><strong>Systemelement</strong></td><td>Teile, die Teilaufgaben erledigen (Input → Output)</td><td>Prozessor, RAM, Festplatte</td></tr>
  <tr><td><strong>Systemrelation</strong></td><td>Verbindungen / Beziehungen zwischen Elementen</td><td>Datenbus zwischen CPU und RAM</td></tr>
  <tr><td><strong>Systemumwelt</strong></td><td>Alles außerhalb des Systems</td><td>Tisch, Raum, Gebäude</td></tr>
  <tr><td><strong>Input</strong></td><td>Was ins System hineinfließt</td><td>Dateneingabe, Tastendruck</td></tr>
  <tr><td><strong>Output</strong></td><td>Was das System ausgibt</td><td>Bildschirmausgabe, Feedback</td></tr>
  <tr><td><strong>Offenes System</strong></td><td>Austauschbeziehungen mit der Umwelt (Regelfall)</td><td>Computer mit Netzwerkverbindung</td></tr>
  <tr><td><strong>Geschlossenes System</strong></td><td>Kein Input/Output – eher selten</td><td>Offline-Computer ohne Peripherie</td></tr>
</table>
<div class="def-box"><div class="def-label">Unternehmen als System</div>
Zweckgerichtetes, <strong>offenes, sozio-technisches System</strong>: Menschen (soziales Subsystem) + Technik (technisches Subsystem), ständig in Wechselwirkung mit der Umwelt. Für Gesamtaufgaben entstehen Bearbeitungs- bzw. Prozessketten.
</div>

<h5>📌 2.2 Modell</h5>
<div class="def-box"><div class="def-label">Definition Modell</div>
Eine <strong>künstlich geschaffene, vereinfachte Abbildung der Realität</strong> (realer Systeme oder Realitätsausschnitte). Vereinfachung = Weglassen nicht relevanter Bestandteile; Relevanz ergibt sich aus dem Modellierungszweck.
</div>
<p><strong>3 Grundeigenschaften jedes Modells (nach Stachowiak):</strong></p>
<table class="erk-table">
  <tr><th>Eigenschaft</th><th>Erklärung</th></tr>
  <tr><td><strong>Abbildungseigenschaft</strong></td><td>Modell ist Abbildung eines natürlichen oder künstlichen Originals</td></tr>
  <tr><td><strong>Verkürzungseigenschaft</strong></td><td>Modell erfasst nicht alle Attribute des Originals – nur die relevanten</td></tr>
  <tr><td><strong>Pragmatische Eigenschaft</strong></td><td>Modell ist für bestimmte Subjekte, zu bestimmtem Zweck, in bestimmtem Zeitraum gedacht</td></tr>
</table>
<p><strong>Arten von Modellen:</strong> Reale Modelle (z.B. Miniatur, Architekturmodell) · Theoretische Modelle (z.B. Schaltplan, Prozessdiagramm)</p>
<p><em>Merke: Der Prozess selbst ist bereits ein Modell der Wirklichkeit!</em></p>

<h5>📌 Wertschöpfungskette nach Porter</h5>
<p>Das Unternehmen als Prozessmodell. Zeigt, welche Aktivitäten gemeinsam Wert für den Kunden schaffen:</p>
<table class="erk-table">
  <tr><th>Art</th><th>Aktivitäten</th></tr>
  <tr><td><strong>Primäre Aktivitäten</strong></td><td>Eingangslogistik · Operationen/Produktion · Ausgangslogistik · Marketing &amp; Vertrieb · Kundendienst</td></tr>
  <tr><td><strong>Unterstützende Aktivitäten</strong></td><td>Unternehmensinfrastruktur · Personalwirtschaft · Technologieentwicklung · Beschaffung</td></tr>
</table>
<p><strong>WI-Verbindung:</strong> Jede Aktivität kann durch ein IS unterstützt, automatisiert oder optimiert werden. ERP-Systeme decken typischerweise mehrere Aktivitäten ab.</p>

<h5>📌 2.3 Daten und Information – Semiotik (Zeichenlehre)</h5>
<table class="erk-table">
  <tr><th>Ebene</th><th>Begriff</th><th>Definition</th><th>Beispiel</th></tr>
  <tr><td><strong>Syntaktisch</strong></td><td>Zeichen / Daten</td><td>Maschinell verarbeitbare Zeichen(-ketten) mit gültiger Struktur. Zeichenvorrat: Buchstaben, Ziffern, Sonderzeichen</td><td>„Otto", „Haus" ✅ / „sjhfdbhk" ❌</td></tr>
  <tr><td><strong>Semantisch</strong></td><td>Information</td><td>Daten mit Bedeutung in einem Kontext – können verstanden und interpretiert werden</td><td>„Temperatur = 38,5°C" = Fieber</td></tr>
  <tr><td><strong>Pragmatisch</strong></td><td>Wissen</td><td>Zweckorientierte, vernetzte Information. Dient der Gewinnung von Informationen aus Daten und der Entscheidungsfindung</td><td>„38,5°C → Arzt aufsuchen"</td></tr>
</table>

<h5>📌 Besondere Merkmale von Informationen (Picot/Franck)</h5>
<table class="erk-table">
  <tr><th>Merkmal</th><th>Erklärung</th></tr>
  <tr><td>Immaterielles Gut</td><td>Information wird nicht verbraucht – kann unbegrenzt oft genutzt werden</td></tr>
  <tr><td>Kostenverursachung</td><td>Beschaffung, Erzeugung, Nutzung, Weiterleitung verursachen Kosten</td></tr>
  <tr><td>Leichter Transport</td><td>Informationen können sehr leicht weitergeleitet werden → Tendenz zur Diffusion (auch negativ!)</td></tr>
  <tr><td>Keine Originale</td><td>Käufer erwirbt immer nur eine Kopie, nie das Original</td></tr>
  <tr><td>Wert schwer bestimmbar</td><td>Informationen besitzen einen Wert, dessen Bewertung aber oft Probleme bereitet</td></tr>
</table>`,
  erklaerungen: [
    {
      titel: "\u{1F310} Der Systembegriff",
      inhalt: `<div class="def-box"><div class="def-label">System (Vorlesung, Folie 2.-3)</div>
Eine <strong>begrenzte Menge an zusammengeh\u00f6rigen Teilen</strong> (Elementen, Objekten), die miteinander in <strong>Beziehung</strong> stehen.<br><br>
\u2022 Das System umgibt eine <strong>Systemumwelt</strong>. Zwischen einem offenen System und seiner Umwelt bestehen Austauschbeziehungen zum Input-/Output-Transfer von Informationen, Materie und Energie.<br>
\u2022 Systemelemente erledigen <strong>zielgerichtet Teilaufgaben</strong>, indem sie Input zu Output verarbeiten. F\u00fcr Gesamtaufgaben entstehen in Systemen Bearbeitungs- bzw. Prozessketten.<br>
\u2022 Unternehmen = <strong>Zweckgerichtetes, offenes, sozio-technisches System</strong> (mit menschlichen und technischen Elementen)</div>
<table class="erk-table">
  <tr><th>Begriff</th><th>Bedeutung (Vorlesung)</th></tr>
  <tr><td><strong>Systemelement</strong></td><td>Teile im System (z.B. Teile im Computer)</td></tr>
  <tr><td><strong>Systemrelation</strong></td><td>Elemente sind miteinander verbunden</td></tr>
  <tr><td><strong>Systemstruktur</strong></td><td>Gesamtheit der Beziehungen (Relationen) zwischen den Systemelementen</td></tr>
  <tr><td><strong>Systemumwelt</strong></td><td>Alles außerhalb des Systems (z.B. Tisch, Raum, Gebäude)</td></tr>
  <tr><td><strong>Systemgrenze</strong></td><td>Trennt das System von seiner Umwelt; legt fest, was zum System gehört</td></tr>
  <tr><td><strong>Input</strong></td><td>Dateneingabe / kommt von außen ins System</td></tr>
  <tr><td><strong>Output</strong></td><td>Feedback / Ergebnis des Systems</td></tr>
  <tr><td><strong>Rückkopplung</strong></td><td>Output beeinflusst zukünftigen Input (Feedback-Schleife)</td></tr>
</table>`,
      beispiel: `Unternehmen = offenes System (Austausch mit Kunden, Lieferanten).`,
      schritte: [
        {
          titel: "Schritt 1: Die drei Bestandteile eines Systems",
          inhalt: `<p>Jedes System besteht aus genau diesen drei Dingen:</p>
<p>🔵 <strong>Elemente</strong> – die Bausteine (z.B. Mitarbeiter, Maschinen, Abteilungen)<br>
🔗 <strong>Beziehungen (Relationen)</strong> – die Verbindungen zwischen Elementen<br>
⬛ <strong><span class="term" data-label="Systemgrenze" data-def="Trennt das System von seiner Umwelt. Definiert, welche Elemente zum System geh\u00f6ren und welche nicht.">Systemgrenze</span></strong> – was gehört dazu, was nicht?</p>
<p>Und: Das System ist mehr als die Summe seiner Teile – erst die Beziehungen machen es zum System.</p>`
        },
        {
          titel: "Schritt 2: System und seine Umwelt",
          inhalt: `<p>Jedes System existiert nicht im Vakuum – es hat eine <strong>Systemumwelt</strong>.</p>
<p>• <strong>Systeminput</strong> – kommt aus der Umwelt ins System<br>
• <strong>Systemoutput</strong> – geht aus dem System in die Umwelt<br>
• <strong>Rückkopplung</strong> – Output beeinflusst zukünftigen Input</p>
<div class="def-box"><div class="def-label">Beispiel Unternehmen</div>
Input: Rohstoffe, Mitarbeiter, Kapital → Transformation → Output: Produkte, Dienstleistungen</div>`
        },
        {
          titel: "Schritt 3: Offen vs. geschlossen",
          inhalt: `<p>Systeme lassen sich unterscheiden nach ihrem Verhältnis zur Umwelt:</p>
<table class="erk-table">
  <tr><th>Typ</th><th>Austausch mit Umwelt?</th><th>Beispiel</th></tr>
  <tr><td><strong>Offen</strong></td><td>✅ Ja</td><td>Unternehmen, Menschen</td></tr>
  <tr><td><strong>Geschlossen</strong></td><td>❌ Nein</td><td>Theoretisch; kaum in der Praxis</td></tr>
  <tr><td><strong>Isoliert</strong></td><td>❌ Weder Stoff noch Energie</td><td>Nur in der Physik als Ideal</td></tr>
</table>
<p>👉 In der WI sind praktisch alle relevanten Systeme <strong>offen</strong>.</p>`
        },
        {
          titel: "Schritt 4: Subsysteme und Hierarchie",
          inhalt: `<p>Systeme können <strong>ineinander geschachtelt</strong> sein:</p>
<p>🏢 Unternehmen (Gesamtsystem)<br>
→ 🏬 Abteilungen (Subsysteme)<br>
→ 👥 Teams (Sub-Subsysteme)<br>
→ 👤 Mitarbeiter (Elemente)</p>
<p>Jedes Element kann selbst ein System sein, wenn man es genauer betrachtet. Das nennt man <strong>Systemhierarchie</strong>.</p>`
        }
      ],
      interaktion: [
        { frage: "Was macht ein System aus?", optionen: ["Nur Elemente", "Elemente + Beziehungen + Grenze", "Nur Software", "Nur Hardware"], richtig: 1, erklaerung: "System = Elemente + Beziehungen + Systemgrenze." },
        { frage: "Ein Unternehmen ist ein ... System", optionen: ["Geschlossenes", "Offenes", "Isoliertes", "Statisches"], richtig: 1, erklaerung: "Austausch mit Umwelt = offenes System." },
        { frage: "Was sind Subsysteme?", optionen: ["Fehlerhafte Systeme", "Elemente, die selbst Systeme sind", "Kleine Computer", "Backup-Systeme"], richtig: 1, erklaerung: "Subsysteme = Elemente, die selbst wieder Systeme darstellen." },
        { frage: "Geschlossene Systeme ...", optionen: ["Tauschen mit Umwelt aus", "Tauschen NICHT mit Umwelt aus", "Existieren nicht", "Sind immer digital"], richtig: 1, erklaerung: "Geschlossen = kein Austausch mit Umwelt." },
        { frage: "Was ist die Systemgrenze?", optionen: ["Ein Zaun", "Trennung zwischen System und Umwelt", "Das Ende eines Programms", "Eine Firewall"], richtig: 1, erklaerung: "Systemgrenze trennt das System von seiner Umwelt." }
      ]
    },
    {
      titel: "\u{1F4D0} Der Modellbegriff (Stachowiak)",
      inhalt: `<div class="def-box"><div class="def-label">Modell (Vorlesung, Folie 2.-4)</div>
Eine <strong>k\u00fcnstlich geschaffene, vereinfachte Abbildung der Realit\u00e4t</strong> (realer Systeme oder von Realit\u00e4tsausschnitten)<br><br>
\u2022 <strong>Vereinfachung</strong> bedeutet das Weglassen von nicht relevanten Bestandteilen oder Eigenschaften<br>
\u2022 Die <strong>Relevanz</strong> ergibt sich aus dem <strong>Modellierungszweck</strong><br>
\u2022 Die \u00c4hnlichkeit zwischen Realit\u00e4t und Modell muss bez\u00fcglich <strong>Struktur, Funktion und Verhalten</strong> erhalten bleiben</div>
<table class="erk-table">
  <tr><th>Merkmal (Stachowiak)</th><th>Bedeutung</th><th>Beispiel</th></tr>
  <tr><td><strong>Abbildung</strong></td><td>Bildet etwas ab</td><td>Stadtplan bildet Stadt ab</td></tr>
  <tr><td><strong>Verk\u00fcrzung</strong></td><td>Nur relevante Eigenschaften</td><td>Keine Haust\u00fcren im Stadtplan</td></tr>
  <tr><td><strong>Pragmatisch</strong></td><td>Dient einem Zweck</td><td>Stadtplan f\u00fcr Navigation</td></tr>
</table>`,
      merke: `Modell = k\u00fcnstlich geschaffene, vereinfachte Abbildung der Realit\u00e4t \u2022 Vereinfachung = Weglassen des Irrelevanten \u2022 Relevanz ergibt sich aus dem Modellierungszweck`,
      schritte: [
        {
          titel: "Schritt 1: Was ist ein Modell?",
          inhalt: `<p>Ein Modell ist ein <strong>vereinfachtes Abbild der Realit\u00e4t</strong> \u2013 aber warum vereinfacht?</p>
<p>Weil wir immer nur den Teil abbilden, der f\u00fcr unseren <strong>Zweck relevant</strong> ist.</p>
<div class="def-box"><div class="def-label">Stachowiaks Definition</div>
Ein Modell ist eine <strong>Abbildung</strong> eines Originals, die nur <strong>bestimmte Merkmale</strong> f\u00fcr einen <strong>bestimmten Zweck</strong> herausgreift.</div>
<p>Beispiele: Stadtplan, Organigramm, Flussdiagramm, Architekturmodell</p>`
        },
        {
          titel: "Schritt 2: Die 3 Merkmale nach Stachowiak",
          inhalt: `<p>Stachowiak definiert jedes Modell \u00fcber <strong>3 Merkmale</strong>:</p>
<table class="erk-table">
  <tr><th>Merkmal</th><th>Bedeutung</th><th>Stadtplan-Beispiel</th></tr>
  <tr><td><strong>Abbildung</strong></td><td>Bildet ein Original ab</td><td>Stadtplan bildet die Stadt ab</td></tr>
  <tr><td><strong>Verk\u00fcrzung</strong></td><td>Nur relevante Eigenschaften</td><td>Keine Haust\u00fcren, kein Gr\u00fcn</td></tr>
  <tr><td><strong>Pragmatisch</strong></td><td>Dient einem konkreten Zweck</td><td>Zweck: Navigation/Orientierung</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Modelle in der Wirtschaftsinformatik",
          inhalt: `<p>In der Wirtschaftsinformatik sind Modelle <strong>\u00fcberall</strong>:</p>
<p>\ud83d\uddfa\ufe0f <strong>Prozessmodelle</strong> (ARIS, BPMN) \u2192 Gesch\u00e4ftsprozesse darstellen<br>
\ud83c\udfd7\ufe0f <strong>Datenmodelle</strong> (ER-Diagramme) \u2192 Datenstrukturen abbilden<br>
\ud83d\udcca <strong>Organigramme</strong> \u2192 Unternehmensstruktur zeigen<br>
\ud83d\udda5\ufe0f <strong>Use-Case-Diagramme</strong> \u2192 Systemfunktionen beschreiben</p>
<div class="def-box"><div class="def-label">Wichtig</div>
Jedes Modell ist nur so gut wie sein Zweck. Ein Modell f\u00fcr Controlling sieht anders aus als eines f\u00fcr IT-Entwicklung!</div>`
        },
        {
          titel: "Schritt 4: Merkhilfe AVP",
          inhalt: `<p>Eselsbrücke f\u00fcr die 3 Merkmale:</p>
<p>\ud83d\udd24 <strong>A</strong>bbildung \u2013 jedes Modell bildet ein Original ab<br>
\u2702\ufe0f <strong>V</strong>erk\u00fcrzung \u2013 nur das Relevante wird gezeigt<br>
\ud83c\udfaf <strong>P</strong>ragmatisch \u2013 immer f\u00fcr einen bestimmten Zweck</p>
<p>\u2192 <strong>AVP</strong> merken!</p>
<div class="def-box"><div class="def-label">Pr\u00fcfungstipp</div>
"Warum keine Haust\u00fcren im Stadtplan?" \u2192 Verk\u00fcrzung! Haust\u00fcren sind f\u00fcr Navigation irrelevant.</div>`
        }
      ],
      interaktion: [
        { frage: "Welches Merkmal: nur relevante Eigenschaften?", optionen: ["Abbildung", "Verk\u00fcrzung", "Pragmatisch", "Vereinfachung"], richtig: 1, erklaerung: "Verk\u00fcrzungsmerkmal: nicht alle, nur relevante Eigenschaften." },
        { frage: "Wer definierte die 3 Modellmerkmale?", optionen: ["Porter", "Hansen", "Stachowiak", "Seidlmeier"], richtig: 2, erklaerung: "Stachowiak: Allgemeine Modelltheorie." },
        { frage: "Pragmatisches Merkmal bedeutet ...", optionen: ["Schnell erstellt", "Dient einem bestimmten Zweck", "Besonders einfach", "Ist praxisnah"], richtig: 1, erklaerung: "Pragmatisch = f\u00fcr einen bestimmten Zweck erstellt." },
        { frage: "Ein Modell ist ...", optionen: ["Eine exakte Kopie", "Ein vereinfachtes Abbild", "Immer digital", "Immer 3D"], richtig: 1, erklaerung: "Modell = vereinfachtes Abbild der Realit\u00e4t." },
        { frage: "Warum zeigt ein Stadtplan keine Haust\u00fcren?", optionen: ["Abbildungsmerkmal", "Verk\u00fcrzungsmerkmal", "Pragmatisches Merkmal", "Fehler"], richtig: 1, erklaerung: "Haust\u00fcren sind f\u00fcr Navigation nicht relevant = Verk\u00fcrzung." }
      ]
    },
    {
      titel: "🔗 Modellarten & Wertschöpfungskette (Porter)",
      inhalt: `<p><strong>Arten von Modellen:</strong></p>
<table class="erk-table">
  <tr><th>Modellart</th><th>Beschreibung</th><th>Beispiel</th></tr>
  <tr><td><strong>Reale Modelle</strong></td><td>Physische, dreidimensionale Nachbildungen</td><td>Architekturmodell, Windkanal-Attrappe</td></tr>
  <tr><td><strong>Theoretische / formale Modelle</strong></td><td>Abstrakte, symbolische Abbildungen – in der WI am häufigsten</td><td>Organigramm, EPK-Diagramm, ER-Diagramm</td></tr>
  <tr><td><strong>Isomorphes Modell</strong></td><td>Vollständige, eindeutige Abbildung aller Eigenschaften</td><td>Nur theoretisch möglich</td></tr>
  <tr><td><strong>Homomorphes Modell</strong></td><td>Vereinfachte Abbildung: mehrere Eigenschaften werden zusammengefasst</td><td>Alle WI-Modelle in der Praxis</td></tr>
</table>
<p><small>📌 Merke: In der Praxis sind <strong>alle</strong> WI-Modelle homomorph – eine vollständige (isomorphe) Abbildung ist nur theoretisch denkbar.</small></p>
<hr style="margin:16px 0;border:none;border-top:1px solid #e2e8f0;">
<p><strong>Das Unternehmen als Prozessmodell – Wertschöpfungskette nach Porter:</strong></p>
<p><small>Quelle: Porter, M.: Wettbewerbsvorteile, 3. Aufl. 1992 (Campus), S. 62</small></p>
<table class="erk-table">
  <tr><th>Aktivitätstyp</th><th>Aktivitäten</th><th>Bedeutung für IS</th></tr>
  <tr><td><strong>Primäre Aktivitäten</strong><br><small>(direkt wertschöpfend)</small></td><td>Eingangslogistik · Produktion · Ausgangslogistik · Marketing &amp; Vertrieb · Kundendienst</td><td>Jede dieser Aktivitäten kann durch IS unterstützt werden</td></tr>
  <tr><td><strong>Unterstützende Aktivitäten</strong></td><td>Unternehmensinfrastruktur · Personalwirtschaft · Technologieentwicklung (F&amp;E) · Beschaffung</td><td>Ermöglichen die primären Aktivitäten</td></tr>
</table>`,
      merke: `Isomorph = vollständige Abbildung (nur theoretisch) • Homomorph = vereinfacht (Praxisfall) • Porter-Wertkette: 5 primäre + 4 unterstützende Aktivitäten`,
      flipcards: [
        { vorne: "Isomorphes Modell", hinten: "Vollständige, eindeutige Abbildung<br>aller Eigenschaften – nur <strong>theoretisch</strong> möglich" },
        { vorne: "Homomorphes Modell", hinten: "Vereinfachte Abbildung –<br>alle <strong>Praxis</strong>-Modelle der WI" },
        { vorne: "Primäre Aktivitäten (Porter)", hinten: "Eingangslogistik · Produktion · Ausgangslogistik<br>Marketing & Vertrieb · Kundendienst" },
        { vorne: "Unterstützende Aktivitäten (Porter)", hinten: "Infrastruktur · Personalwirtschaft<br>Technologieentwicklung · Beschaffung" }
      ],
      interaktion: [
        { frage: "Was ist ein homomorphes Modell?", optionen: ["Vollständige Abbildung aller Eigenschaften", "Vereinfachte Abbildung – mehrere Eigenschaften zusammengefasst", "Nur reale Modelle", "Nur digitale Modelle"], richtig: 1, erklaerung: "Homomorphes Modell = vereinfachte Abbildung. Alle WI-Praxismodelle sind homomorph." },
        { frage: "Welches Modell ist nur theoretisch möglich?", optionen: ["Homomorphes Modell", "Reales Modell", "Isomorphes Modell", "Formales Modell"], richtig: 2, erklaerung: "Isomorphes Modell = vollständige Abbildung aller Eigenschaften – in der Praxis nicht realisierbar." },
        { frage: "Was sind primäre Aktivitäten in Porters Wertschöpfungskette?", optionen: ["HR, IT, Beschaffung", "Eingangslogistik, Produktion, Ausgangslogistik, Marketing, Kundendienst", "Nur Produktion", "Infrastruktur und F&E"], richtig: 1, erklaerung: "Primäre Aktivitäten: Eingangslogistik · Produktion · Ausgangslogistik · Marketing & Vertrieb · Kundendienst." },
        { frage: "WI-Verbindung zur Wertschöpfungskette?", optionen: ["Keine Verbindung", "IS kann jede Aktivität unterstützen/automatisieren", "Nur IT-Abteilung relevant", "Nur Marketing"], richtig: 1, erklaerung: "Jede Aktivität der Wertschöpfungskette kann durch IS unterstützt, automatisiert oder optimiert werden." }
      ]
    },
    {
      titel: "\u{1F4AC} Semiotik: Syntax, Semantik, Pragmatik",
      inhalt: `<table class="erk-table">
  <tr><th>Ebene</th><th>Frage</th><th>Beispiel "110"</th></tr>
  <tr><td><strong>Syntax</strong></td><td>Form korrekt?</td><td>3 Ziffern, numerisch \u2713</td></tr>
  <tr><td><strong>Semantik</strong></td><td>Was bedeutet es?</td><td>110 = Polizei</td></tr>
  <tr><td><strong>Pragmatik</strong></td><td>Welche Wirkung?</td><td>Ich rufe die Polizei an</td></tr>
</table>`,
      merke: `Syntax = Form \u2022 Semantik = Bedeutung \u2022 Pragmatik = Wirkung/Handlung`,
      schritte: [
        {
          titel: "Schritt 1: Was ist Semiotik?",
          inhalt: `<p><strong>Semiotik</strong> = die Lehre von Zeichen und ihrer Bedeutung.</p>
<p>In der Wirtschaftsinformatik interessiert uns: Wie werden Daten zu <strong>verstandener Information</strong>?</p>
<p>Daf\u00fcr gibt es 3 Ebenen:</p>
<p>\ud83d\udccf <strong>Syntax</strong> \u2013 ist die Form richtig?<br>
\ud83d\udcad <strong>Semantik</strong> \u2013 was bedeutet das?<br>
\ud83c\udfaf <strong>Pragmatik</strong> \u2013 was wird dadurch ausgel\u00f6st?</p>`
        },
        {
          titel: "Schritt 2: Die 3 Ebenen an einem Beispiel",
          inhalt: `<p>Beispiel: Du siehst die Zahl <strong>"110"</strong></p>
<table class="erk-table">
  <tr><th>Ebene</th><th>Frage</th><th>Antwort f\u00fcr "110"</th></tr>
  <tr><td><strong>Syntax</strong></td><td>Form korrekt?</td><td>Ja \u2713 (3 Ziffern, numerisch)</td></tr>
  <tr><td><strong>Semantik</strong></td><td>Was bedeutet es?</td><td>110 = Polizei-Notruf</td></tr>
  <tr><td><strong>Pragmatik</strong></td><td>Was passiert?</td><td>Ich rufe die Polizei an</td></tr>
</table>`
        },
        {
          titel: "Schritt 3: Weitere Beispiele",
          inhalt: `<p>Noch ein Beispiel: E-Mail "Bitte schicken Sie mir die Rechnung"</p>
<table class="erk-table">
  <tr><th>Ebene</th><th>Analyse</th></tr>
  <tr><td><strong>Syntax</strong></td><td>Grammatikalisch korrekte S\u00e4tze \u2713</td></tr>
  <tr><td><strong>Semantik</strong></td><td>Aufforderung, ein Dokument zu senden</td></tr>
  <tr><td><strong>Pragmatik</strong></td><td>Empf\u00e4nger schickt die Rechnung</td></tr>
</table>
<div class="def-box"><div class="def-label">IT-Relevanz</div>
Datenbanken pr\u00fcfen Syntax automatisch. Semantik und Pragmatik muss der Mensch (oder KI) verstehen.</div>`
        },
        {
          titel: "Schritt 4: Merkhilfe & Kl\u00e4rung",
          inhalt: `<p>Verwechslungsgefahr Pragmatik in Semiotik vs. Stachowiak:</p>
<table class="erk-table">
  <tr><th>Kontext</th><th>"Pragmatisch" bedeutet</th></tr>
  <tr><td>Semiotik</td><td>Wirkung/Handlung des Zeichens</td></tr>
  <tr><td>Stachowiak</td><td>Modell dient einem Zweck</td></tr>
</table>
<p>Merkhilfe f\u00fcr Semiotik:</p>
<p>\ud83d\udccf <strong>S</strong>yntax = <strong>S</strong>chrift/Form<br>
\ud83d\udcad <strong>S</strong>emantik = <strong>S</strong>inn/Bedeutung<br>
\ud83c\udfaf <strong>P</strong>ragmatik = Handlungs-<strong>P</strong>ower</p>`
        }
      ],
      interaktion: [
        { frage: "'Was bedeutet das?' = welche Ebene?", optionen: ["Syntax", "Semantik", "Pragmatik", "Morphologie"], richtig: 1, erklaerung: "Semantik = Bedeutungsebene." },
        { frage: "Syntax befasst sich mit ...", optionen: ["Bedeutung", "Formale Regeln", "Handlung", "Kontext"], richtig: 1, erklaerung: "Syntax = formale Regeln der Zeichenanordnung." },
        { frage: "'Ich rufe die Polizei an' geh\u00f6rt zur ...", optionen: ["Syntax", "Semantik", "Pragmatik", "Phonetik"], richtig: 2, erklaerung: "Handlung/Wirkung = Pragmatik." },
        { frage: "'Tisch' hat 5 Buchstaben \u2013 welche Ebene?", optionen: ["Syntax", "Semantik", "Pragmatik", "Alle drei"], richtig: 0, erklaerung: "Formale Eigenschaft (Zeichenanzahl) = Syntax." },
        { frage: "'110 = Polizei-Notruf' \u2013 welche Ebene?", optionen: ["Syntax", "Semantik", "Pragmatik", "Lexik"], richtig: 1, erklaerung: "Die Bedeutung von 110 = Semantik." }
      ]
    },
    {
      titel: "\u{1F4BE} Daten vs. Information vs. Wissen",
      inhalt: `<div class="def-box"><div class="def-label">Zeichen (Vorlesung, Folie 2.-7)</div>
Basis zur Darstellung von Daten, Informationen und Wissen. Der <strong>Zeichenvorrat</strong> umfasst Buchstaben, Ziffern und Sonderzeichen.</div>
<div class="def-box"><div class="def-label">Daten</div>
<strong>Maschinell verarbeitbare Zeichen(-ketten)</strong> mit einer g\u00fcltigen Struktur (syntaktische Ebene)<br>
<small>Beispiel: \"Otto\", \"Haus\" ✓ &nbsp;&nbsp; Nicht: \"sjhfdbhkbfk\" ✗</small></div>
<div class="def-box"><div class="def-label">Information</div>
Daten mit <strong>Bedeutung in einem Kontext</strong> (semantische Ebene) \u2013 d.h. Informationen k\u00f6nnen <strong>verstanden und interpretiert</strong> werden</div>
<div class="def-box"><div class="def-label">Wissen</div>
<strong>Zweckorientierte, vernetzte Information</strong> (pragmatische Ebene). Wissen dient der Gewinnung von Informationen aus Daten.</div>
<div class="erk-tree">
  <div class="tree-root">Wissenstreppe</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#FEE2E2;"><strong>Zeichen</strong><br><small>1, a, #</small></div>
    <div class="tree-branch" style="background:#FEF3C7;"><strong>Daten</strong><br><small>syntaktische Ebene</small></div>
    <div class="tree-branch" style="background:#D1FAE5;"><strong>Information</strong><br><small>semantische Ebene</small></div>
    <div class="tree-branch" style="background:#DBEAFE;"><strong>Wissen</strong><br><small>pragmatische Ebene</small></div>
  </div>
</div>`,
      interaktion: [
        { frage: "Daten vs. Information?", optionen: ["Kein Unterschied", "Information = Daten + Bedeutung", "Daten sind digital", "Info ist analog"], richtig: 1, erklaerung: "Information = Daten + Kontext/Bedeutung." },
        { frage: "Was kommt nach Daten?", optionen: ["Zeichen", "Wissen", "Information", "Weisheit"], richtig: 2, erklaerung: "Zeichen \u2192 Daten \u2192 Information \u2192 Wissen." },
        { frage: "'20.03.2026' sind ...", optionen: ["Zeichen", "Daten", "Information", "Wissen"], richtig: 1, erklaerung: "Zeichen + Syntax (Datumsformat) = Daten." },
        { frage: "'Heute ist der 20. M\u00e4rz' ist ...", optionen: ["Zeichen", "Daten", "Information", "Wissen"], richtig: 2, erklaerung: "Daten + Bedeutung/Kontext = Information." },
        { frage: "'Im M\u00e4rz wird es w\u00e4rmer' ist ...", optionen: ["Daten", "Information", "Wissen", "Nur eine Meinung"], richtig: 2, erklaerung: "Information + Erfahrung = Wissen." }
      ],
      schritte: [
        {
          titel: "Schritt 1: Die Wissenstreppe",
          inhalt: `<p>Wie entsteht <strong>Wissen</strong> aus rohen Zeichen? \u2192 Die Wissenstreppe zeigt es Stufe f\u00fcr Stufe:</p>
<div class="erk-tree">
  <div class="tree-root">Wissenstreppe</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#FEE2E2;"><strong>Zeichen</strong><br><small>Einzelsymbole: 1, a, #</small></div>
    <div class="tree-branch" style="background:#FEF3C7;"><strong>Daten</strong><br><small>Zeichen + Syntax</small></div>
    <div class="tree-branch" style="background:#D1FAE5;"><strong>Information</strong><br><small>Daten + Bedeutung</small></div>
    <div class="tree-branch" style="background:#DBEAFE;"><strong>Wissen</strong><br><small>Info + Erfahrung</small></div>
  </div>
</div>`
        },
        {
          titel: "Schritt 2: Von Zeichen zu Daten",
          inhalt: `<p>Der erste Schritt: Zeichen werden zu <strong>Daten</strong>.</p>
<table class="erk-table">
  <tr><th>Stufe</th><th>Was kommt dazu?</th><th>Beispiel</th></tr>
  <tr><td><strong>Zeichen</strong></td><td>(Ausgangspunkt)</td><td>2, 0, 0, 3, 2, 6</td></tr>
  <tr><td><strong>Daten</strong></td><td>+ Syntax (Struktur/Regeln)</td><td>20.03.26 (Datumsformat)</td></tr>
</table>
<div class="def-box"><div class="def-label">Wichtig</div>
Daten sind noch <strong>bedeutungslos</strong>! "20.03.26" k\u00f6nnte ein Datum, ein Code, oder eine Seriennummer sein.</div>`
        },
        {
          titel: "Schritt 3: Von Daten zu Information zu Wissen",
          inhalt: `<p>Die oberen Stufen der Wissenstreppe:</p>
<table class="erk-table">
  <tr><th>Stufe</th><th>Was kommt dazu?</th><th>Beispiel</th></tr>
  <tr><td><strong>Daten</strong></td><td>(Ausgangspunkt)</td><td>20.03.2026</td></tr>
  <tr><td><strong>Information</strong></td><td>+ Bedeutung/Kontext</td><td>"Heute ist der 20. M\u00e4rz 2026"</td></tr>
  <tr><td><strong>Wissen</strong></td><td>+ Erfahrung/Vernetzung</td><td>"Im M\u00e4rz wird es wärmer"</td></tr>
</table>
<p>💡 Wissen ist vernetztes Verständnis – nicht nur eine Tatsache, sondern ein Zusammenhang!</p>
<div class="def-box"><div class="def-label">📌 Beispiel aus der Vorlesung (Folie 2-7): Devisenkurs</div>
<table class="erk-table">
  <tr><th>Stufe</th><th>Inhalt</th></tr>
  <tr><td><strong>Zeichen</strong></td><td>"1", ".", "1", "2" – einzelne Symbole</td></tr>
  <tr><td><strong>Daten</strong></td><td>1.12 – syntaktisch gültige Zeichenkette</td></tr>
  <tr><td><strong>Information</strong></td><td>"Euro 1 = 1,12 Dollar" – Bedeutung im Kontext</td></tr>
  <tr><td><strong>Wissen</strong></td><td>Auswirkung auf Import-/Exportpreise – zweckorientiert vernetzt</td></tr>
</table>
</div>`
        },
        {
          titel: "Schritt 4: Relevanz f\u00fcr die WI & Klausurtipps",
          inhalt: `<p>Warum ist diese Unterscheidung wichtig?</p>
<p>\ud83d\udcbb <strong>Datenbanken</strong> speichern <strong>Daten</strong> \u2013 noch keine Information<br>
\ud83d\udd0d <strong>Abfragen</strong> erzeugen <strong>Information</strong> durch Kontext<br>
\ud83e\udde0 <strong>KI/Business Intelligence</strong> versucht, <strong>Wissen</strong> zu generieren</p>
<div class="def-box"><div class="def-label">Klausurtipp</div>
Frage: "Sind die Kundendaten in der Datenbank Informationen?" \u2192 Nein! Erst mit Kontext (Abfrage, Auswertung) werden sie zur Information.</div>`
        }
      ]
    },
    {
      titel: "\u{1F4CA} Merkmale von Informationen",
      inhalt: `<p>Informationen verhalten sich <strong>anders als materielle G\u00fcter</strong> \u2013 das ist f\u00fcr IS-Design wichtig:</p>
<table class="erk-table">
  <tr><th>Merkmal</th><th>Bedeutung</th></tr>
  <tr><td><strong>Immateriell</strong></td><td>Werden durch Nutzung <strong>nicht verbraucht</strong> (Buch verliert Inhalt nicht beim Lesen)</td></tr>
  <tr><td><strong>Kosten</strong></td><td>Entstehen bei Beschaffung, Erzeugung, Nutzung, Speicherung und Schutz</td></tr>
  <tr><td><strong>Leichter Transport</strong></td><td>Sehr leicht und schnell \u00fcbertragbar (geringe Transportkosten)</td></tr>
  <tr><td><strong>Diffusion</strong></td><td>Neigen zum unkontrollierten Verbreiten \u2013 <strong>Datenschutzrisiko!</strong></td></tr>
  <tr><td><strong>Nur Kopie erwerbbar</strong></td><td>K\u00e4ufer erwerben immer nur eine Kopie, nie das Original</td></tr>
  <tr><td><strong>Schwer bewertbar</strong></td><td>Wert ist kontextabh\u00e4ngig und schwer zu bestimmen</td></tr>
</table>`,
      beispiel: `Ein Musikst\u00fcck (Information): Wenn du es h\u00f6rst, bleibt es trotzdem noch da \u2192 <strong>immateriell</strong>.<br>
Wenn du es weiterleist: Du hast es noch immer \u2192 <strong>nur Kopie</strong>.<br>
Wenn es sich viral verbreitet: <strong>Diffusion</strong> \u2013 Datenschutzproblem!`,
      merke: `6 Merkmale: Immateriell \u2022 Kostenbehaftet \u2022 Leichter Transport \u2022 Diffusion \u2022 Nur Kopie \u2022 Schwer bewertbar`,
      flipcards: [
        { vorne: "Immateriell", hinten: "Wird durch Nutzung<br><strong>nicht verbraucht</strong>" },
        { vorne: "Diffusion", hinten: "Unkontrolliertes<br>Verbreiten \u2013 Datenschutz!" },
        { vorne: "Nur Kopie", hinten: "K\u00e4ufer erwerben<br>nie das Original" },
        { vorne: "Schwer bewertbar", hinten: "Wert ist<br>kontextabh\u00e4ngig" }
      ],
      schritte: [
        {
          titel: "Schritt 1: Warum sind diese Merkmale wichtig?",
          inhalt: `<p>Informationen sind kein normales Gut. Sie verhalten sich anders \u2013 und wer IS entwickelt oder nutzt, muss das verstehen.</p>
<p>Kernfrage: <em>Warum kann man Informationen nicht einfach wie Waren kaufen und verkaufen?</em></p>
<p>\ud83d\udee1\ufe0f Weil sie sich verbreiten, kopiert werden k\u00f6nnen und ihren Wert kaum benennen lassen.</p>`
        },
        {
          titel: "Schritt 2: Immateriell & Nicht-Verbrauch",
          inhalt: `<p>Materiell: Ein Apfel \u2013 gegessen = weg.<br>
Immateriell: Eine Information \u2013 geteilt = noch immer vorhanden!</p>
<div class="def-box"><div class="def-label">Konsequenz f\u00fcr IS</div>
IS k\u00f6nnen Informationen beliebig oft ausgeben, ohne dass sie verbraucht werden. Das macht skalierbare Dienste wie Streaming m\u00f6glich.</div>`
        },
        {
          titel: "Schritt 3: Diffusion \u2013 das Datenschutzrisiko",
          inhalt: `<p><strong>Diffusion</strong> = Informationen neigen dazu, sich <strong>unkontrolliert</strong> zu verbreiten.</p>
<p>Beispiele:<br>
\u2022 Kundendaten werden ungewollt weitergegeben<br>
\u2022 Betriebsgeheimnisse gelangen an die \u00d6ffentlichkeit<br>
\u2022 Passworts\u00f6rter landen im Darknet</p>
<p>\ud83d\udee1\ufe0f Deshalb: <strong>DSGVO</strong>, Datenschutzbeauftragte, Verschl\u00fcsselung in IS!</p>`
        },
        {
          titel: "Schritt 4: Nur Kopie & schwere Bewertbarkeit",
          inhalt: `<p><strong>Nur Kopie:</strong> Wenn du eine Information kaufst, bekommst du immer nur eine Kopie des Originals. Das Original bleibt beim Sender.</p>
<p>\u2192 Problem f\u00fcr Urheberrecht und digitale G\u00fcter (Musik, Software, eBooks).</p>
<p><strong>Schwer bewertbar:</strong> Was ist eine Information wert?</p>
<p>\u2022 Ein Tipp an der B\u00f6rse kann Millionen wert sein \u2013 oder nichts<br>
\u2022 Kundendaten \u2013 wertvoll f\u00fcr das Marketing, sensibel f\u00fcr Datenschutz<br>
\u2022 Wert h\u00e4ngt vom <strong>Kontext und Empf\u00e4nger</strong> ab</p>`
        }
      ],
      interaktion: [
        { frage: "Welches Merkmal beschreibt, dass Informationen sich unkontrolliert verbreiten?", optionen: ["Immateriell", "Diffusion", "Leichter Transport", "Schwer bewertbar"], richtig: 1, erklaerung: "Diffusion = Informationen neigen zur unkontrollierten Verbreitung \u2013 Datenschutzrisiko!" },
        { frage: "Was bedeutet 'immateriell' bei Informationen?", optionen: ["Sie sind unsichtbar", "Sie werden durch Nutzung nicht verbraucht", "Sie haben keinen Wert", "Sie k\u00f6nnen nicht gespeichert werden"], richtig: 1, erklaerung: "Immateriell = werden durch Nutzung NICHT verbraucht." },
        { frage: "Was erh\u00e4lt ein K\u00e4ufer einer Information?", optionen: ["Das Original", "Nichts", "Eine Kopie", "Eine Lizenz"], richtig: 2, erklaerung: "K\u00e4ufer erwerben immer nur eine Kopie, nie das Original." },
        { frage: "Warum ist der Wert von Informationen schwer bestimmbar?", optionen: ["Sie \u00e4ndern sich st\u00e4ndig", "Er ist kontextabh\u00e4ngig", "Sie sind zu komplex", "Niemand braucht sie"], richtig: 1, erklaerung: "Der Wert von Informationen h\u00e4ngt stark vom Kontext und Empf\u00e4nger ab." }
      ]
    }
  ],
  quiz: [
    { frage: "Was ist ein System?", optionen: ["Nur Software", "Elemente + Beziehungen + Grenze", "Ein Bauteil", "Nur Hardware"], richtig: 1, erklaerung: "System = Elemente + Beziehungen + Systemgrenze." },
    { frage: "Verk\u00fcrzungsmerkmal?", optionen: ["Modell wird k\u00fcrzer", "Nur relevante Eigenschaften", "K\u00fcrzere Lebensdauer", "Schneller erstellt"], richtig: 1, erklaerung: "Nur relevante Eigenschaften werden abgebildet." },
    { frage: "Pragmatik beschreibt ...", optionen: ["Formale Korrektheit", "Bedeutung", "Wirkung/Handlung", "Sch\u00f6nheit"], richtig: 2, erklaerung: "Pragmatik = Wirkung, Handlung." },
    { frage: "Nach Daten kommt ...", optionen: ["Zeichen", "Wissen", "Information", "Weisheit"], richtig: 2, erklaerung: "Zeichen\u2192Daten\u2192Information\u2192Wissen." },
    { frage: "Offene vs. geschlossene Systeme?", optionen: ["Offene gr\u00f6\u00dfer", "Offene tauschen mit Umwelt", "Geschlossene \u00e4lter", "Kein Unterschied"], richtig: 1, erklaerung: "Offene tauschen mit Umwelt aus." },
    { frage: "3 Modellmerkmale von ...", optionen: ["Porter", "Hansen", "Stachowiak", "Seidlmeier"], richtig: 2, erklaerung: "Stachowiak." },
    { frage: "Syntax = ?", optionen: ["Bedeutung", "Formale Regeln", "Handlung", "Programmierbefehl"], richtig: 1, erklaerung: "Syntax = formale Regeln." },
    { frage: "Unternehmen ist ein ... System", optionen: ["Geschlossenes", "Offenes", "Isoliertes", "Statisches"], richtig: 1, erklaerung: "Offenes System (Austausch mit Umwelt)." },
    { frage: "Pragmatisches Merkmal eines Modells?", optionen: ["Pragmatisch erstellt", "Dient bestimmtem Zweck", "Besonders einfach", "Schnell gebaut"], richtig: 1, erklaerung: "F\u00fcr einen bestimmten Zweck erstellt." },
    { frage: "'110=Polizei' \u2013 welche Ebene?", optionen: ["Syntax", "Semantik", "Pragmatik", "Lexik"], richtig: 1, erklaerung: "Bedeutung = Semantik." }
  ],
  lueckentext: [
    { text: "Ein System besteht aus ___, die \u00fcber ___ verbunden sind und eine ___ zur Umwelt haben.", luecken: ["Elementen", "Beziehungen", "Grenze"], erklaerung: "Drei Bestandteile eines Systems." },
    { text: "Die 3 Modellmerkmale nach Stachowiak: ___, ___ und pragmatisches Merkmal.", luecken: ["Abbildungsmerkmal", "Verk\u00fcrzungsmerkmal"], erklaerung: "Stachowiaks Modelltheorie." },
    { text: "Syntax = ___, Semantik = ___, Pragmatik = ___.", luecken: ["Form", "Bedeutung", "Wirkung"], erklaerung: "Die drei semiotischen Ebenen." },
    { text: "Wissenstreppe: Zeichen \u2192 ___ \u2192 ___ \u2192 Wissen.", luecken: ["Daten", "Information"], erklaerung: "Zeichen+Syntax=Daten, +Bedeutung=Info, +Erfahrung=Wissen." }
  ],
  zuordnung: [
    { titel: "Semiotische Ebenen zuordnen", paare: [
      { links: "Formale Zeichenregeln", rechts: "Syntax" },
      { links: "Bedeutung der Nachricht", rechts: "Semantik" },
      { links: "Handlung/Wirkung", rechts: "Pragmatik" }
    ]},
    { titel: "Wissenstreppe zuordnen", paare: [
      { links: "Einzelne Symbole: 1, a, #", rechts: "Zeichen" },
      { links: "20.03.2026 (mit Syntax)", rechts: "Daten" },
      { links: "Heute ist der 20. M\u00e4rz", rechts: "Information" },
      { links: "Im M\u00e4rz wird es w\u00e4rmer", rechts: "Wissen" }
    ]},
    { titel: "Modellmerkmale zuordnen", paare: [
      { links: "Stadtplan bildet Stadt ab", rechts: "Abbildungsmerkmal" },
      { links: "Keine Haust\u00fcren im Stadtplan", rechts: "Verk\u00fcrzungsmerkmal" },
      { links: "Stadtplan f\u00fcr Navigation", rechts: "Pragmatisches Merkmal" }
    ]}
  ]
};


FAECHER["winf-seidlmeier"].themen["modellierung-org-is"] = {
  name: "3. Modellierung von Organisationen und IS",
  zusammenfassung: `<h4>3. Die Modellierung von Organisationen und Informationssystemen</h4>

<h5>📌 3.1 Die Prozesssicht auf die WI</h5>
<p>Die prozessorientierte WI stellt den <strong>Prozess</strong> ins Zentrum. IS unterstützen Prozesse, Prozesse folgen der Geschäftsstrategie – und IS liefern wiederum Informationen, um die Strategie anzupassen.</p>
<div class="def-box"><div class="def-label">Dreieck: Strategie – Prozess – IS</div>
<strong>Geschäftsstrategie</strong> → definiert Ziele → <strong>Prozess</strong> → setzt Ziele um → <strong>Informationssystem</strong> → unterstützt den Prozess → liefert Feedback an die Strategie
</div>

<h5>📌 3.2 Prozesstypen</h5>
<table class="erk-table">
  <tr><th>Typ</th><th>Beschreibung</th><th>Beispiel</th></tr>
  <tr><td><strong>Geschäftsprozesse</strong></td><td>Wertschöpfende Kernprozesse mit direktem Kundenbezug</td><td>Auftragsabwicklung, Produktion</td></tr>
  <tr><td><strong>Unterstützungsprozesse</strong></td><td>Interne Prozesse ohne direkten Kundenwert, aber notwendig</td><td>Buchhaltung, IT-Support</td></tr>
  <tr><td><strong>Führungsprozesse</strong></td><td>Steuerung und Kontrolle des Unternehmens</td><td>Budgetplanung, Strategieentwicklung</td></tr>
</table>
<p><em>Geschäfts- + Unterstützungsprozesse = Leistungsprozesse. Zusammen mit Führungsprozessen = Betriebliche Prozesse.</em></p>

<h5>📌 3.3 Organisations-Modellierung</h5>
<table class="erk-table">
  <tr><th>Art</th><th>Fragestellung</th><th>Darstellung</th><th>Beispiel</th></tr>
  <tr><td><strong>Aufbauorganisation</strong></td><td>WER ist wofür zuständig?</td><td>Organigramm (statisch)</td><td>Lean Drive GmbH: Vertrieb, Einkauf, Auftragsabwicklung ...</td></tr>
  <tr><td><strong>Ablauforganisation</strong></td><td>WIE laufen Aufgaben ab?</td><td>Prozessdiagramm (dynamisch)</td><td>Check-in am Flughafen: Ereignis → Funktion → Ereignis ...</td></tr>
</table>

<h5>📌 3.4 IS-Modellierung: Die EPK</h5>
<div class="def-box"><div class="def-label">EPK = Ereignisgesteuerte Prozesskette</div>
Ein Prozessmodell, aus dem ein IS-Modell abgeleitet wird. Drei Dimensionen:<br>
• <strong>IS-Funktionen</strong> – was macht das System? (grüne Rechtecke)<br>
• <strong>IS-Daten/Informationen</strong> – womit arbeitet es? (graue Dokumente)<br>
• <strong>IS-Anwender</strong> – wer nutzt es? (orange Personen/Organisationseinheiten)
</div>
<table class="erk-table">
  <tr><th>EPK-Element</th><th>Form</th><th>Bedeutung</th></tr>
  <tr><td><strong>Ereignis</strong></td><td>Lila Hexagon</td><td>Zustand, der einen Prozess auslöst oder beendet</td></tr>
  <tr><td><strong>Funktion</strong></td><td>Grünes Rechteck (abgerundet)</td><td>Aktivität/Aufgabe im Prozess</td></tr>
  <tr><td><strong>Organisationseinheit</strong></td><td>Orange Personen-Symbol</td><td>Wer führt die Funktion aus?</td></tr>
  <tr><td><strong>Dokument/Daten</strong></td><td>Graues Dokument-Symbol</td><td>Welche Daten fließen ein oder aus?</td></tr>
</table>

<h5>📌 3.5 Die ARIS-Methodik</h5>
<div class="def-box"><div class="def-label">ARIS = Architektur integrierter Informationssysteme</div>
Methodik zur Modellierung von Unternehmen und IS durch <strong>4 Beschreibungssichten</strong>. Ziel: Reduktion von Komplexität durch getrenntes Betrachten und anschließendes Zusammenführen.
</div>
<table class="erk-table">
  <tr><th>Sicht</th><th>Frage</th><th>Darstellung</th></tr>
  <tr><td><strong>Datensicht</strong></td><td>Welche Daten werden benötigt?</td><td>Datenmodell (z.B. ER-Diagramm)</td></tr>
  <tr><td><strong>Funktionssicht</strong></td><td>Welche Aufgaben gibt es?</td><td>Funktionsbaum</td></tr>
  <tr><td><strong>Organisationssicht</strong></td><td>Wer ist zuständig?</td><td>Organigramm</td></tr>
  <tr><td><strong>Steuerungs-/Prozesssicht</strong></td><td>Wie laufen Prozesse ab?</td><td>EPK (integriert alle Sichten)</td></tr>
</table>
<p><strong>Kernprinzip:</strong> Jede Sicht ist ein „Baustein" – die Steuerungs-/Prozesssicht (EPK) fügt alle Bausteine zusammen.</p>

<h5>📌 3.6 Anwendungsbeispiel: KDIS (ProElectron)</h5>
<div class="def-box"><div class="def-label">Ausgangssituation</div>
ProElectron Inc. (Seattle) – Hersteller von Kassensystemen. Expandierendes Unternehmen → wachsende Datenflut im Kundendienst (KD). Lösung: KDIS = Kundendienst-Informationssystem.
</div>
<p><strong>Kundendienst-Prozessstruktur:</strong></p>
<table class="erk-table">
  <tr><th>Hauptprozess</th><th>Teilprozesse</th></tr>
  <tr><td>Auftragsannahme</td><td>Erfassung der Auftragsdaten, Entgegennahme der Kasse</td></tr>
  <tr><td>Auftragsbearbeitung</td><td>Wartung der Kasse, Reparatur der Kasse</td></tr>
  <tr><td>Auftragsabschluss</td><td>Herstellung Versandbereitschaft, Erstellung der Rechnung</td></tr>
</table>
<p><strong>Systemfunktionen (aus Prozessen abgeleitet):</strong> Kundenbezogene Verwaltung der Aufträge · Erstellung von Berichten (Umsatz nach Monaten/Mitarbeitern, erledigte/unerledigte Aufträge)</p>`,

  erklaerungen: [
    {
      titel: "🔄 Prozesstypen im Überblick",
      inhalt: `<div class="def-box"><div class="def-label">Hierarchie betrieblicher Prozesse (Folie 3.-4)</div>
<div class="erk-tree">
  <div class="tree-root">Betriebliche Prozesse / Unternehmensprozesse</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#D1FAE5;">
      <strong>Leistungsprozesse</strong><br>
      <small>→ Geschäftsprozesse (direkter Kundenwert)<br>
      → Unterstützungsprozesse (intern, notwendig)</small>
    </div>
    <div class="tree-branch" style="background:#FEF3C7;">
      <strong>Führungsprozesse</strong><br>
      <small>→ Steuerung und Kontrolle</small>
    </div>
  </div>
</div></div>
<table class="erk-table">
  <tr><th>Typ</th><th>Merkmal</th><th>Beispiel</th></tr>
  <tr><td><strong>Geschäftsprozess</strong></td><td>Direkter Kundenwert, wertschöpfend</td><td>Auftragsabwicklung</td></tr>
  <tr><td><strong>Unterstützungsprozess</strong></td><td>Kein direkter Kundenwert, aber notwendig</td><td>Buchhaltung, IT</td></tr>
  <tr><td><strong>Führungsprozess</strong></td><td>Steuerung, Planung, Kontrolle</td><td>Budgetplanung</td></tr>
</table>`,
      beispiel: `Beim Kassensystem-Hersteller ProElectron:<br>
<strong>Geschäftsprozess:</strong> Kassensystem reparieren (direkter Kundenauftrag)<br>
<strong>Unterstützungsprozess:</strong> Lohnbuchhaltung der Techniker<br>
<strong>Führungsprozess:</strong> Jahresplanung der KD-Abteilung`,
      merke: `Geschäftsprozesse + Unterstützungsprozesse = Leistungsprozesse • Führungsprozesse steuern alles • Alle zusammen = Betriebliche Prozesse`,
      flipcards: [
        { vorne: "Geschäftsprozess", hinten: "Direkter Kundenwert<br>wertschöpfend<br>(z.B. Auftragsabwicklung)" },
        { vorne: "Unterstützungsprozess", hinten: "Kein direkter Kundenwert<br>aber intern notwendig<br>(z.B. Buchhaltung)" },
        { vorne: "Führungsprozess", hinten: "Steuerung & Kontrolle<br>des Unternehmens<br>(z.B. Budgetplanung)" },
        { vorne: "Leistungsprozesse", hinten: "Geschäftsprozesse<br>+<br>Unterstützungsprozesse" }
      ],
      interaktion: [
        { frage: "Welcher Prozesstyp schafft direkten Kundenwert?", optionen: ["Führungsprozess", "Unterstützungsprozess", "Geschäftsprozess", "Datenprozess"], richtig: 2, erklaerung: "Geschäftsprozesse sind wertschöpfend und haben direkten Kundenbezug." },
        { frage: "Buchhaltung ist ein ...", optionen: ["Geschäftsprozess", "Unterstützungsprozess", "Führungsprozess", "Kernprozess"], richtig: 1, erklaerung: "Buchhaltung = kein direkter Kundenwert, aber intern notwendig = Unterstützungsprozess." },
        { frage: "Was gehört zu den Leistungsprozessen?", optionen: ["Nur Geschäftsprozesse", "Nur Führungsprozesse", "Geschäfts- + Unterstützungsprozesse", "Alle Prozesstypen"], richtig: 2, erklaerung: "Leistungsprozesse = Geschäftsprozesse + Unterstützungsprozesse." },
        { frage: "Jahresplanung und Budgetkontrolle sind ...", optionen: ["Geschäftsprozesse", "Unterstützungsprozesse", "Führungsprozesse", "Leistungsprozesse"], richtig: 2, erklaerung: "Steuerung und Kontrolle = Führungsprozesse." }
      ]
    },
    {
      titel: "🏢 Aufbau- vs. Ablauforganisation",
      inhalt: `<div class="def-box"><div class="def-label">Zwei Arten der Organisations-Modellierung (Folie 3.-5 / 3.-6)</div>
<strong>Aufbauorganisation</strong> → <em>WER ist wofür zuständig?</em> (statisch)<br>
Darstellung: <strong>Organigramm</strong> – zeigt Stellen, Abteilungen, Hierarchien<br><br>
<strong>Ablauforganisation</strong> → <em>WIE laufen Aufgaben ab?</em> (dynamisch)<br>
Darstellung: <strong>Prozessdiagramm/EPK</strong> – zeigt Ablauf, Ereignisse, Funktionen
</div>
<table class="erk-table">
  <tr><th></th><th>Aufbauorganisation</th><th>Ablauforganisation</th></tr>
  <tr><td><strong>Frage</strong></td><td>Wer ist zuständig?</td><td>Wie läuft es ab?</td></tr>
  <tr><td><strong>Art</strong></td><td>Statisch</td><td>Dynamisch</td></tr>
  <tr><td><strong>Modell</strong></td><td>Organigramm</td><td>Prozessdiagramm / EPK</td></tr>
  <tr><td><strong>Beispiel</strong></td><td>Lean Drive GmbH</td><td>Check-in am Flughafen</td></tr>
</table>`,
      beispiel: `<strong>Lean Drive GmbH – Aufbauorganisation (Organigramm):</strong><br>
Lean Drive → Vertrieb, Einkauf, Auftragsabwicklung, Arbeitsvorbereitung, Technik, Lager<br><br>
<strong>Check-in Flughafen – Ablauforganisation (EPK):</strong><br>
Ereignis: „Fluggast erschienen" → Funktion: „Anwesenheit mitteilen" → Ereignis: „Anwesenheit mitgeteilt" → Funktion: „Formalitäten prüfen" → Funktion: „Gepäck verbuchen" → Ereignis: „Gepäck verbucht"`,
      merke: `Aufbauorganisation = WER (statisch, Organigramm) • Ablauforganisation = WIE (dynamisch, EPK)`,
      flipcards: [
        { vorne: "Aufbauorganisation", hinten: "WER ist zuständig?<br>→ Organigramm (statisch)<br>Stellen & Hierarchien" },
        { vorne: "Ablauforganisation", hinten: "WIE läuft es ab?<br>→ Prozessdiagramm (dynamisch)<br>Ereignisse & Funktionen" },
        { vorne: "Organigramm", hinten: "Modell der Aufbauorganisation<br>Zeigt: Stellen, Abteilungen,<br>Hierarchien und Beziehungen" },
        { vorne: "EPK", hinten: "Ereignisgesteuerte Prozesskette<br>Modell der Ablauforganisation<br>Ereignis → Funktion → Ereignis ..." }
      ],
      interaktion: [
        { frage: "Was zeigt ein Organigramm?", optionen: ["Wie Prozesse ablaufen", "Wer wofür zuständig ist", "Welche Daten gespeichert werden", "Wie das IS aufgebaut ist"], richtig: 1, erklaerung: "Organigramm = Aufbauorganisation = WER ist zuständig (statisch)." },
        { frage: "Die Ablauforganisation zeigt ...", optionen: ["Hierarchien", "Stellenbeschreibungen", "Wie Aufgaben ablaufen", "Gehälter der Mitarbeiter"], richtig: 2, erklaerung: "Ablauforganisation = WIE laufen Aufgaben ab (dynamisch)." },
        { frage: "Check-in-Prozess am Flughafen ist ein Beispiel für ...", optionen: ["Aufbauorganisation", "Ablauforganisation", "Datensicht", "Führungsprozess"], richtig: 1, erklaerung: "Ein Ablaufprozess (EPK) zeigt das WIE = Ablauforganisation." },
        { frage: "Welches Modell ist dynamisch?", optionen: ["Organigramm", "Stellenplan", "EPK/Prozessdiagramm", "Hierarchiediagramm"], richtig: 2, erklaerung: "EPK = dynamisch, zeigt zeitlichen Ablauf von Prozessen." }
      ]
    },
    {
      titel: "📋 Die EPK – Elemente & Aufbau",
      inhalt: `<div class="def-box"><div class="def-label">EPK = Ereignisgesteuerte Prozesskette (Folie 3.-7)</div>
Standardmethode zur Modellierung von Geschäftsprozessen und IS-Anforderungen.<br>
Aus einer EPK lassen sich direkt <strong>IS-Funktionen, IS-Daten und IS-Anwender</strong> ableiten.
</div>
<table class="erk-table">
  <tr><th>Element</th><th>Form</th><th>Bedeutung</th><th>Beispiel</th></tr>
  <tr><td><strong>Ereignis</strong></td><td>🟣 Lila Hexagon (Pfeilform)</td><td>Zustand – löst Prozess aus oder beendet ihn</td><td>„Bestellbedarf ist aufgetreten"</td></tr>
  <tr><td><strong>Funktion</strong></td><td>🟩 Grünes Rechteck</td><td>Aktivität/Aufgabe im Prozess</td><td>„Bestellschein ausfüllen"</td></tr>
  <tr><td><strong>Org.-Einheit</strong></td><td>🟧 Orange Person</td><td>Wer führt die Funktion aus?</td><td>„Mitarbeiter Einkauf"</td></tr>
  <tr><td><strong>Dokument/Daten</strong></td><td>⬜ Grau, Dokument</td><td>Welche Daten fließen ein/aus?</td><td>„Lieferkatalog", „Bestellschein"</td></tr>
</table>
<p><strong>Grundprinzip:</strong> <span style="color:#8B5CF6">Ereignis</span> → <span style="color:#10B981">Funktion</span> → <span style="color:#8B5CF6">Ereignis</span> → <span style="color:#10B981">Funktion</span> → ...</p>`,
      beispiel: `<strong>Bestellprozess (Folie 3.-7):</strong><br>
🟣 „Bestellbedarf ist aufgetreten" (Ereignis)<br>
→ 🟩 „Bestellschein ausfüllen" (Funktion) ← Mitarbeiter (IS-Anwender) ← Lieferkatalog (IS-Daten)<br>
→ 🟣 Bestellschein liegt vor (implizit)<br>
→ 🟩 „Bestellung prüfen" (Funktion) ← Leiter Fachabteilung (IS-Anwender) ← Abteilungsbudget (IS-Daten)`,
      merke: `EPK: Ereignis → Funktion → Ereignis ... • IS-Funktionen (grün), IS-Daten (grau), IS-Anwender (orange) • Ereignisse lösen Funktionen aus, Funktionen erzeugen Ereignisse`,
      flipcards: [
        { vorne: "Ereignis (EPK)", hinten: "🟣 Lila Hexagon<br>Zustand der Realität<br>löst Prozess aus oder beendet ihn" },
        { vorne: "Funktion (EPK)", hinten: "🟩 Grünes Rechteck<br>Aktivität/Aufgabe<br>verarbeitet Input zu Output" },
        { vorne: "IS-Anwender", hinten: "🟧 Orange Person<br>Wer führt die Funktion aus?<br>= Organisationseinheit" },
        { vorne: "IS-Daten", hinten: "⬜ Grau, Dokument-Symbol<br>Welche Daten fließen ein/aus?<br>= Dokumente & Informationen" }
      ],
      interaktion: [
        { frage: "Welche Form hat ein Ereignis in der EPK?", optionen: ["Grünes Rechteck", "Lila Hexagon/Pfeilform", "Oranger Kreis", "Graues Dokument"], richtig: 1, erklaerung: "Ereignisse = lila Hexagon/Pfeilform in der EPK." },
        { frage: "'Bestellbedarf ist aufgetreten' ist ein ...", optionen: ["Funktion", "Dokument", "Ereignis", "Prozess"], richtig: 2, erklaerung: "Es ist ein Zustand, der den Prozess auslöst = Ereignis." },
        { frage: "Was lässt sich aus einer EPK direkt ableiten?", optionen: ["Nur IS-Funktionen", "IS-Funktionen, IS-Daten, IS-Anwender", "Nur Organigramme", "Nur Datenbankstrukturen"], richtig: 1, erklaerung: "EPK = Basis für IS-Modell mit Funktionen, Daten und Anwendern." },
        { frage: "Grundprinzip der EPK:", optionen: ["Funktion → Funktion → Funktion", "Ereignis → Funktion → Ereignis", "Daten → Funktion → Daten", "Person → Aufgabe → Person"], richtig: 1, erklaerung: "EPK-Prinzip: Ereignis → Funktion → Ereignis (immer abwechselnd)." }
      ]
    },
    {
      titel: "🏗️ Die ARIS-Methodik",
      inhalt: `<div class="def-box"><div class="def-label">ARIS – Architektur integrierter Informationssysteme (Folie 3.-8 / 3.-9)</div>
Methodik von Prof. Scheer zur Modellierung von Unternehmen und IS.<br>
<strong>Kernidee:</strong> Reduktion von Komplexität durch <strong>4 getrennte Beschreibungssichten</strong> → dann zusammenführen.
</div>
<table class="erk-table">
  <tr><th>Sicht</th><th>Frage</th><th>Modell</th></tr>
  <tr><td><strong>Datensicht</strong></td><td>Welche Daten werden gebraucht?</td><td>Datenmodell (z.B. Lieferkatalog, Bestellschein)</td></tr>
  <tr><td><strong>Funktionssicht</strong></td><td>Welche Aufgaben gibt es?</td><td>Funktionsbaum (z.B. Bestellen → Ausfüllen, Prüfen ...)</td></tr>
  <tr><td><strong>Organisationssicht</strong></td><td>Wer ist zuständig?</td><td>Organigramm (z.B. Leiter, Mitarbeiter Einkauf)</td></tr>
  <tr><td><strong>Steuerungs-/Prozesssicht</strong></td><td>Wie läuft der Prozess ab?</td><td>EPK (integriert alle anderen Sichten)</td></tr>
</table>
<div class="def-box"><div class="def-label">Zentrales ARIS-Prinzip (Folie 3.-9)</div>
Jede Sicht = ein <strong>"Baustein"</strong>. Die <strong>Steuerungs-/Prozesssicht (EPK)</strong> fügt alle Bausteine zusammen und zeigt das vollständige Bild.
</div>`,
      beispiel: `<strong>Bestellprozess in 4 ARIS-Sichten:</strong><br>
🗂️ <strong>Datensicht:</strong> Lieferantenverzeichnis, Lieferkatalog, Bestellschein, Abteilungsbudget<br>
⚙️ <strong>Funktionssicht:</strong> Bestellen → Bestellschein ausfüllen, Bestellung prüfen, Bestellung durchführen<br>
👥 <strong>Organisationssicht:</strong> Unternehmen → Fachabteilung → Leiter, Mitarbeiter; Einkaufsabteilung → Mitarbeiter<br>
🔄 <strong>Prozesssicht (EPK):</strong> Bestellbedarf aufgetreten → Bestellschein ausfüllen → ... (alle Sichten integriert)`,
      merke: `ARIS = 4 Sichten: Daten, Funktion, Organisation, Steuerung/Prozess (EPK) • EPK integriert alle anderen Sichten • Ziel: Komplexitätsreduktion durch getrenntes Betrachten`,
      flipcards: [
        { vorne: "ARIS", hinten: "Architektur integrierter<br>Informationssysteme<br>4 Beschreibungssichten" },
        { vorne: "Datensicht", hinten: "Welche Daten werden gebraucht?<br>(Datenmodell)<br>z.B. Lieferkatalog, Bestellschein" },
        { vorne: "Funktionssicht", hinten: "Welche Aufgaben gibt es?<br>(Funktionsbaum)<br>z.B. Bestellen → Ausfüllen, Prüfen" },
        { vorne: "Steuerungs-/Prozesssicht", hinten: "Wie läuft der Prozess ab?<br>(EPK)<br>Integriert ALLE anderen Sichten" }
      ],
      interaktion: [
        { frage: "Wofür steht ARIS?", optionen: ["Automatisiertes Reporting in Systemen", "Architektur integrierter Informationssysteme", "Anwendungsreife IS-Simulation", "Arbeits-Ressourcen-IS"], richtig: 1, erklaerung: "ARIS = Architektur integrierter Informationssysteme (Prof. Scheer)." },
        { frage: "Welche ARIS-Sicht integriert alle anderen?", optionen: ["Datensicht", "Funktionssicht", "Organisationssicht", "Steuerungs-/Prozesssicht"], richtig: 3, erklaerung: "Die Steuerungs-/Prozesssicht (EPK) fügt alle Bausteine zusammen." },
        { frage: "Was zeigt die Organisationssicht?", optionen: ["Datenstrukturen", "Prozessabläufe", "Wer ist zuständig", "IS-Funktionen"], richtig: 2, erklaerung: "Organisationssicht = Organigramm = WER ist zuständig." },
        { frage: "Warum verwendet man verschiedene ARIS-Sichten?", optionen: ["Weil es Vorschrift ist", "Zur Komplexitätsreduktion", "Weil EPK zu einfach ist", "Aus ästhetischen Gründen"], richtig: 1, erklaerung: "ARIS-Ziel: Reduktion von Komplexität durch getrennte Beschreibungssichten." }
      ]
    },
    {
      titel: "💼 KDIS – Anwendungsbeispiel",
      inhalt: `<div class="def-box"><div class="def-label">ProElectron Inc. – KDIS (Folie 3.-11 bis 3.-13)</div>
<strong>Unternehmen:</strong> ProElectron Inc. (Seattle), Hersteller von Kassensystemen<br>
<strong>Problem:</strong> Expansion → wachsende Datenflut im Kundendienst (mehr Kunden, Aufträge, Produkte, Teile, Mitarbeiter)<br>
<strong>Lösung:</strong> Entwicklung des KDIS = <strong>Kundendienst-Informationssystem</strong><br>
<strong>Vorgehen:</strong> Aus KD-Prozessen werden IS-Systemfunktionen abgeleitet
</div>
<table class="erk-table">
  <tr><th>KD-Prozess</th><th>Teilprozesse</th></tr>
  <tr><td><strong>Auftragsannahme</strong></td><td>Erfassung der Auftragsdaten · Entgegennahme der Kasse</td></tr>
  <tr><td><strong>Auftragsbearbeitung</strong></td><td>Wartung der Kasse · Reparatur der Kasse</td></tr>
  <tr><td><strong>Auftragsabschluss</strong></td><td>Herstellung Versandbereitschaft · Erstellung der Rechnung</td></tr>
</table>
<p><strong>Abgeleitete Systemfunktionen (KDIS):</strong></p>
<p>→ Kundenbezogene Verwaltung der Aufträge<br>
→ Erstellung von Berichten: Umsatz nach Monaten, Umsatz nach Mitarbeitern, erledigte/unerledigte Aufträge</p>`,
      beispiel: `<strong>Kernbotschaft des KDIS-Beispiels:</strong><br>
WI-Vorgehen in der Praxis: Erst Prozesse modellieren (EPK) → dann IS-Funktionen, IS-Daten und IS-Anwender ableiten → dann Informationssystem entwickeln.<br><br>
Das ist genau das Strategie–Prozess–IS-Dreieck aus Kap. 1: Strategie (expandieren) → Prozess (KD-Abläufe) → IS (KDIS).`,
      merke: `KDIS-Methodik: Prozesse analysieren → IS-Funktionen ableiten → IS entwickeln • Prozessmodell = Basis für IS-Entwicklung`,
      interaktion: [
        { frage: "Womit befasst sich ProElectron?", optionen: ["Softwareentwicklung", "Kassensysteme", "Bankdienstleistungen", "Logistik"], richtig: 1, erklaerung: "ProElectron Inc. (Seattle) ist Hersteller von Kassensystemen." },
        { frage: "Was bedeutet KDIS?", optionen: ["Kundendaten-IS", "Kassendienst-IS", "Kundendienst-IS", "Kerndaten-IS"], richtig: 2, erklaerung: "KDIS = Kundendienst-Informationssystem." },
        { frage: "Wie werden IS-Systemfunktionen im KDIS-Beispiel ermittelt?", optionen: ["Aus Kundenbeschwerden", "Aus IT-Standards", "Aus KD-Prozessen abgeleitet", "Durch externe Berater"], richtig: 2, erklaerung: "Systemfunktionen werden direkt aus den KD-Prozessen abgeleitet." },
        { frage: "Welcher KD-Prozess enthält 'Reparatur der Kasse'?", optionen: ["Auftragsannahme", "Auftragsbearbeitung", "Auftragsabschluss", "Auftragsprüfung"], richtig: 1, erklaerung: "Reparatur der Kasse gehört zur Auftragsbearbeitung." }
      ]
    }
  ],
  quiz: [
    { frage: "Was zeigt die Aufbauorganisation?", optionen: ["Wie Prozesse ablaufen", "Wer wofür zuständig ist", "Welche IS-Daten benötigt werden", "Wie IS entwickelt werden"], richtig: 1, erklaerung: "Aufbauorganisation = WER ist zuständig (Organigramm, statisch)." },
    { frage: "EPK steht für ...", optionen: ["Ereignisgeprüfte Prozesskette", "Ereignisgesteuerte Prozesskette", "Einfache Prozesskette", "Elektronische Prozesskette"], richtig: 1, erklaerung: "EPK = Ereignisgesteuerte Prozesskette." },
    { frage: "ARIS hat ... Beschreibungssichten", optionen: ["2", "3", "4", "5"], richtig: 2, erklaerung: "ARIS: Datensicht, Funktionssicht, Organisationssicht, Steuerungs-/Prozesssicht = 4." },
    { frage: "Lila Hexagon in EPK = ?", optionen: ["Funktion", "Ereignis", "Dokument", "Person"], richtig: 1, erklaerung: "Lila Hexagon = Ereignis (Zustand, der Prozess auslöst/beendet)." },
    { frage: "ARIS = ?", optionen: ["Automatisches Reporting", "Architektur integrierter IS", "Abteilungs-Ressource-IS", "Anwendungs-IS"], richtig: 1, erklaerung: "ARIS = Architektur integrierter Informationssysteme." },
    { frage: "Führungsprozesse ...", optionen: ["Erzeugen direkten Kundenwert", "Unterstützen intern", "Steuern und kontrollieren", "Ersetzen Geschäftsprozesse"], richtig: 2, erklaerung: "Führungsprozesse = Steuerung und Kontrolle des Unternehmens." },
    { frage: "Die Prozesssicht in ARIS integriert ...", optionen: ["Nur Datensicht", "Nur Organigramme", "Alle anderen Sichten", "Nur Funktionen"], richtig: 2, erklaerung: "Steuerungs-/Prozesssicht (EPK) integriert Daten-, Funktions- und Organisationssicht." },
    { frage: "KDIS = ?", optionen: ["Kassendaten-IS", "Kundendienst-IS", "KD-Informations-Sicht", "Kassensystem"], richtig: 1, erklaerung: "KDIS = Kundendienst-Informationssystem bei ProElectron." },
    { frage: "Grünes Rechteck in EPK = ?", optionen: ["Ereignis", "Dokument", "Funktion", "Prozess"], richtig: 2, erklaerung: "Grünes Rechteck = Funktion (Aktivität/Aufgabe im Prozess)." },
    { frage: "Welcher Prozesstyp enthält keinen direkten Kundenwert?", optionen: ["Geschäftsprozess", "Unterstützungsprozess", "Führungsprozess", "Leistungsprozess"], richtig: 1, erklaerung: "Unterstützungsprozesse haben keinen direkten Kundenwert, sind aber intern notwendig." }
  ],
  lueckentext: [
    { text: "Die ___ zeigt WER wofür zuständig ist, die ___ zeigt WIE Aufgaben ablaufen.", luecken: ["Aufbauorganisation", "Ablauforganisation"], erklaerung: "Aufbau = WER (statisch), Ablauf = WIE (dynamisch)." },
    { text: "EPK = ___gesteuerte Prozesskette. Grundprinzip: ___ → ___ → Ereignis.", luecken: ["Ereignis", "Ereignis", "Funktion"], erklaerung: "EPK alterniert immer zwischen Ereignis und Funktion." },
    { text: "ARIS hat 4 Sichten: Datensicht, ___, Organisationssicht und ___.", luecken: ["Funktionssicht", "Steuerungs-/Prozesssicht"], erklaerung: "Die 4 ARIS-Beschreibungssichten." },
    { text: "Geschäftsprozesse + Unterstützungsprozesse = ___. Zusammen mit Führungsprozessen = ___.", luecken: ["Leistungsprozesse", "Betriebliche Prozesse"], erklaerung: "Hierarchie der betrieblichen Prozesse." }
  ],
  zuordnung: [
    { titel: "EPK-Elemente zuordnen", paare: [
      { links: "Lila Hexagon", rechts: "Ereignis" },
      { links: "Grünes Rechteck", rechts: "Funktion" },
      { links: "Orange Person-Symbol", rechts: "Organisationseinheit / IS-Anwender" },
      { links: "Graues Dokument-Symbol", rechts: "IS-Daten / Dokument" }
    ]},
    { titel: "ARIS-Sichten zuordnen", paare: [
      { links: "Welche Daten werden gebraucht?", rechts: "Datensicht" },
      { links: "Welche Aufgaben gibt es?", rechts: "Funktionssicht" },
      { links: "Wer ist zuständig?", rechts: "Organisationssicht" },
      { links: "Wie läuft der Prozess ab?", rechts: "Steuerungs-/Prozesssicht" }
    ]},
    { titel: "Prozesstypen zuordnen", paare: [
      { links: "Auftragsabwicklung (direkter Kundenwert)", rechts: "Geschäftsprozess" },
      { links: "Buchhaltung (intern notwendig)", rechts: "Unterstützungsprozess" },
      { links: "Jahresplanung und Budgetkontrolle", rechts: "Führungsprozess" }
    ]}
  ]
};


// ============================================================
// RECHNUNGSLEGUNG – Kapitel 1: Grundlagen der Konzernrechnungslegung
// ============================================================
FAECHER["rechnungslegung"].themen["konzernrechnungslegung-grundlagen"] = {
  name: "1. Grundlagen der Konzernrechnungslegung",
  zusammenfassung: `<h4>1. Grundlagen der Konzernrechnungslegung – Vollständige Zusammenfassung</h4>

<h5>📌 Was ist ein Konzern?</h5>
<div class="def-box"><div class="def-label">Konzern nach AktG (§ 18)</div>
Ein herrschendes und ein oder mehrere abhängige Unternehmen unter <strong>einheitlicher Leitung</strong> bilden einen Konzern. Der Konzern selbst ist <strong>keine eigene Rechtspersönlichkeit</strong> – er kann keine Organe, Anteilseigner haben und ist kein Steuersubjekt.
</div>
<p>Der Konzern wird nach <strong>§ 297 Abs. 3 HGB</strong> fiktiv als <strong>einheitliche Unternehmung</strong> behandelt (Einheitsfiktion). Konzernunternehmen nehmen den Charakter rechtlich unselbstständiger Betriebe an.</p>

<h5>📌 1.1 Rechtsgrundlagen</h5>
<table class="erk-table">
  <tr><th>Rechtsquelle</th><th>Regelungsbereich</th><th>Schlüsselnorm</th></tr>
  <tr><td><strong>HGB</strong></td><td>Konzernpflicht, Konsolidierung, Befreiungen</td><td>§§ 271, 290–315 HGB</td></tr>
  <tr><td><strong>AktG</strong></td><td>Konzernbegriff, verbundene Unternehmen</td><td>§§ 15–19, 18 AktG</td></tr>
  <tr><td><strong>IFRS 10</strong></td><td>Konzernabschluss nach IFRS, Kontrollkonzept</td><td>IFRS 10 (Kontrolle = Macht + Chancen/Risiken + Einfluss)</td></tr>
</table>
<p><strong>Anwendung IFRS vs. HGB:</strong> Kapitalmarktorientierte Unternehmen → IFRS-Pflicht für Konzernabschluss (seit 2005). Nicht-kapitalmarktorientierte → HGB oder IFRS-Wahlrecht (§ 315e HGB).</p>

<h5>📌 1.2 Konzernarten</h5>
<table class="erk-table">
  <tr><th>Kriterium</th><th>Art</th><th>Merkmal</th></tr>
  <tr><td>Struktur</td><td><strong>Gleichordnungskonzern</strong></td><td>Keine Abhängigkeit; einheitliche Leitung ohne Hierarchie</td></tr>
  <tr><td>Struktur</td><td><strong>Unterordnungskonzern</strong></td><td>Herrschendes MU über abhängige TU; wirtschaftliche Abhängigkeit</td></tr>
  <tr><td>Beherrschung</td><td>Eingliederungskonzern</td><td>Min. 95% Kapital; HV-Beschluss beider UN mit 75%</td></tr>
  <tr><td>Beherrschung</td><td>Vertragskonzern</td><td>Beherrschungsvertrag; Weisungsbefugnis</td></tr>
  <tr><td>Beherrschung</td><td>Faktischer Konzern</td><td>i.d.R. &gt;50% Beteiligung; kein formelles Weisungsrecht</td></tr>
  <tr><td>Leistung</td><td>Horizontaler Konzern</td><td>Gleiche Branche/Stufe (z.B. 2 Autohersteller)</td></tr>
  <tr><td>Leistung</td><td>Vertikaler Konzern</td><td>Vor-/nachgelagerte Stufen (z.B. Produzent + Händler)</td></tr>
  <tr><td>Leistung</td><td>Mischkonzern</td><td>Branchenfremde Unternehmen zusammengeschlossen</td></tr>
  <tr><td>Stufen</td><td>Einstufig</td><td>Alle TU direkt unter MU</td></tr>
  <tr><td>Stufen</td><td>Mehrstufig</td><td>TU hält selbst Anteile an Enkeln → Teilkonzern</td></tr>
</table>
<p><strong>Holding-Typen:</strong> Finanzholding (Beteiligungsverwaltung) · Management-Holding (Strategie) · Organisatorische Holding (Struktur) · Operative Holding/Stammhauskonzern (selbst operativ tätig)</p>

<h5>📌 1.3 Pflicht zur Konzernrechnungslegung (§ 290 HGB)</h5>
<p>Aufstellungspflicht, wenn <strong>kumulativ</strong> erfüllt: (1) MU = Kapitalgesellschaft mit Sitz im Inland, (2) Ausübung unmittel-/mittelbaren <strong>beherrschenden Einflusses</strong> auf TU.</p>
<p><strong>4 Tatbestände für beherrschenden Einfluss (§ 290 Abs. 2 HGB):</strong></p>
<table class="erk-table">
  <tr><th>Nr.</th><th>Tatbestand</th></tr>
  <tr><td>1</td><td>MU hält die <strong>Mehrheit der Stimmrechte</strong></td></tr>
  <tr><td>2</td><td>MU hat <strong>Organbesetzungsrecht</strong> + ist Gesellschafter</td></tr>
  <tr><td>3</td><td><strong>Beherrschungsvertrag</strong> oder Satzungsbestimmung</td></tr>
  <tr><td>4</td><td>MU trägt <strong>Mehrheit der Chancen und Risiken</strong> (Zweckgesellschaft)</td></tr>
</table>
<p><strong>Tannenbaumprinzip:</strong> Auch MU, die selbst TU sind, müssen Teilkonzernabschlüsse aufstellen → so viele (Teil-)Konzernabschlüsse wie Konzernstufen. Befreiung möglich bei Aufstellung auf höherer Stufe.</p>
<p><strong>Befreiungstatbestände:</strong> Konzernabschluss auf höherer Ebene (§ 291/292 HGB) · Unterschreiten Größenkriterien (§ 293 HGB) · Ausschließlich TU nach § 296 HGB · Konzernabschluss nach IFRS (§ 315a HGB)</p>`,

  erklaerungen: [
    {
      titel: "⚖️ Rechtsgrundlagen: HGB, AktG und IFRS im Vergleich",
      inhalt: `<div class="def-box"><div class="def-label">Konzern nach AktG (§ 18)</div>
Herrschendes + abhängige UN unter <strong>einheitlicher Leitung</strong> = Konzern.<br>
<strong>Unterordnungskonzern:</strong> Einheitliche Leitung durch herrschendes UN<br>
<strong>Gleichordnungskonzern:</strong> Einheitliche Leitung ohne Abhängigkeit (§ 18 Abs. 2 AktG)
</div>
<div class="def-box"><div class="def-label">Konzern nach HGB (§ 290)</div>
Aufstellungspflicht für Konzernabschluss: MU = Kapitalgesellschaft im Inland, beherrschender Einfluss auf TU.<br>
<strong>Verbundene Unternehmen (§ 271 Abs. 2 HGB):</strong> Vollkonsolidierte Mutter- oder TochterUN.
</div>
<div class="def-box"><div class="def-label">Konzern nach IFRS 10</div>
<strong>Kontrollkonzept:</strong> 3 Elemente kumulativ:<br>
1. <strong>Macht</strong> über das investierte Unternehmen (Fähigkeit, relevante Geschäftsaktivitäten zu steuern)<br>
2. <strong>Risiken und Chancen</strong> aus der Beteiligung<br>
3. <strong>Einfluss</strong>, die Macht zur Beeinflussung der Erträge einzusetzen
</div>
<table class="erk-table">
  <tr><th>Abschlussart</th><th>Kapitalmarktorientiert</th><th>Nicht-kapitalmarktorientiert</th></tr>
  <tr><td>Konzernabschluss</td><td>IFRS-Pflicht</td><td>IFRS-Wahlrecht (§ 315e HGB)</td></tr>
  <tr><td>Einzelabschluss</td><td>HGB (Rechtsfolgen) / HGB od. IFRS (Info)</td><td>HGB</td></tr>
</table>`,
      merke: "HGB = §290 ff. · AktG = §15–18 · IFRS 10 = Kontrolle durch Macht + Chancen/Risiken + Einflussvermögen",
      flipcards: [
        { vorne: "Konzernvermutung (AktG)", hinten: "Von einem <strong>abhängigen Unternehmen</strong> wird vermutet, dass es mit dem herrschenden UN einen Konzern bildet." },
        { vorne: "Einheitsgrundsatz (§ 297 Abs. 3 HGB)", hinten: "Konzern wird so dargestellt, <strong>als wäre er ein einziges Unternehmen</strong> (Einheitsfiktion)." },
        { vorne: "IFRS 10 – Kontrollelement 1", hinten: "<strong>Macht</strong>: Fähigkeit, relevante Geschäftsaktivitäten zu steuern (z.B. via Stimmrechte &gt;50%)" },
        { vorne: "IFRS 10 – Kontrollelement 2", hinten: "<strong>Risiken/Chancen</strong>: Investor trägt wesentliche Risiken oder profitiert von Erträgen" },
        { vorne: "IFRS 10 – Kontrollelement 3", hinten: "<strong>Einfluss</strong>: Macht zur Beeinflussung der Erträge (z.B. durch Dividenden, Synergien)" },
        { vorne: "BilMoG 2009", hinten: "Bilanzrechtsmodernisierungsgesetz: Stärkt Unterschied kapitalmarktorientiert vs. nicht-kapitalmarktorientiert; IFRS fließt stärker in HGB" },
        { vorne: "§ 315e HGB", hinten: "IFRS-Wahlrecht für nicht-kapitalmarktorientierte UN beim Konzernabschluss" }
      ],
      interaktion: [
        { frage: "Welche 3 Elemente braucht man für Kontrolle nach IFRS 10?", optionen: ["Kapital, Gewinn, Verlust", "Macht, Risiken/Chancen, Einflussvermögen", "Stimmrechte, Vertrag, Sitz", "50%+, Beherrschung, Holdingstruktur"], richtig: 1, erklaerung: "IFRS 10: Kontrolle = (1) Macht über Geschäftsaktivitäten + (2) Risiken/Chancen + (3) Fähigkeit, Macht zur Ertragssteuerung einzusetzen." },
        { frage: "Für kapitalmarktorientierte Konzerne gilt beim Konzernabschluss:", optionen: ["HGB-Wahlrecht", "IFRS-Pflicht", "US-GAAP", "Keine Vorschriften"], richtig: 1, erklaerung: "Kapitalmarktorientierte Konzerne müssen ihren Konzernabschluss nach IFRS aufstellen." },
        { frage: "Was ist die Einheitsfiktion im HGB?", optionen: ["Der Konzern ist eine GmbH", "Der Konzern wird wie ein einziges Unternehmen dargestellt", "Alle TU haben denselben Sitz", "Einheitliche Steuerpflicht"], richtig: 1, erklaerung: "§ 297 Abs. 3 HGB: Vermögens-, Finanz- und Ertragslage so darstellen, als wäre der Konzern ein einziges Unternehmen." }
      ]
    },
    {
      titel: "🏗️ Konzernarten im Überblick",
      inhalt: `<div class="erk-tree">
  <div class="tree-root">Konzernarten</div>
  <div class="tree-branches">
    <div class="tree-branch" style="background:#D1FAE5;"><strong>Nach Struktur</strong><br>Gleichordnung · Unterordnung</div>
    <div class="tree-branch" style="background:#DBEAFE;"><strong>Nach Beherrschung</strong><br>Eingliederung · Vertrags · faktisch</div>
    <div class="tree-branch" style="background:#EDE9FE;"><strong>Nach Leistung</strong><br>horizontal · vertikal · Misch</div>
    <div class="tree-branch" style="background:#FEF3C7;"><strong>Nach Stufen</strong><br>einstufig · mehrstufig</div>
    <div class="tree-branch" style="background:#FCE7F3;"><strong>Nach Eigentümer</strong><br>Staatskonzern · Privatkonzern</div>
  </div>
</div>
<table class="erk-table">
  <tr><th>Unterordnungskonzern nach Beherrschungsmittel</th><th>Kapitalverflechtung</th><th>Weisungsrecht</th></tr>
  <tr><td><strong>Eingliederungskonzern</strong></td><td>Min. 95%</td><td>Umfassendes Weisungsrecht</td></tr>
  <tr><td><strong>Vertragskonzern</strong></td><td>Keine Mindestbeteiligung</td><td>Weisungsbefugnis (Beherrschungsvertrag)</td></tr>
  <tr><td><strong>Faktischer Konzern</strong></td><td>i.d.R. &gt;50%</td><td>Kein formelles Weisungsrecht</td></tr>
</table>
<div class="def-box"><div class="def-label">Holding-Struktur</div>
<strong>Finanzholding:</strong> Nur Verwaltung der Beteiligungen, keine operative Tätigkeit<br>
<strong>Management-Holding (Strategie-Holding):</strong> Steuert und plant Strategie der TU<br>
<strong>Organisatorische Holding (strukturelle H.):</strong> Interne Strukturierung von Unternehmensbereichen<br>
<strong>Operative Holding (Stammhauskonzern):</strong> Selbst operativ am Markt tätig – der Klassiker
</div>`,
      merke: "Gleichordnung = keine Abhängigkeit · Unterordnung = herrschendes MU · Faktisch = >50% · Vertragskonzern = Beherrschungsvertrag · Eingliederung = 95%",
      flipcards: [
        { vorne: "Gleichordnungskonzern", hinten: "Einheitliche Leitung OHNE Abhängigkeit<br>Organisationsformen: Interessengemeinschaft, personelle Verflechtung" },
        { vorne: "Unterordnungskonzern", hinten: "Einheitliche Leitung DURCH herrschendes MU<br>Wirtschaftliche Abhängigkeit, rechtliche Selbstständigkeit" },
        { vorne: "Horizontaler Konzern", hinten: "Zusammenschluss von UN <strong>gleicher Branche/Stufe</strong><br>Beispiel: 2 Automobilhersteller fusionieren" },
        { vorne: "Vertikaler Konzern", hinten: "UN aus <strong>vor- und nachgelagerten Stufen</strong><br>Beispiel: Stahl-Produzent + Maschinenbauer + Händler" },
        { vorne: "Mischkonzern", hinten: "<strong>Branchenfremde</strong> Unternehmen zusammengeschlossen<br>= anorganischer Zusammenschluss" },
        { vorne: "Einstufiger vs. mehrstufiger Konzern", hinten: "Einstufig: alle TU direkt unter MU<br>Mehrstufig: TU hält selbst Anteile an Enkeln → Teilkonzern entsteht" }
      ],
      interaktion: [
        { frage: "Welche Mindestbeteiligung ist beim Eingliederungskonzern nötig?", optionen: ["50%", "75%", "95%", "100%"], richtig: 2, erklaerung: "Eingliederungskonzern: Min. 95% Kapitalbeteiligung + HV-Beschluss beider UN mit 75% Mehrheit." },
        { frage: "Was unterscheidet Vertrags- vom faktischen Konzern?", optionen: ["Die Beteiligungsquote", "Das Vorhandensein eines Beherrschungsvertrags", "Der Konzernname", "Die Holding-Art"], richtig: 1, erklaerung: "Vertragskonzern = Beherrschungsvertrag vorhanden (formelles Weisungsrecht). Faktischer Konzern = i.d.R. >50% Beteiligung, kein Vertrag." },
        { frage: "Ein Konzern aus Produzent + Großhändler + Einzelhandel ist...", optionen: ["horizontal", "vertikal", "Mischkonzern", "Gleichordnungskonzern"], richtig: 1, erklaerung: "Vertikaler Konzern: vor- und nachgelagerte Wertschöpfungsstufen." },
        { frage: "Eine Holding, die selbst operativ am Markt tätig ist, heißt...", optionen: ["Finanzholding", "Management-Holding", "Operative Holding / Stammhauskonzern", "Strukturholding"], richtig: 2, erklaerung: "Operative Holding = Stammhauskonzern: Die Holdinggesellschaft ist selbst operativ tätig – das ist der 'Klassiker'." }
      ]
    },
    {
      titel: "📋 Pflicht zur Konzernrechnungslegung (§ 290 HGB)",
      inhalt: `<p><strong>Aufstellungspflicht:</strong> Gesetzliche Vertreter einer <strong>Kapitalgesellschaft</strong> mit Sitz im <strong>Inland</strong> müssen Konzernabschluss erstellen, wenn sie <strong>beherrschenden Einfluss</strong> auf ein anderes UN ausüben.</p>
<table class="erk-table">
  <tr><th>Nr.</th><th>Tatbestand (§ 290 Abs. 2 HGB)</th><th>Erläuterung</th></tr>
  <tr><td><strong>1</strong></td><td>Stimmrechtsmehrheit</td><td>MU hält die Mehrheit der Stimmrechte am TU</td></tr>
  <tr><td><strong>2</strong></td><td>Organbesetzungsrecht</td><td>MU kann Mehrheit des Verwaltungs-/Leitungsorgans bestellen <strong>und</strong> ist Gesellschafter</td></tr>
  <tr><td><strong>3</strong></td><td>Beherrschungsvertrag / Satzung</td><td>MU übt Einfluss aufgrund Beherrschungsvertrag oder Satzungsbestimmung aus</td></tr>
  <tr><td><strong>4</strong></td><td>Zweckgesellschaft</td><td>MU trägt Mehrheit der Chancen und Risiken der Zweckgesellschaft</td></tr>
</table>
<div class="def-box"><div class="def-label">Tannenbaumprinzip</div>
Auch ein MU, das selbst TU eines übergeordneten MU ist, muss einen <strong>Teilkonzernabschluss</strong> aufstellen. → So viele (Teil-)Konzernabschlüsse wie Konzernstufen. Befreiung möglich, wenn Aufstellung auf höherer Stufe erfolgt.
</div>
<div class="def-box"><div class="def-label">Befreiungstatbestände</div>
• Konzernabschluss auf <strong>höherer Ebene</strong> (§§ 291, 292 HGB)<br>
• Unterschreiten von <strong>Größenkriterien</strong> (§ 293 HGB, § 11 PublG)<br>
• Ausschließlich TU nach <strong>§ 296 HGB</strong> (Einbeziehungswahlrecht)<br>
• Konzernabschluss nach <strong>IFRS</strong> (§ 315a HGB)
</div>`,
      merke: "§ 290 HGB: 4 Tatbestände für beherrschenden Einfluss. Zweck-GmbH: Mehrheit Chancen/Risiken genügt. Tannenbaum = Teilkonzernabschlüsse für jede Konzernstufe.",
      flipcards: [
        { vorne: "Pflicht nach § 290 Abs. 1 HGB", hinten: "MU = Kapitalgesellschaft im Inland + beherrschender Einfluss auf TU → Pflicht zur Aufstellung in den ersten <strong>5 Monaten</strong> des Konzerngeschäftsjahres" },
        { vorne: "Zweckgesellschaft (§ 290 Abs. 2 Nr. 4)", hinten: "Juristische Person für klar definierten Zweck. Einbeziehungspflicht, wenn MU <strong>Mehrheit der Chancen und Risiken</strong> trägt – ohne gesellschaftsrechtliche Beziehung." },
        { vorne: "Befreiung nach § 293 HGB", hinten: "Befreiung bei <strong>Unterschreiten von Größenkriterien</strong> (Bilanzsumme, Umsatz, Mitarbeiter) – 2 von 3 Kriterien an 2 Stichtagen." },
        { vorne: "§ 296 HGB – Einbeziehungswahlrecht", hinten: "TU muss <strong>nicht</strong> einbezogen werden, wenn: erhebliche Einschränkungen der Rechte, unverhältnismäßige Kosten, untergeordnete Bedeutung." }
      ],
      interaktion: [
        { frage: "Welche 2 Grundvoraussetzungen müssen kumulativ für die Aufstellungspflicht erfüllt sein?", optionen: ["AG + Auslandssitz", "Kapitalgesellschaft im Inland + beherrschender Einfluss auf TU", "GmbH + 100% Beteiligung", "Jahresüberschuss + Bilanzsumme >50 Mio."], richtig: 1, erklaerung: "§ 290 Abs. 1 HGB: (1) MU = Kapitalgesellschaft mit Sitz im Inland + (2) Möglichkeit zur Ausübung beherrschenden Einflusses auf ein anderes UN." },
        { frage: "Was bedeutet das Tannenbaumprinzip?", optionen: ["TU aus dem Ausland werden wie Tannenbäume behandelt", "Jede Konzernstufe, die MU ist, muss einen (Teil-)Konzernabschluss aufstellen", "Nur das oberste MU erstellt einen Konzernabschluss", "Tochter-TU sind befreit"], richtig: 1, erklaerung: "Tannenbaumprinzip: Jedes MU, das selbst TU ist, muss einen Teilkonzernabschluss erstellen → so viele wie Konzernstufen." },
        { frage: "Wann greift der Befreiungstatbestand nach § 293 HGB?", optionen: ["Immer bei GmbHs", "Bei Unterschreiten von Größenkriterien", "Bei Holdingstrukturen", "Bei ausländischem MU"], richtig: 1, erklaerung: "§ 293 HGB: Befreiung bei Unterschreiten von Größenkriterien (Bilanzsumme, Umsatz, Arbeitnehmer) – 2 von 3 Kriterien an 2 aufeinanderfolgenden Stichtagen." }
      ]
    }
  ],
  quiz: [
    { frage: "Was definiert § 18 AktG als Konzern?", optionen: ["Mehrere GmbHs unter einem Dach", "Herrschendes + abhängige UN unter einheitlicher Leitung", "Zwei AGs mit Beherrschungsvertrag", "UN mit mehr als 50% Beteiligung"], richtig: 1, erklaerung: "§ 18 AktG: Konzern = herrschendes + abhängige UN unter einheitlicher Leitung. Der Konzern ist selbst keine Rechtspersönlichkeit." },
    { frage: "Was bedeutet die 'Einheitsfiktion' im HGB?", optionen: ["Alle Konzern-UN haben denselben Sitz", "Der Konzern wird wie ein einziges Unternehmen dargestellt", "Einheitliche Steuerpflicht", "Konzern = eigene GmbH"], richtig: 1, erklaerung: "§ 297 Abs. 3 HGB: Einheitsfiktion = Konzern wird so dargestellt, als wäre er ein einziges Unternehmen." },
    { frage: "Welche 3 Elemente braucht man für Kontrolle nach IFRS 10?", optionen: ["EK, FK, Bilanzsumme", "Macht, Risiken/Chancen, Einfluss auf Erträge", "Stimmrechte, Vertrag, Sitz", "50%+, Holding, Beherrschung"], richtig: 1, erklaerung: "IFRS 10: Kontrolle = (1) Macht + (2) Risiken/Chancen + (3) Fähigkeit, Macht zur Ertragssteuerung einzusetzen." },
    { frage: "Für kapitalmarktorientierte Konzerne gilt:", optionen: ["HGB-Wahlrecht", "US-GAAP-Pflicht", "IFRS-Pflicht für Konzernabschluss", "Keine Vorschriften"], richtig: 2, erklaerung: "Kapitalmarktorientierte Konzerne müssen den Konzernabschluss nach IFRS aufstellen (seit 2005)." },
    { frage: "Mindestbeteiligung beim Eingliederungskonzern?", optionen: ["50%", "75%", "95%", "100%"], richtig: 2, erklaerung: "Eingliederungskonzern: Min. 95% Kapitalbeteiligung + HV-Beschluss beider UN mit 75%." },
    { frage: "Was unterscheidet Vertrags- vom faktischen Konzern?", optionen: ["Beteiligungsquote", "Vorhandensein eines Beherrschungsvertrags", "Konzernname", "Holding-Typ"], richtig: 1, erklaerung: "Vertragskonzern = Beherrschungsvertrag vorhanden. Faktischer Konzern = i.d.R. >50% Beteiligung, kein Vertrag." },
    { frage: "Konzern aus Produzent + Großhändler + Einzelhandel ist:", optionen: ["Horizontal", "Vertikal", "Mischkonzern", "Gleichordnungskonzern"], richtig: 1, erklaerung: "Vertikaler Konzern: UN aus vor- und nachgelagerten Wertschöpfungsstufen." },
    { frage: "Was ist eine Finanzholding?", optionen: ["Holding, die selbst operativ tätig ist", "Holding, die nur Beteiligungen verwaltet", "Holding mit Beherrschungsvertrag", "Holding mit 100%-TU"], richtig: 1, erklaerung: "Finanzholding: Nur Erwerb und Verwaltung von Beteiligungen – nicht operativ tätig." },
    { frage: "Wann muss ein Konzernabschluss nach § 290 HGB aufgestellt werden?", optionen: ["Immer bei GmbHs", "MU = KapG im Inland + beherrschender Einfluss auf TU", "Nur bei AG mit Börsennotierung", "Wenn Bilanzsumme >500 Mio."], richtig: 1, erklaerung: "§ 290 HGB: KapG mit Sitz im Inland + Möglichkeit zur Ausübung beherrschenden Einflusses auf TU." },
    { frage: "Tatbestand Nr. 2 nach § 290 Abs. 2 HGB lautet:", optionen: ["Stimmrechtsmehrheit", "Organbesetzungsrecht + Gesellschafterstellung", "Beherrschungsvertrag", "Zweckgesellschaft"], richtig: 1, erklaerung: "Nr. 2: MU hat Recht, Mehrheit des Verwaltungs-/Leitungsorgans zu bestellen UND ist Gesellschafter." },
    { frage: "Was ist eine Zweckgesellschaft i.S. § 290 Abs. 2 Nr. 4 HGB?", optionen: ["Tochter mit 100% Beteiligung", "Juristische Person für klar definierten Zweck; MU trägt Mehrheit der Chancen/Risiken", "Ausländisches TU", "Holding ohne operative Tätigkeit"], richtig: 1, erklaerung: "Zweckgesellschaft: Gegründet für klar definierten Zweck. Konsolidierungspflicht wenn MU Mehrheit der Chancen/Risiken trägt – keine Gesellschafterstellung nötig." },
    { frage: "Was bedeutet das Tannenbaumprinzip?", optionen: ["TU aus dem Ausland werden besonders behandelt", "Jede Konzernstufe, die MU ist, muss einen (Teil-)Konzernabschluss aufstellen", "Nur das oberste MU erstellt einen Konzernabschluss", "Tochter-TU sind befreit"], richtig: 1, erklaerung: "Jedes MU, das selbst TU ist, muss einen Teilkonzernabschluss erstellen → so viele Konzernabschlüsse wie Konzernstufen." },
    { frage: "Befreiung nach § 291/292 HGB greift, wenn:", optionen: ["Konzern im Ausland sitzt", "Konzernabschluss auf höherer Ebene aufgestellt wird", "Nur GmbHs im Konzern sind", "Der Konzern verlustbringend ist"], richtig: 1, erklaerung: "§ 291/292 HGB: Befreiung wenn ein übergeordnetes MU bereits einen befreienden Konzernabschluss aufstellt." },
    { frage: "§ 296 HGB – Einbeziehungswahlrecht: Wann kann TU ausgeschlossen werden?", optionen: ["Immer, wenn MU will", "Bei erheblichen Einschränkungen der Rechte, unverhältnismäßigen Kosten oder untergeordneter Bedeutung", "Nur bei ausländischen TU", "Wenn TU Verluste macht"], richtig: 1, erklaerung: "§ 296: TU muss nicht einbezogen werden bei: erheblichen Einschränkungen der Rechte des MU, unverhältnismäßigen Kosten oder untergeordneter Bedeutung." },
    { frage: "Der Gleichordnungskonzern unterscheidet sich vom Unterordnungskonzern durch:", optionen: ["Höhere Beteiligungsquoten", "Keine Abhängigkeit zwischen den UN", "Pflicht zum Konzernabschluss", "IFRS-Pflicht"], richtig: 1, erklaerung: "Gleichordnungskonzern: einheitliche Leitung OHNE Abhängigkeit der UN untereinander (§ 18 Abs. 2 AktG)." },
    { frage: "Operative Holding bedeutet:", optionen: ["Holding verwaltet nur Beteiligungen", "Holding ist selbst operativ am Markt tätig (Stammhauskonzern)", "Holding steuert nur Strategie", "Holding hat keine TU"], richtig: 1, erklaerung: "Operative Holding = Stammhauskonzern: Die Holdinggesellschaft ist selbst operativ am Markt tätig – das ist der Klassiker." },
    { frage: "Was ist IFRS 10?", optionen: ["Regelung für Einzelabschlüsse", "Standard für Consolidated Financial Statements (Konsolidierungspflicht)", "Standard für Jahresabschlüsse", "EU-Richtlinie für HGB"], richtig: 1, erklaerung: "IFRS 10: Consolidated Financial Statements – definiert wann Konzernabschluss aufgestellt werden muss (Kontrollkonzept)." },
    { frage: "Innerhalb welcher Frist muss der Konzernabschluss nach HGB aufgestellt werden?", optionen: ["3 Monate", "5 Monate", "6 Monate", "12 Monate"], richtig: 1, erklaerung: "§ 290 Abs. 1 HGB: Konzernabschluss muss in den ersten 5 Monaten des Konzerngeschäftsjahres aufgestellt werden." },
    { frage: "Potenzielle Stimmrechte nach IFRS 10:", optionen: ["Werden ignoriert", "Müssen berücksichtigt werden wenn sie aktuell ausgeübt werden können", "Verdoppeln die Stimmrechte", "Sind nie relevant"], richtig: 1, erklaerung: "IFRS 10: Potenzielle Stimmrechte (z.B. Optionsrechte) müssen berücksichtigt werden, wenn sie aktuell ausgeübt werden können." },
    { frage: "BilMoG 2009 hatte folgende Auswirkung:", optionen: ["Abschaffung des IFRS", "Stärkere Ausdifferenzierung zwischen kapitalmarktorientiert und nicht-kapitalmarktorientiert", "Einführung der Gewerbesteuer", "Abschaffung des HGB"], richtig: 1, erklaerung: "BilMoG (Bilanzrechtsmodernisierungsgesetz) 2009: Stärkere Ausdifferenzierung zwischen kapitalmarktorientierten und nicht-kapitalmarktorientierten UN, IFRS-Elemente fließen ins HGB." }
  ],
  lueckentext: [
    { text: "Nach § ___ AktG bilden ein herrschendes und abhängige UN unter ___ Leitung einen Konzern.", luecken: ["18", "einheitlicher"], erklaerung: "§ 18 AktG: Konzernbegriff = einheitliche Leitung." },
    { text: "Der Konzern hat keine ___, kann keine Organe oder Anteilseigner haben und ist kein ___.", luecken: ["Rechtspersönlichkeit", "Steuersubjekt"], erklaerung: "Konzern = fiktives Gebilde: keine eigene Rechtspersönlichkeit, kein Steuersubjekt." },
    { text: "Nach IFRS 10 liegt Kontrolle vor, wenn Macht, ___ und Fähigkeit zur ___ kumulativ erfüllt sind.", luecken: ["Risiken/Chancen", "Ertragssteuerung"], erklaerung: "IFRS 10: 3 Kontrollelemente: Macht + Risiken/Chancen + Einfluss auf Erträge." },
    { text: "Kapitalmarktorientierte Konzerne sind zur Aufstellung des Konzernabschlusses nach ___ verpflichtet.", luecken: ["IFRS"], erklaerung: "Seit 2005: Kapitalmarktorientierte Konzerne = IFRS-Pflicht für den Konzernabschluss." },
    { text: "Der Eingliederungskonzern erfordert eine Kapitalbeteiligung von mindestens ___% und einen HV-Beschluss mit ___% Mehrheit.", luecken: ["95", "75"], erklaerung: "Eingliederungskonzern: 95% Kapital + 75% HV-Beschluss." },
    { text: "Ein ___ Konzern umfasst UN aus gleicher Branche/Stufe, ein ___ Konzern UN aus vor- und nachgelagerten Stufen.", luecken: ["horizontaler", "vertikaler"], erklaerung: "Horizontal = gleiche Stufe. Vertikal = vor- und nachgelagerte Stufen." },
    { text: "Aufstellungspflicht nach § 290 HGB setzt voraus: MU = ___ mit Sitz im ___ und Ausübung ___ Einfluss.", luecken: ["Kapitalgesellschaft", "Inland", "beherrschenden"], erklaerung: "§ 290 Abs. 1 HGB: KapG + Inland + beherrschender Einfluss." },
    { text: "Das Tannenbaumprinzip besagt: Jede Konzernstufe, die selbst ___ ist, muss einen ___ aufstellen.", luecken: ["MU", "(Teil-)Konzernabschluss"], erklaerung: "Tannenbaumprinzip: So viele (Teil-)Konzernabschlüsse wie Konzernstufen." },
    { text: "Befreiung von der Aufstellungspflicht bei Unterschreiten von ___ nach § ___ HGB (2 von 3 Kriterien an 2 Stichtagen).", luecken: ["Größenkriterien", "293"], erklaerung: "§ 293 HGB: Befreiung bei Unterschreiten von Größenkriterien." },
    { text: "Die ___ Holding ist selbst operativ am Markt tätig (= Stammhauskonzern), die ___ Holding verwaltet nur Beteiligungen.", luecken: ["operative", "Finanz-"], erklaerung: "Operative Holding = selbst operativ. Finanzholding = nur Beteiligungsverwaltung." }
  ],
  zuordnung: [
    { titel: "Konzernart zuordnen", paare: [
      { links: "Einheitliche Leitung ohne Abhängigkeit", rechts: "Gleichordnungskonzern" },
      { links: "Herrschendes MU über abhängige TU", rechts: "Unterordnungskonzern" },
      { links: "UN gleicher Branche/Stufe", rechts: "Horizontaler Konzern" },
      { links: "Vor- und nachgelagerte Stufen", rechts: "Vertikaler Konzern" }
    ]},
    { titel: "Rechtsgrundlage zuordnen", paare: [
      { links: "Konzernbegriff, verbundene UN", rechts: "AktG §§ 15–18" },
      { links: "Konzernabschlusspflicht (HGB)", rechts: "§ 290 HGB" },
      { links: "Konzernabschluss nach IFRS", rechts: "IFRS 10" },
      { links: "Befreiung bei Größenkriterien", rechts: "§ 293 HGB" }
    ]},
    { titel: "Holding-Typ zuordnen", paare: [
      { links: "Nur Beteiligungsverwaltung", rechts: "Finanzholding" },
      { links: "Steuert Strategie der TU", rechts: "Management-Holding" },
      { links: "Selbst operativ tätig", rechts: "Operative Holding (Stammhauskonzern)" },
      { links: "Interne Strukturierung", rechts: "Organisatorische Holding" }
    ]}
  ]
};

// ============================================================
// RECHNUNGSLEGUNG – Kapitel 2: Konsolidierung
// ============================================================
FAECHER["rechnungslegung"].themen["konsolidierung"] = {
  name: "2. Konsolidierung im Konzernabschluss",
  zusammenfassung: `<h4>2. Konsolidierung im Konzernabschluss – Vollständige Zusammenfassung</h4>

<h5>📌 Überblick: Konsolidierungsarten</h5>
<table class="erk-table">
  <tr><th>Art</th><th>Zweck</th><th>Rechtsgrundlage</th></tr>
  <tr><td><strong>Kapitalkonsolidierung</strong></td><td>Eliminierung des Beteiligungsbuchwerts gegen das EK des TU</td><td>§ 301 HGB / IFRS 3</td></tr>
  <tr><td><strong>Schuldenkonsolidierung</strong></td><td>Eliminierung konzerninterner Forderungen/Verbindlichkeiten</td><td>§ 303 HGB</td></tr>
  <tr><td><strong>Aufwands-/Ertragskonsolidierung</strong></td><td>Eliminierung konzerninterner Umsätze und Leistungen</td><td>§ 305 HGB</td></tr>
  <tr><td><strong>Zwischenergebniseliminierung</strong></td><td>Eliminierung unrealisierter Gewinne aus konzerninternen Lieferungen</td><td>§ 304 HGB</td></tr>
  <tr><td><strong>Quotenkonsolidierung</strong></td><td>Anteilige Einbeziehung bei Gemeinschaftsunternehmen</td><td>§ 310 HGB</td></tr>
  <tr><td><strong>At-Equity-Konsolidierung</strong></td><td>Beteiligungsfortschreibung bei assoziierten UN (20–50%)</td><td>§§ 311–312 HGB</td></tr>
</table>

<h5>📌 Kapitalkonsolidierung (§ 301 HGB) – Neubewertungsmethode</h5>
<p><strong>Ziel:</strong> Beteiligungsbuchwert des MU (Aktiva) gegen das EK des TU (Passiva) verrechnen → Konzernsicht als ein Unternehmen.</p>
<p><strong>Erstkonsolidierung:</strong></p>
<table class="erk-table">
  <tr><th>Schritt</th><th>Vorgehen</th></tr>
  <tr><td>1.</td><td>Bilanzen von MU und TU addieren (Summenabschluss)</td></tr>
  <tr><td>2.</td><td>Stille Reserven/Lasten im TU aufdecken → Vermögen neu bewerten</td></tr>
  <tr><td>3.</td><td>Beteiligungsbuchwert (MU) gegen Neu-EK (TU) verrechnen</td></tr>
  <tr><td>4.</td><td>Verbleibender Unterschiedsbetrag = <strong>Goodwill</strong> (aktiv) oder negativer Goodwill (passiv)</td></tr>
</table>
<div class="def-box"><div class="def-label">Goodwill (Geschäfts- oder Firmenwert)</div>
Goodwill = Kaufpreis − anteiliges neu bewertetes EK des TU.<br>
Entsteht, wenn mehr bezahlt wird als das bilanzielle Eigenkapital. Wird planmäßig abgeschrieben (HGB: max. 10 Jahre; IFRS: Impairment-Only-Ansatz).
</div>

<h5>📌 Schuldenkonsolidierung (§ 303 HGB)</h5>
<p>Konzerninterne Forderungen und Verbindlichkeiten werden gegeneinander aufgerechnet (Bilanzverkürzung). Der Konzern kann keine Schulden bei sich selbst haben (Einheitsgrundsatz).</p>
<p><strong>Aufrechnungsdifferenzen</strong> entstehen, wenn Ansprüche und Verpflichtungen in unterschiedlicher Höhe gegenüberstehen → Behandlung als ergebniswirksamer Unterschiedsbetrag.</p>

<h5>📌 At-Equity-Konsolidierung (§§ 311–312 HGB)</h5>
<p><strong>Anwendung:</strong> Assoziierte Unternehmen mit <strong>maßgeblichem Einfluss</strong> (20–50% Anteile). Kein beherrschender Einfluss (→ keine Vollkonsolidierung).</p>
<p><strong>Vorgehen (Buchwertmethode):</strong> Beteiligungsbuchwert wird um anteilige EK-Veränderungen des assoziierten UN fortgeschrieben:</p>
<p>Beteiligungsbuchwert(neu) = Beteiligungsbuchwert(alt) + anteiliger Jahresüberschuss − Dividende − Abschreibungen stille Reserven + realisierte stille Lasten − Abschreibungen Goodwill</p>`,

  erklaerungen: [
    {
      titel: "🏦 Kapitalkonsolidierung – Neubewertungsmethode",
      inhalt: `<div class="def-box"><div class="def-label">Ziel der Kapitalkonsolidierung</div>
Eliminierung des <strong>Beteiligungsbuchwerts</strong> beim MU (Aktivseite) gegen das anteilige <strong>Eigenkapital</strong> des TU (Passivseite) → Konzernsicht als ein einziges Unternehmen.
</div>
<p><strong>Neubewertungsmethode (§ 301 HGB):</strong></p>
<table class="erk-table">
  <tr><th>Schritt</th><th>Beschreibung</th></tr>
  <tr><td>1. Summenabschluss</td><td>Bilanzen von MU und TU werden addiert</td></tr>
  <tr><td>2. Neubewertung TU</td><td>Stille Reserven (+) und stille Lasten (−) werden aufgedeckt → Zeitwerte ansetzen</td></tr>
  <tr><td>3. Verrechnung</td><td>Beteiligungsbuchwert (MU) gegen neu bewertetes EK (TU) aufrechnen</td></tr>
  <tr><td>4. Unterschiedsbetrag</td><td>Verbleibt ein Rest → <strong>aktiver Unterschiedsbetrag (Goodwill)</strong> oder passiver Unterschiedsbetrag</td></tr>
</table>
<div class="def-box"><div class="def-label">Beispiel: M-AG erwirbt 100% der T-GmbH</div>
Beteiligungsbuchwert M-AG: <strong>500 GE</strong><br>
EK T-GmbH (Buchwert): 400 GE<br>
Stille Reserven: +60 GE · Stille Lasten: +20 GE<br>
Neu bewertetes EK T-GmbH: 400 + 60 − 20 = <strong>440 GE</strong><br>
<strong>Goodwill = 500 − 440 = 60 GE</strong>
</div>
<p><strong>Goodwill-Behandlung:</strong></p>
<p>HGB: Planmäßige Abschreibung über die <strong>Nutzungsdauer</strong> (max. 10 Jahre, Mindestdauer 5 Jahre nach HGB-Reform).<br>
IFRS: <strong>Impairment Only</strong> – kein planmäßiges Abschreiben, aber jährlicher Werthaltigkeitstest (Impairment Test).</p>`,
      merke: "Goodwill = Kaufpreis − anteiliges neubewertetes EK. HGB: planm. Abschreibung. IFRS: Impairment Only.",
      flipcards: [
        { vorne: "Was wird bei der Kapitalkonsolidierung eliminiert?", hinten: "Beteiligungsbuchwert (MU, Aktiva) gegen anteiliges EK (TU, Passiva) → <strong>Doppelzählung</strong> vermeiden" },
        { vorne: "Goodwill = ?", hinten: "Kaufpreis − anteiliges <strong>neubewertetes EK</strong> des TU. Entsteht, wenn mehr gezahlt wurde als der Substanzwert." },
        { vorne: "Stille Reserven", hinten: "Zeitwert eines Vermögensgegenstands liegt <strong>über dem Buchwert</strong> → Aufdeckung erhöht das neu bewertete EK" },
        { vorne: "Stille Lasten", hinten: "Zeitwert einer Schuld liegt <strong>über dem Buchwert</strong> → Aufdeckung verringert das neu bewertete EK" },
        { vorne: "Neubewertungsmethode vs. Buchwertmethode", hinten: "<strong>Neubewertungsmethode:</strong> Stille Reserven/Lasten des TU vollständig aufdecken (auch Minderheitsanteil)<br><strong>Buchwertmethode (at-equity):</strong> Nur anteiliger Bereich wird neu bewertet" }
      ],
      interaktion: [
        { frage: "Was wird bei der Kapitalkonsolidierung aufgerechnet?", optionen: ["Umsätze und Kosten", "Beteiligungsbuchwert (MU) gegen EK (TU)", "Forderungen und Verbindlichkeiten", "Gewinne und Verluste"], richtig: 1, erklaerung: "Kapitalkonsolidierung: Beteiligungsbuchwert beim MU (Aktiva) wird gegen das anteilige EK des TU (Passiva) aufgerechnet." },
        { frage: "Wie wird Goodwill nach HGB behandelt?", optionen: ["Impairment Only (kein planmäßiges Abschreiben)", "Sofortiger Aufwand", "Planmäßige Abschreibung über die Nutzungsdauer", "Kein Ansatz in der Bilanz"], richtig: 2, erklaerung: "HGB: Goodwill wird planmäßig über die Nutzungsdauer abgeschrieben. IFRS: Impairment-Only-Ansatz." },
        { frage: "Goodwill entsteht, wenn...", optionen: ["Der Kaufpreis unter dem EK liegt", "Der Kaufpreis über dem neubewerteten EK liegt", "Keine stillen Reserven vorhanden sind", "Das TU einen Verlust hatte"], richtig: 1, erklaerung: "Goodwill = Kaufpreis − neubewertetes EK des TU. Ist der Kaufpreis höher, entsteht ein positiver Goodwill (Geschäfts- oder Firmenwert)." },
        { frage: "Stille Reserven im TU erhöhen bei Aufdeckung das...", optionen: ["Fremdkapital des TU", "neubewertete Eigenkapital des TU", "Goodwill des MU", "Beteiligungsbuchwert des MU"], richtig: 1, erklaerung: "Stille Reserven: Zeitwert > Buchwert → Differenz erhöht das neu bewertete EK des TU → verringert c.p. den Goodwill." }
      ]
    },
    {
      titel: "💳 Schuldenkonsolidierung (§ 303 HGB)",
      inhalt: `<div class="def-box"><div class="def-label">Aufgabe der Schuldenkonsolidierung</div>
Konzerninterne Schuldverhältnisse (Forderungen ↔ Verbindlichkeiten, Rückstellungen, Rechnungsabgrenzungsposten) werden <strong>eliminiert</strong>. Der Konzern kann keine Forderungen und Verbindlichkeiten gegen sich selbst haben (Einheitsgrundsatz § 297 Abs. 3 HGB).
</div>
<table class="erk-table">
  <tr><th>Schuldverhältnis</th><th>Konsolidierungspflicht?</th></tr>
  <tr><td><strong>Innerkonzernlich</strong> (MU ↔ TU oder TU ↔ TU)</td><td>✅ Ja – Pflicht zur Schuldenkonsolidierung</td></tr>
  <tr><td><strong>Drittschuldverhältnis</strong> (Konzern ↔ konzernfremdes UN)</td><td>❌ Nein</td></tr>
</table>
<p><strong>Aufrechnungsdifferenzen:</strong> Entstehen, wenn Ansprüche und Verpflichtungen in unterschiedlicher Höhe gegenüberstehen. Behandlung je nach Ursache ergebniswirksam oder erfolgsneutral.</p>
<div class="def-box"><div class="def-label">Beispiel ohne Differenz</div>
MU gewährt TU einen Kredit von 1.000 €.<br>
MU: Forderung 1.000 (Aktiva) · TU: Verbindlichkeit 1.000 (Passiva)<br>
→ Konzernbilanz: beide Positionen entfallen → <strong>Bilanzverkürzung</strong>
</div>
<p><strong>Ausnahme (§ 303 Abs. 2 HGB):</strong> Auf Schuldenkonsolidierung kann verzichtet werden, wenn die wegzulassenden Beträge für die Vermittlung eines den tatsächlichen Verhältnissen entsprechenden Bildes von <strong>untergeordneter Bedeutung</strong> sind.</p>`,
      merke: "Schuldenkonsolidierung = Eliminierung konzerninterner Forderungen/Verbindlichkeiten. Drittschuldverhältnisse bleiben. Ausnahme: untergeordnete Bedeutung.",
      flipcards: [
        { vorne: "Welcher Grundsatz begründet die Schuldenkonsolidierung?", hinten: "Einheitsgrundsatz (§ 297 Abs. 3 HGB): Konzern = ein Unternehmen → kein UN hat Forderungen/Verbindlichkeiten gegen sich selbst" },
        { vorne: "Was sind Aufrechnungsdifferenzen?", hinten: "Entstehen, wenn Forderung (Aktiva) und Verbindlichkeit (Passiva) <strong>nicht gleich hoch</strong> sind (z.B. durch Wechselkurse, Abschreibungen, zeitliche Unterschiede)" },
        { vorne: "§ 303 Abs. 2 HGB – Ausnahme", hinten: "Schuldenkonsolidierung kann entfallen, wenn die Beträge für ein den tatsächlichen Verhältnissen entsprechendes Bild <strong>von untergeordneter Bedeutung</strong> sind" }
      ],
      interaktion: [
        { frage: "Was wird bei der Schuldenkonsolidierung eliminiert?", optionen: ["Gewinne aus Warenlieferungen", "Konzerninterne Forderungen und Verbindlichkeiten", "Beteiligungsbuchwerte", "Dividendenzahlungen"], richtig: 1, erklaerung: "Schuldenkonsolidierung (§ 303 HGB): Gegenseitige Forderungen und Verbindlichkeiten zwischen Konzernunternehmen werden aufgerechnet." },
        { frage: "Muss ein Drittschuldverhältnis (Konzern ↔ konzernfremdes UN) konsolidiert werden?", optionen: ["Ja, immer", "Nur wenn >50.000 €", "Nein", "Ja, aber nur bei MU"], richtig: 2, erklaerung: "Drittschuldverhältnisse (zwischen Konzern und konzernfremdem UN) unterliegen NICHT der Schuldenkonsolidierung." }
      ]
    },
    {
      titel: "📈 At-Equity-Konsolidierung (§§ 311–312 HGB)",
      inhalt: `<div class="def-box"><div class="def-label">Wann gilt die Equity-Methode?</div>
Anwendung bei <strong>assoziierten Unternehmen</strong>: Beteiligung zwischen <strong>20% und 50%</strong> (= maßgeblicher Einfluss, aber kein beherrschender). Keine Vollkonsolidierung möglich.<br>
<strong>Assoziierungsvermutung:</strong> ab 20% der Anteile. Unter 20%: maßgeblicher Einfluss muss nachgewiesen werden.
</div>
<p><strong>Ziel:</strong> Anteiliges EK des Konzerns am assoziierten UN widerspiegeln (nicht die volle Bilanz einbeziehen).</p>
<p><strong>Erstbewertung (Buchwertmethode, § 312 Abs. 3 HGB):</strong></p>
<table class="erk-table">
  <tr><th>Berechnung</th><th>Betrag</th></tr>
  <tr><td>Anschaffungskosten der Beteiligung</td><td>= Kaufpreis</td></tr>
  <tr><td>− Anteil am EK (Beteiligungsquote × EK)</td><td></td></tr>
  <tr><td>= <strong>Unterschiedsbetrag</strong></td><td></td></tr>
  <tr><td>− anteilige stille Reserven</td><td></td></tr>
  <tr><td>+ anteilige stille Lasten</td><td></td></tr>
  <tr><td>= <strong>Geschäfts- oder Firmenwert (Goodwill)</strong></td><td></td></tr>
</table>
<p><strong>Folgebewertung (§ 312 Abs. 4 HGB):</strong><br>
Beteiligungsbuchwert(neu) = Buchwert(alt) + anteiliger JÜ − Dividende − Abschr. stille Reserven + realisierte stille Lasten − Abschr. Goodwill</p>
<div class="def-box"><div class="def-label">Zahlenbeispiel (Erstbewertung)</div>
Schnitzel AG erwirbt 40% der Paniermehl GmbH für 500 T€<br>
EK Paniermehl: 700 T€ · Stille Reserven: 120 T€ · Stille Lasten: 20 T€<br>
<strong>Unterschiedsbetrag:</strong> 500 − (0,40 × 700) = 500 − 280 = 220 T€<br>
<strong>Goodwill:</strong> 220 − (0,40 × 120) + (0,40 × 20) = 220 − 48 + 8 = <strong>180 T€</strong>
</div>`,
      merke: "At-Equity = 20–50% Beteiligung (maßgeblicher Einfluss). Buchwertmethode: Beteiligungswert fortschreiben. Goodwill = AK − anteiliges neu bew. EK.",
      flipcards: [
        { vorne: "Wann gilt die Assoziierungsvermutung?", hinten: "Ab <strong>20% der Anteile</strong>. Unter 20%: maßgeblicher Einfluss muss nachgewiesen werden." },
        { vorne: "Unterschied Vollkonsolidierung vs. At-Equity", hinten: "<strong>Vollkonsolidierung:</strong> Alle Bilanz- und GuV-Positionen werden einbezogen (>50%)<br><strong>At-Equity:</strong> Nur ein Bilanzposten (Beteiligungsbuchwert) wird fortgeschrieben (20–50%)" },
        { vorne: "Formel: Beteiligungsbuchwert Folgebewertung", hinten: "BW(neu) = BW(alt)<br>+ anteiliger JÜ<br>− Dividende<br>− Abschr. stille Reserven<br>+ realisierte stille Lasten<br>− Abschr. Goodwill" },
        { vorne: "Was passiert bei der At-Equity mit der GuV?", hinten: "Keine Einbeziehung der GuV-Positionen des assoziierten UN. Nur der <strong>anteilige Jahresüberschuss/−fehlbetrag</strong> beeinflusst den Beteiligungsbuchwert." }
      ],
      interaktion: [
        { frage: "Ab welcher Beteiligungsquote gilt die Assoziierungsvermutung?", optionen: ["10%", "20%", "50%", "75%"], richtig: 1, erklaerung: "§ 311 Abs. 1 HGB: Ab 20% Anteile wird maßgeblicher Einfluss vermutet → Assoziierungsvermutung. Unter 20%: muss nachgewiesen werden." },
        { frage: "Was wird bei At-Equity in der Konzernbilanz gezeigt?", optionen: ["Alle Aktiva und Passiva des assoz. UN", "Nur der (fortgeschriebene) Beteiligungsbuchwert", "Nur die Umsätze des assoz. UN", "Der Goodwill als separate Position"], richtig: 1, erklaerung: "At-Equity-Methode: Kein Einbeziehen aller Bilanzpositionen, sondern nur Fortschreibung des Beteiligungsbuchwerts um anteilige EK-Veränderungen." },
        { frage: "Welches Ziel verfolgt die At-Equity-Konsolidierung?", optionen: ["Doppelzählung von EK eliminieren", "Anteiliges EK des Konzerns am assoz. UN widerspiegeln", "Schulden verrechnen", "Goodwill abschreiben"], richtig: 1, erklaerung: "At-Equity: Das anteilige EK des Konzerns am assoziierten Unternehmen soll in der Konzernbilanz widergespiegelt werden." },
        { frage: "Eine Dividende vom assoziierten UN...", optionen: ["erhöht den Beteiligungsbuchwert", "hat keine Auswirkung", "verringert den Beteiligungsbuchwert", "wird als Umsatz gebucht"], richtig: 2, erklaerung: "Dividende verringert den Beteiligungsbuchwert (da sie bereits im EK des assoz. UN berücksichtigt war und jetzt ausgeschüttet wird)." }
      ]
    }
    ,
    {
      titel: "\uD83D\uDCCB Konsolidierungsvorbereitung: HB\u00a0I \u2192 HB\u00a0II \u2192 Konzernabschluss",
      inhalt: `<div class="def-box"><div class="def-label">Die 3 Ebenen der Konsolidierungsvorbereitung</div>
<strong>HB\u00a0I</strong> = Jahresabschluss der rechtlich selbst\u00e4ndigen Konzerneinheit (nach nationalen Vorschriften)<br>
<strong>HB\u00a0II</strong> = Vereinheitlichter HB\u00a0I (gleicher Stichtag, gleiche Bilanzierungsmethoden, gleiche Bewertungsregeln)<br>
<strong>Summenabschluss</strong> = Addition gleichartiger Posten aller HB\u00a0II<br>
<strong>Konzernabschluss</strong> = Summenabschluss abz\u00fcglich Konsolidierungsma\u00dfnahmen
</div>
<table class="erk-table">
  <tr><th>Vereinheitlichung</th><th>Inhalt</th><th>HGB-Grundlage</th></tr>
  <tr><td><strong>Stichtag</strong></td><td>Alle TU m\u00fcssen denselben Abschlussstichtag wie das MU verwenden; bei Abweichung &gt;\u00a03 Monate: Zwischenbericht</td><td>\u00a7\u00a0299 HGB</td></tr>
  <tr><td><strong>Bewertung</strong></td><td>Einheitliche Bewertungsmethoden konzernweit (Methode des MU gilt f\u00fcr alle TU)</td><td>\u00a7\u00a0308 HGB</td></tr>
  <tr><td><strong>Ansatz</strong></td><td>Einheitliche Ansatzvorschriften; Wahlrechte m\u00fcssen f\u00fcr gleiche Sachverhalte einheitlich aus\u00fcbt werden</td><td>\u00a7\u00a7\u00a0300, 308 HGB</td></tr>
  <tr><td><strong>W\u00e4hrung</strong></td><td>Umrechnung ausl\u00e4ndischer Abschl\u00fcsse in Konzernw\u00e4hrung (modifizierte Stichtags- oder Zeitbezugsmethode)</td><td>\u00a7\u00a0308a HGB</td></tr>
  <tr><td><strong>Gliederung</strong></td><td>Einheitliche Bilanz- und GuV-Gliederung nach HGB-Vorschriften</td><td>\u00a7\u00a0290 HGB</td></tr>
</table>
<div class="def-box"><div class="def-label">W\u00e4hrungsumrechnung: 2 Methoden</div>
<strong>Modifizierte Stichtagsmethode (\u00a7\u00a7\u00a0256a, 308a HGB / IAS\u00a021):</strong> Alle Aktiv- und Passivposten zum Stichtagskurs, Eigenkapital zum historischen Kurs \u2192 Umrechnungsdifferenz erscheint als Sonderposten im EK.<br><br>
<strong>Zeitbezugsmethode (IAS\u00a021 / US-GAAP):</strong> Historische Werte (z.\u00a0B. AHK) werden mit historischem Kurs, Gegenwartswerte (Markt-/B\u00f6rsenpreise) mit Stichtagskurs umgerechnet \u2192 Differenzen gehen in die GuV.
</div>`,
      merke: "HB\u00a0I \u2192 Vereinheitlichung \u2192 HB\u00a0II \u2192 Addition \u2192 Summenabschluss \u2192 Konsolidierung \u2192 Konzernabschluss.",
      interaktion: [
        { frage: "Was ist der Unterschied zwischen HB\u00a0I und HB\u00a0II?", optionen: ["HB\u00a0I ist der Konzernabschluss, HB\u00a0II der Einzelabschluss", "HB\u00a0I ist der Einzelabschluss nach nationalem Recht, HB\u00a0II der vereinheitlichte Abschluss", "HB\u00a0I und HB\u00a0II sind identisch", "HB\u00a0II gilt nur f\u00fcr das Mutterunternehmen"], richtig: 1, erklaerung: "HB\u00a0I = nationaler Einzelabschluss. HB\u00a0II = an Konzernstandards angepasster Abschluss (gleicher Stichtag, Methoden, Bewertung)." },
        { frage: "Ab welcher Stichtagsabweichung muss ein Zwischenbericht f\u00fcr die Konsolidierung erstellt werden (HGB)?", optionen: ["1 Monat", "3 Monate", "6 Monate", "12 Monate"], richtig: 1, erklaerung: "\u00a7\u00a0299 HGB: Weicht der Abschlussstichtag eines TU mehr als 3 Monate vom Konzernstichtag ab, ist ein Zwischenabschluss zu erstellen." },
        { frage: "Welche Bewertungsvorschriften gelten f\u00fcr alle Konzernunternehmen bei der HGB-Konsolidierung?", optionen: ["Jedes TU w\u00e4hlt selbst", "Die Vorschriften des Mutterunternehmens gelten konzernweit", "Die strengsten nationalen Regeln aller TU", "IAS\u00a08 gilt immer"], richtig: 1, erklaerung: "\u00a7\u00a0308 HGB: Die Bewertungsvorschriften des MU gelten einheitlich f\u00fcr den gesamten Konzern. Abweichende TU-Methoden m\u00fcssen angepasst werden." }
      ]
    },
    {
      titel: "\u2696\uFE0F Unterschiedsbetr\u00e4ge: Goodwill und Badwill",
      inhalt: `<div class="def-box"><div class="def-label">Aktiver Unterschiedsbetrag = Goodwill (GoF)</div>
Entsteht wenn: <strong>Beteiligungsbuchwert &gt; anteiliges neubewertetes EK des TU</strong><br>
\u00a7\u00a0301 Abs.\u00a03 HGB: Ausweis als <strong>Gesch\u00e4fts- oder Firmenwert (GoF)</strong> auf der Aktivseite.<br>
\u00a7\u00a0253 Abs.\u00a03 HGB: Planm\u00e4\u00dfige Abschreibung \u00fcber die Nutzungsdauer (Annahme 5 Jahre wenn keine bessere Sch\u00e4tzung).
</div>
<div class="def-box"><div class="def-label">Passiver Unterschiedsbetrag = Negativer Goodwill</div>
Entsteht wenn: <strong>Beteiligungsbuchwert &lt; anteiliges neubewertetes EK des TU</strong><br>
\u00a7\u00a0301 Abs.\u00a03 HGB: Ausweis unter dem EK als \u201eUnterschiedsbetrag aus der Kapitalkonsolidierung\u201c.<br>
Aufl\u00f6sung nur ergebniswirksam m\u00f6glich nach \u00a7\u00a0309 Abs.\u00a02 HGB \u2013 zwei F\u00e4lle:
</div>
<table class="erk-table">
  <tr><th>Ursache</th><th>Bezeichnung</th><th>Aufl\u00f6sung</th></tr>
  <tr><td>Niedriger Kaufpreis wegen erwarteter Verluste / schlechter Ertragslage</td><td><strong>Badwill</strong></td><td>Ergebniswirksam, wenn die negative Entwicklung eintritt (\u00a7\u00a0309 Abs.\u00a02 Nr.\u00a01 HGB)</td></tr>
  <tr><td>G\u00fcnstiger Kauf bei positiver Marktlage</td><td><strong>Lucky Buy</strong></td><td>Ergebniswirksam nach Realisationsprinzip bei nachhaltiger guter Ertragslage (\u00a7\u00a0309 Abs.\u00a02 Nr.\u00a02 HGB)</td></tr>
</table>
<div class="def-box"><div class="def-label">Zahlenbeispiel (aus Vorlesung): Erstkonsolidierung 100%</div>
Beteiligungsbuchwert MU-AG: <strong>1.300 TEUR</strong><br>
Neu bewertetes EK TU-AG: EK (1.000) + Neubewertungsr\u00fcckl. (110) = <strong>1.110 TEUR</strong><br>
(+50 stille Res. Grundst\u00fccke + 100 stille Res. Maschinen \u2212 40 stille Lasten = 110)<br>
<strong>Aktiver Unterschiedsbetrag (GoF) = 1.300 \u2212 1.110 = 190 TEUR</strong><br>
Abschreibung GoF: 190 / 5 Jahre = <strong>38 TEUR/Jahr</strong>
</div>`,
      merke: "Goodwill = Buchwert > EK \u2192 aktiv, Abschreibung. Badwill = Buchwert < EK \u2192 passiv, Aufl\u00f6sung nur bei Verlust oder Lucky Buy.",
      interaktion: [
        { frage: "Wann entsteht ein aktiver Unterschiedsbetrag (Goodwill)?", optionen: ["Wenn Beteiligungsbuchwert < neubewertetes EK", "Wenn Beteiligungsbuchwert > neubewertetes EK", "Wenn keine stillen Reserven vorliegen", "Wenn das TU einen Verlust erwirtschaftet"], richtig: 1, erklaerung: "Aktiver Unterschiedsbetrag (GoF) = Beteiligungsbuchwert MINUS neubewertetes EK des TU ist positiv. MU hat also mehr bezahlt als der Substanzwert." },
        { frage: "Unter welchen Umst\u00e4nden darf ein passiver Unterschiedsbetrag aufgel\u00f6st werden?", optionen: ["Jederzeit nach Ermessen", "Nur wenn das TU aufgel\u00f6st wird", "Wenn die erwartete negative Ertragslage eintritt oder ein realisierter Gewinn feststeht", "Nach 10 Jahren automatisch"], richtig: 2, erklaerung: "\u00a7\u00a0309 Abs.\u00a02 HGB: Aufl\u00f6sung nur wenn (1) erwartete negative Entwicklung eingetreten ist (Badwill) oder (2) realisierter Gewinn feststeht (Lucky Buy)." },
        { frage: "MU zahlt 800 TEUR f\u00fcr 100% einer TU. Das neubewertete EK des TU betr\u00e4gt 900 TEUR. Was entsteht?", optionen: ["Aktiver Unterschiedsbetrag (GoF) von 100 TEUR", "Passiver Unterschiedsbetrag von 100 TEUR", "Kein Unterschiedsbetrag", "Goodwill von 900 TEUR"], richtig: 1, erklaerung: "Beteiligungsbuchwert (800) < neubewertetes EK (900) \u2192 passiver Unterschiedsbetrag von 100 TEUR (negativer Goodwill / Lucky Buy oder Badwill)." }
      ]
    },
    {
      titel: "\uD83D\uDC65 Kapitalkonsolidierung bei Minderheitsgesellschaftern (&lt;\u00a0100%)",
      inhalt: `<div class="def-box"><div class="def-label">Vollkonsolidierung trotz Minderheitsanteil</div>
Auch wenn das MU weniger als 100% h\u00e4lt, werden <strong>alle Verm\u00f6genswerte und Schulden vollst\u00e4ndig</strong> (100%) einbezogen. Der nicht dem MU geh\u00f6rende Anteil am EK des TU wird als <strong>Ausgleichsposten f\u00fcr Anteile anderer Gesellschafter</strong> ausgewiesen (nach dem EK, \u00a7\u00a0307 HGB).
</div>
<p><strong>Vorgehen Erstkonsolidierung (Neubewertungsverfahren) bei z.\u00a0B. 80% Anteil:</strong></p>
<table class="erk-table">
  <tr><th>Schritt</th><th>Beschreibung</th></tr>
  <tr><td>1.\u00a0Summenabschluss</td><td>HB\u00a0II von MU und TU addieren</td></tr>
  <tr><td>2.\u00a0Neubewertung TU</td><td>Stille Reserven / Lasten vollst\u00e4ndig aufdecken (100%, nicht nur 80%)</td></tr>
  <tr><td>3.\u00a0Verrechnung 80%</td><td>80% des neubewerteten EK gegen Beteiligungsbuchwert MU aufrechnen \u2192 GoF</td></tr>
  <tr><td>4.\u00a0Minderheiten\u00a020%</td><td>20% des neubewerteten EK als Ausgleichsposten f\u00fcr fremde Gesellschafter</td></tr>
</table>
<div class="def-box"><div class="def-label">Zahlenbeispiel (aus Vorlesung): 80% Anteilsbesitz</div>
Beteiligungsbuchwert MU (f\u00fcr 80%): <strong>1.300 TEUR</strong><br>
Neubewertetes EK TU: 1.000 + 150 (stille Reserven) = <strong>1.150 TEUR</strong><br>
80% davon: 0,80 \u00d7 1.150 = <strong>920 TEUR</strong><br>
<strong>GoF = 1.300 \u2212 920 = 380 TEUR</strong><br><br>
Ausgleichsposten Minderheiten = 20% \u00d7 1.150 = <strong>230 TEUR</strong><br>
(= 20% Gez.\u00a0Kapital\u00a0100 + 20% R\u00fccklagen\u00a040 + 20% JÜ\u00a060 + 20% Neubew.R\u00fcckl.\u00a030)
</div>`,
      merke: "Vollkonsolidierung = 100% der Verm\u00f6genswerte, aber nur Anteil des MU gegen Beteiligungsbuchwert verrechnen. Rest = Ausgleichsposten Minderheiten.",
      interaktion: [
        { frage: "Wie werden Verm\u00f6genswerte einer 80%-Tochter in den Konzernabschluss einbezogen?", optionen: ["Nur zu 80% (anteilig)", "Zu 100% (vollst\u00e4ndig)", "Gar nicht, nur als Beteiligung", "Zu 50%"], richtig: 1, erklaerung: "Vollkonsolidierung: Alle Aktiva und Passiva des TU gehen vollst\u00e4ndig (100%) in den Konzernabschluss ein, unabh\u00e4ngig vom Beteiligungsanteil." },
        { frage: "Was repr\u00e4sentiert der 'Ausgleichsposten f\u00fcr Anteile anderer Gesellschafter'?", optionen: ["Den Goodwill aus der Kapitalkonsolidierung", "Das anteilige EK des TU, das nicht dem MU geh\u00f6rt", "Die Schulden der Minderheitsgesellschafter", "Stille Reserven der Minderheiten"], richtig: 1, erklaerung: "Ausgleichsposten = anteiliges neubewertetes EK des TU, das auf Minderheitsgesellschafter entf\u00e4llt. Ausweis nach dem Konzerneigenkapital." },
        { frage: "MU h\u00e4lt 75% an TU. Neubewertetes EK des TU = 1.000 TEUR. Beteiligungsbuchwert = 850 TEUR. Wie hoch ist der Ausgleichsposten?", optionen: ["750 TEUR", "250 TEUR", "1.000 TEUR", "100 TEUR"], richtig: 1, erklaerung: "Ausgleichsposten = 25% \u00d7 1.000 = 250 TEUR. Dieser repr\u00e4sentiert das anteilige EK der Minderheitsgesellschafter." }
      ]
    }
  ],
  quiz: [
    { frage: "Was wird bei der Kapitalkonsolidierung aufgerechnet?", optionen: ["Umsätze und Kosten", "Beteiligungsbuchwert (MU) gegen EK (TU)", "Forderungen und Verbindlichkeiten", "Gewinne und Verluste"], richtig: 1, erklaerung: "Kapitalkonsolidierung: Beteiligungsbuchwert beim MU (Aktiva) wird gegen das anteilige EK des TU (Passiva) aufgerechnet." },
    { frage: "Goodwill entsteht, wenn:", optionen: ["Kaufpreis < neubewertetes EK", "Kaufpreis > neubewertetes EK des TU", "Keine stillen Reserven vorhanden", "TU Verluste hat"], richtig: 1, erklaerung: "Goodwill = Kaufpreis − neubewertetes EK des TU. Entsteht, wenn mehr bezahlt wird als der Substanzwert." },
    { frage: "Wie wird Goodwill nach HGB behandelt?", optionen: ["Impairment Only – kein Abschreiben", "Sofortiger Aufwand", "Planmäßige Abschreibung über Nutzungsdauer", "Kein Ansatz in der Bilanz"], richtig: 2, erklaerung: "HGB: Goodwill planmäßig abschreiben. IFRS: Impairment-Only-Ansatz." },
    { frage: "Stille Reserven erhöhen bei Aufdeckung das:", optionen: ["Fremdkapital des TU", "Neubewertete EK des TU", "Goodwill des MU", "Beteiligungsbuchwert des MU"], richtig: 1, erklaerung: "Stille Reserven: Zeitwert > Buchwert → Aufdeckung erhöht das neubewertete EK des TU." },
    { frage: "Stille Lasten verringern bei Aufdeckung das:", optionen: ["Goodwill", "Neubewertete EK des TU", "Kaufpreis", "Beteiligungsbuchwert"], richtig: 1, erklaerung: "Stille Lasten: Zeitwert der Schuld > Buchwert → Aufdeckung verringert das neubewertete EK des TU." },
    { frage: "Was ist der Einheitsgrundsatz (§ 297 Abs. 3 HGB)?", optionen: ["Konzernunternehmen haben denselben Steuerberater", "Konzern wird so dargestellt als wäre er ein Unternehmen", "Alle TU haben denselben Geschäftsführer", "MU trägt alle Schulden"], richtig: 1, erklaerung: "Einheitsgrundsatz: Konzern wird so dargestellt, als wäre er ein einziges Unternehmen → begründet die Schuldenkonsolidierung." },
    { frage: "Was eliminiert die Schuldenkonsolidierung?", optionen: ["Gewinne aus konzerninternen Lieferungen", "Konzerninterne Forderungen und Verbindlichkeiten", "Beteiligungsbuchwerte", "Dividenden"], richtig: 1, erklaerung: "Schuldenkonsolidierung (§ 303 HGB): Gegenseitige Forderungen und Verbindlichkeiten zwischen Konzernunternehmen werden aufgerechnet." },
    { frage: "Müssen Drittschuldverhältnisse konsolidiert werden?", optionen: ["Ja, immer", "Nur wenn >50.000 €", "Nein", "Ja, aber nur bei MU"], richtig: 2, erklaerung: "Drittschuldverhältnisse (zwischen Konzern und konzernfremdem UN) unterliegen nicht der Schuldenkonsolidierung." },
    { frage: "Ab welcher Beteiligungsquote gilt At-Equity-Konsolidierung (Assoziierungsvermutung)?", optionen: ["10%", "20%", "50%", "75%"], richtig: 1, erklaerung: "§ 311 HGB: Ab 20% Anteile wird maßgeblicher Einfluss vermutet → Assoziierungsvermutung → At-Equity-Konsolidierung." },
    { frage: "Was wird bei At-Equity in der Konzernbilanz gezeigt?", optionen: ["Alle Aktiva und Passiva des assoz. UN", "Nur der fortgeschriebene Beteiligungsbuchwert", "Nur die Umsätze des assoz. UN", "Goodwill als separate Position"], richtig: 1, erklaerung: "At-Equity: Kein Einbeziehen aller Bilanzpositionen. Nur Fortschreibung des Beteiligungsbuchwerts." },
    { frage: "Welche Konsolidierungsart gilt für Gemeinschaftsunternehmen?", optionen: ["Vollkonsolidierung", "Schuldenkonsolidierung", "Quotenkonsolidierung (§ 310 HGB)", "At-Equity"], richtig: 2, erklaerung: "Quotenkonsolidierung (§ 310 HGB): anteilige Einbeziehung bei Gemeinschaftsunternehmen." },
    { frage: "Schritt 1 der Kapitalkonsolidierung (Neubewertungsmethode)?", optionen: ["Goodwill berechnen", "Summenabschluss: Bilanzen addieren", "Forderungen eliminieren", "TU auflösen"], richtig: 1, erklaerung: "Schritt 1: Summenabschluss – Bilanzen von MU und TU werden addiert." },
    { frage: "Was sind Aufrechnungsdifferenzen bei der Schuldenkonsolidierung?", optionen: ["Fehler im Jahresabschluss", "Entstehen wenn Forderung und Verbindlichkeit nicht gleich hoch sind", "Steuerliche Differenzen", "Unterschied zwischen HGB und IFRS"], richtig: 1, erklaerung: "Aufrechnungsdifferenzen: wenn Forderung (Aktiva) und Verbindlichkeit (Passiva) in unterschiedlicher Höhe gegenüberstehen." },
    { frage: "Rechtsgrundlage der Kapitalkonsolidierung nach HGB:", optionen: ["§ 290 HGB", "§ 297 HGB", "§ 301 HGB", "§ 311 HGB"], richtig: 2, erklaerung: "§ 301 HGB regelt die Kapitalkonsolidierung (Aufstellung des Konzernabschlusses)." },
    { frage: "Rechtsgrundlage der At-Equity-Konsolidierung nach HGB:", optionen: ["§ 290 HGB", "§ 301 HGB", "§ 303 HGB", "§§ 311–312 HGB"], richtig: 3, erklaerung: "§§ 311–312 HGB: maßgeblicher Einfluss (§ 311) und Buchwertmethode (§ 312)." },
    { frage: "Was ist das Ziel der At-Equity-Konsolidierung?", optionen: ["EK-Doppelzählung eliminieren", "Schulden verrechnen", "Anteiliges EK des Konzerns am assoz. UN widerspiegeln", "Goodwill berechnen"], richtig: 2, erklaerung: "At-Equity: Das anteilige EK des Konzerns am assoziierten Unternehmen soll in der Konzernbilanz widergespiegelt werden." },
    { frage: "Folgebewertung At-Equity: Was erhöht den Beteiligungsbuchwert?", optionen: ["Dividendenzahlung vom assoz. UN", "Jahresfehlbetrag des assoz. UN", "Anteiliger Jahresüberschuss des assoz. UN", "Abschreibung des Goodwill"], richtig: 2, erklaerung: "Anteiliger Jahresüberschuss des assoz. UN erhöht den Beteiligungsbuchwert. Dividenden verringern ihn." },
    { frage: "Was passiert bei Kapitalkonsolidierung mit dem negativen Unterschiedsbetrag?", optionen: ["Wird ignoriert", "Ist ein passiver Unterschiedsbetrag / negativer Goodwill", "Wird sofort als Ertrag gebucht", "Erhöht das EK des MU"], richtig: 1, erklaerung: "Wenn Kaufpreis < neubewertetes EK des TU → passiver Unterschiedsbetrag (negativer Goodwill)." },
    { frage: "Warum kann ein Konzern keine Schulden bei sich selbst haben?", optionen: ["Wegen IFRS 10", "Wegen des Einheitsgrundsatzes § 297 HGB", "Wegen des Tannenbaumprinzips", "Wegen § 290 HGB"], richtig: 1, erklaerung: "Einheitsgrundsatz § 297 HGB: Konzern = ein Unternehmen → kann keine Schulden gegen sich selbst haben." },
    { frage: "Was bedeutet Impairment Only (IFRS) beim Goodwill?", optionen: ["Jährliche planmäßige Abschreibung", "Kein planmäßiges Abschreiben, nur jährlicher Werthaltigkeitstest", "Sofortige Abschreibung", "Keine Bewertung nötig"], richtig: 1, erklaerung: "IFRS: Goodwill wird nicht planmäßig abgeschrieben, aber jährlich auf Werthaltigkeit geprüft (Impairment Test)." }
  ],
  lueckentext: [
    { text: "Bei der Kapitalkonsolidierung wird der ___ des MU gegen das anteilige ___ des TU aufgerechnet.", luecken: ["Beteiligungsbuchwert", "Eigenkapital"], erklaerung: "Kapitalkonsolidierung: Beteiligungsbuchwert (MU) ↔ EK (TU)." },
    { text: "Goodwill = ___ minus anteiliges ___ des TU. Er entsteht wenn mehr gezahlt wird als der ___.", luecken: ["Kaufpreis", "neubewertetes EK", "Substanzwert"], erklaerung: "Goodwill = Mehrpreis über den Substanzwert hinaus." },
    { text: "Nach HGB wird Goodwill ___ abgeschrieben, nach IFRS gilt der ___ Ansatz (jährlicher Werthaltigkeitstest).", luecken: ["planmäßig", "Impairment-Only"], erklaerung: "HGB = planmäßige AfA. IFRS = Impairment Only." },
    { text: "Stille ___ liegen vor wenn der Zeitwert über dem Buchwert liegt und erhöhen das neubewertete EK.", luecken: ["Reserven"], erklaerung: "Stille Reserven: Zeitwert > Buchwert → erhöhen neubewertetes EK." },
    { text: "Die Schuldenkonsolidierung eliminiert ___ Forderungen und Verbindlichkeiten zwischen Konzernunternehmen.", luecken: ["konzerninterne (innerbetriebliche)"], erklaerung: "§ 303 HGB: Konzerninterne Schuldbeziehungen werden eliminiert." },
    { text: "Bei ___ Schuldverhältnissen (Konzern ↔ konzernfremdes UN) besteht keine Konsolidierungspflicht.", luecken: ["Dritt-"], erklaerung: "Drittschuldverhältnisse müssen nicht konsolidiert werden." },
    { text: "At-Equity-Konsolidierung gilt bei ___ UN mit ___ Einfluss (zwischen ___ % und ___ %).", luecken: ["assoziierten", "maßgeblichem", "20", "50"], erklaerung: "At-Equity: 20–50%, maßgeblicher (aber nicht beherrschender) Einfluss." },
    { text: "Bei At-Equity wird der ___ um anteilige EK-Veränderungen des assoz. UN ___ (Buchwertmethode).", luecken: ["Beteiligungsbuchwert", "fortgeschrieben"], erklaerung: "Buchwertmethode: Beteiligungswert wird laufend fortgeschrieben, nicht alle Bilanzpositionen einbezogen." },
    { text: "Eine erhaltene ___ vom assoz. UN ___ den Beteiligungsbuchwert bei At-Equity.", luecken: ["Dividende", "verringert"], erklaerung: "Dividende war schon im EK des assoz. UN → Ausschüttung verringert den Beteiligungsbuchwert." },
    { text: "Die ___ eliminiert konzerninterne Umsätze und Leistungen nach § ___ HGB.", luecken: ["Aufwands- und Ertragskonsolidierung", "305"], erklaerung: "§ 305 HGB: Konzerninterne Umsätze werden eliminiert." }
  ],
  zuordnung: [
    { titel: "Konsolidierungsart → Rechtsgrundlage", paare: [
      { links: "Kapitalkonsolidierung", rechts: "§ 301 HGB" },
      { links: "Schuldenkonsolidierung", rechts: "§ 303 HGB" },
      { links: "At-Equity-Konsolidierung", rechts: "§§ 311–312 HGB" },
      { links: "Quotenkonsolidierung", rechts: "§ 310 HGB" }
    ]},
    { titel: "Konsolidierungsart → Anwendungsfall", paare: [
      { links: "Beteiligungsbuchwert vs. EK eliminieren", rechts: "Kapitalkonsolidierung" },
      { links: "Interne Forderungen/Verbindlichkeiten eliminieren", rechts: "Schuldenkonsolidierung" },
      { links: "20–50% Beteiligung, maßgeblicher Einfluss", rechts: "At-Equity" },
      { links: "Interne Umsätze eliminieren", rechts: "Aufwands-/Ertragskonsolidierung" }
    ]},
    { titel: "Goodwill-Behandlung", paare: [
      { links: "Planmäßige Abschreibung über Nutzungsdauer", rechts: "HGB" },
      { links: "Impairment Only – jährlicher Werthaltigkeitstest", rechts: "IFRS" },
      { links: "Kaufpreis > neubewertetes EK", rechts: "Aktiver Goodwill (Geschäfts-/Firmenwert)" },
      { links: "Kaufpreis < neubewertetes EK", rechts: "Passiver Unterschiedsbetrag" }
    ]}
  ]
};

// ============================================================
// WINF-SEIDLMEIER – Kapitel 4: Datenbanksysteme
// ============================================================
FAECHER["winf-seidlmeier"].themen["datenbanksysteme"] = {
  name: "4. Datenbanksysteme",
  zusammenfassung: `<h4>4. Datenbanksysteme – Vollständige Zusammenfassung</h4>

<h5>📌 4.1 Grundstrukturen von Datenbanksystemen</h5>
<div class="def-box"><div class="def-label">Datenbanksystem (DBS)</div>
Ein DBS besteht aus einer <strong>Datenbank</strong> (strukturiert gespeicherte Daten) und einem <strong>Datenbank-Management-System (DBMS)</strong>. Das DBMS verwaltet den Zugriff, die Konsistenz und die Sicherheit der Daten.
</div>
<p><strong>Vorteile einer zentralen Datenbank</strong> gegenüber Insellösungen: Keine Redundanz · Konsistenz · gleichzeitiger Mehrbenutzerzugriff · zentrale Sicherung</p>
<p><strong>ANSI-SPARC-Dreischichtenmodell:</strong></p>
<table class="erk-table">
  <tr><th>Ebene</th><th>Bezeichnung</th><th>Inhalt</th></tr>
  <tr><td>Extern</td><td>Benutzersicht / View</td><td>Spezifische Sicht einzelner Nutzer/Anwendungen auf die Daten</td></tr>
  <tr><td>Konzeptuell</td><td>Logische Gesamtsicht</td><td>Gesamte Datenstruktur, unabhängig von Speicherung (z.B. ERM)</td></tr>
  <tr><td>Intern</td><td>Physische Speicherung</td><td>Wie Daten tatsächlich auf dem Speichermedium abgelegt sind</td></tr>
</table>

<h5>📌 4.2 Entity-Relationship-Modell (ERM)</h5>
<p>Das ERM ist ein <strong>konzeptuelles Datenmodell</strong> – es beschreibt, welche Dinge (Entitäten) existieren und wie sie miteinander in Beziehung stehen.</p>
<table class="erk-table">
  <tr><th>Element</th><th>Darstellung</th><th>Bedeutung</th></tr>
  <tr><td><strong>Entitätstyp</strong></td><td>Rechteck</td><td>Objektklasse (z.B. Mitarbeiter, Abteilung)</td></tr>
  <tr><td><strong>Attribut</strong></td><td>Ellipse</td><td>Eigenschaft eines Entitätstyps (z.B. Name, PLZ)</td></tr>
  <tr><td><strong>Schlüsselattribut</strong></td><td>Unterstrichene Ellipse</td><td>Eindeutige Identifikation (z.B. Personalnummer)</td></tr>
  <tr><td><strong>Beziehungstyp</strong></td><td>Raute</td><td>Verbindung zwischen Entitätstypen (z.B. „arbeitet in")</td></tr>
  <tr><td><strong>Kardinalität</strong></td><td>1:1, 1:n, m:n</td><td>Wie viele Instanzen beziehen sich aufeinander?</td></tr>
</table>
<p><strong>Vollständige Partizipation</strong> (Doppelstrich): Alle Instanzen eines Entitätstyps müssen an der Beziehung teilnehmen (z.B. jeder Mitarbeiter gehört zu einer Abteilung).</p>

<h5>📌 4.3 Relationales Datenbankmodell</h5>
<p>Das ERM wird in <strong>Tabellen (Relationen)</strong> überführt. Jede Entität wird zu einer Tabelle, jede Zeile ist eine Instanz (Tupel), jede Spalte ein Attribut.</p>
<div class="def-box"><div class="def-label">Primärschlüssel (Primary Key)</div>
Attribut oder Attributkombination, das/die eine Zeile in einer Tabelle <strong>eindeutig identifiziert</strong>.
</div>
<div class="def-box"><div class="def-label">Fremdschlüssel (Foreign Key)</div>
Attribut in einer Tabelle, das auf den <strong>Primärschlüssel einer anderen Tabelle</strong> verweist und so die Beziehung zwischen den Tabellen herstellt.
</div>
<p><strong>m:n-Beziehungen</strong> werden durch eine <strong>Zwischentabelle</strong> (Verbindungstabelle) aufgelöst, die die Primärschlüssel beider beteiligten Tabellen enthält.</p>

<h5>📌 4.4 Beispiel: Buchentleihprozess (TH Rosenheim)</h5>
<p>Neue datenbankgestützte Bibliothekssoftware: Entitätstypen → Student (Matrikelnummer, Name, Vorname), Buch (Buchnummer, Autor, Titel), Ausleihung (Rückgabedatum), Fakultät (Name, Standort). Die Ausleihung ist eine m:n-Beziehung zwischen Student und Buch.</p>`,

  erklaerungen: [
    {
      titel: "🗄️ Grundstrukturen & ANSI-SPARC-Dreischichtenmodell",
      inhalt: `<div class="def-box"><div class="def-label">Datenbanksystem (DBS)</div>
<strong>DBS</strong> = Datenbank (DB) + Datenbank-Management-System (DBMS)<br>
<strong>DB:</strong> Persistente, strukturierte Sammlung zusammengehöriger Daten<br>
<strong>DBMS:</strong> Software zur Verwaltung, Abfrage, Sicherung und Zugriffssteuerung (z.B. Oracle, MySQL, PostgreSQL)
</div>
<p><strong>Probleme ohne zentrale DB (Insellösungen):</strong></p>
<p>• <strong>Redundanz:</strong> Gleiche Daten mehrfach gespeichert (z.B. Kundendaten in Vertrieb UND Buchhaltung)<br>
• <strong>Inkonsistenz:</strong> Verschiedene Versionen der gleichen Daten<br>
• <strong>Kein Mehrbenutzerzugriff:</strong> Gleichzeitiger Zugriff führt zu Konflikten</p>
<table class="erk-table">
  <tr><th>Schicht</th><th>Name</th><th>Inhalt</th><th>Beispiel</th></tr>
  <tr><td>Extern</td><td>Benutzersicht</td><td>Individuelle Sicht je Nutzer/Anwendung</td><td>Verkäufer sieht nur Preis + Bestand</td></tr>
  <tr><td>Konzeptuell</td><td>Logische Gesamtsicht</td><td>Gesamte Datenstruktur (ERM)</td><td>Alle Tabellen und Beziehungen</td></tr>
  <tr><td>Intern</td><td>Physische Ebene</td><td>Tatsächliche Speicherung auf Festplatte</td><td>B-Bäume, Indizes, Speicherblöcke</td></tr>
</table>
<p><strong>Vorteil der Dreischichtigkeit:</strong> <strong>Datenunabhängigkeit</strong> – Änderungen auf einer Schicht beeinflussen andere Schichten nicht (z.B. physische Speicheränderung ohne Auswirkung auf Anwendungen).</p>`,
      merke: "DBS = DB + DBMS. ANSI-SPARC: extern (Benutzer) · konzeptuell (ERM/Logik) · intern (physisch). Dreischichtigkeit → Datenunabhängigkeit.",
      flipcards: [
        { vorne: "Was ist ein DBMS?", hinten: "Datenbank-<strong>Management</strong>-System: Software zur Verwaltung, Abfrage, Sicherung und Zugriffssteuerung der DB (z.B. MySQL, Oracle, MS SQL Server)" },
        { vorne: "Externe Schicht (ANSI-SPARC)", hinten: "<strong>Benutzersicht / View:</strong> Spezifische Sicht einzelner Nutzer oder Anwendungen – nur ein Ausschnitt der Gesamtdaten" },
        { vorne: "Konzeptuelle Schicht (ANSI-SPARC)", hinten: "<strong>Logische Gesamtsicht:</strong> Vollständige Datenstruktur unabhängig von Speicherung (z.B. ERM, alle Tabellen und Beziehungen)" },
        { vorne: "Interne Schicht (ANSI-SPARC)", hinten: "<strong>Physische Speicherung:</strong> Wie Daten tatsächlich auf dem Speichermedium liegen (Indizes, Speicherblöcke, Dateiformate)" },
        { vorne: "Was bedeutet Datenunabhängigkeit?", hinten: "Änderungen in einer Schicht wirken sich nicht auf andere Schichten aus. Anwendungen bleiben unberührt, wenn die physische Speicherung geändert wird." }
      ],
      interaktion: [
        { frage: "Woraus besteht ein Datenbanksystem (DBS)?", optionen: ["Nur aus Tabellen", "Datenbank + DBMS", "Anwendungsprogramm + Betriebssystem", "Hardware + Netzwerk"], richtig: 1, erklaerung: "DBS = Datenbank (strukturierte Datenmenge) + DBMS (Software zur Verwaltung und Abfrage)." },
        { frage: "Welche Schicht im ANSI-SPARC-Modell beschreibt die logische Gesamtsicht?", optionen: ["Externe Schicht", "Konzeptuelle Schicht", "Interne Schicht", "Physische Schicht"], richtig: 1, erklaerung: "Die konzeptuelle Schicht beschreibt die vollständige logische Datenstruktur (z.B. ERM), unabhängig von der physischen Speicherung." },
        { frage: "Was ist der Vorteil der Dreischichtigkeit im ANSI-SPARC-Modell?", optionen: ["Mehr Speicherplatz", "Schnellere Abfragen", "Datenunabhängigkeit: Schichten können unabhängig voneinander geändert werden", "Automatische Datensicherung"], richtig: 2, erklaerung: "Datenunabhängigkeit: Änderungen auf einer Schicht (z.B. physisch) beeinflussen andere Schichten (z.B. Anwendungen) nicht." }
      ]
    },
    {
      titel: "🔗 Entity-Relationship-Modell (ERM)",
      inhalt: `<p>Das ERM dient als <strong>Entwurfswerkzeug</strong> für die konzeptuelle Datenbankebene. Es zeigt, welche Dinge (Entitäten) existieren und wie sie miteinander zusammenhängen.</p>
<table class="erk-table">
  <tr><th>Element</th><th>Bedeutung</th><th>Darstellung</th></tr>
  <tr><td><strong>Entitätstyp</strong></td><td>Klasse gleichartiger Dinge (z.B. alle Mitarbeiter)</td><td>Rechteck</td></tr>
  <tr><td><strong>Entität</strong></td><td>Konkrete Ausprägung (z.B. Mitarbeiter Max Müller)</td><td>Instanz</td></tr>
  <tr><td><strong>Attribut</strong></td><td>Eigenschaft (z.B. Vorname, Geburtsdatum)</td><td>Ellipse</td></tr>
  <tr><td><strong>Schlüsselattribut</strong></td><td>Eindeutige Identifikation (Primärschlüssel)</td><td>Unterstrichene Ellipse</td></tr>
  <tr><td><strong>Beziehungstyp</strong></td><td>Verbindung zwischen Entitätstypen (z.B. „arbeitet in")</td><td>Raute</td></tr>
</table>
<p><strong>Kardinalitäten:</strong></p>
<table class="erk-table">
  <tr><th>Typ</th><th>Bedeutung</th><th>Beispiel</th></tr>
  <tr><td><strong>1:1</strong></td><td>Eine Entität ist mit genau einer anderen verknüpft</td><td>Person ↔ Personalausweis</td></tr>
  <tr><td><strong>1:n</strong></td><td>Eine Entität ist mit mehreren verknüpft</td><td>Abteilung ↔ Mitarbeiter (eine Abt., viele MA)</td></tr>
  <tr><td><strong>m:n</strong></td><td>Viele Entitäten sind mit vielen verknüpft</td><td>Student ↔ Buch (viele Stud., viele Bücher)</td></tr>
</table>
<div class="def-box"><div class="def-label">Vollständige Partizipation (Doppelstrich)</div>
Alle Instanzen eines Entitätstyps müssen an der Beziehung teilnehmen.<br>
Beispiel: Jeder <strong>Mitarbeiter</strong> muss einer Abteilung zugeordnet sein (Doppelstrich bei Mitarbeiter).
</div>`,
      merke: "ERM: Entitätstyp (Rechteck) · Attribut (Ellipse) · Schlüssel (unterstrichen) · Beziehung (Raute). Kardinalitäten: 1:1, 1:n, m:n. Doppelstrich = vollständige Partizipation.",
      flipcards: [
        { vorne: "Entitätstyp vs. Entität", hinten: "<strong>Entitätstyp:</strong> Klasse (z.B. Mitarbeiter) → Rechteck im ERM<br><strong>Entität:</strong> Konkrete Ausprägung (z.B. Max Müller, Pers.-Nr. 1234)" },
        { vorne: "Schlüsselattribut", hinten: "Attribut, das eine Entität <strong>eindeutig identifiziert</strong>. Darstellung: <u>unterstrichen</u>. Entspricht dem Primärschlüssel in der relationalen DB." },
        { vorne: "1:n-Beziehung – Beispiel", hinten: "Eine <strong>Abteilung</strong> hat viele <strong>Mitarbeiter</strong>. Umgekehrt gehört ein Mitarbeiter zu genau einer Abteilung. → 1:n" },
        { vorne: "m:n-Beziehung – Problem", hinten: "m:n-Beziehungen können nicht direkt in relationale Tabellen überführt werden → Auflösung durch <strong>Zwischentabelle</strong> mit den Primärschlüsseln beider Seiten" },
        { vorne: "Was bedeutet Doppelstrich im ERM?", hinten: "<strong>Vollständige Partizipation:</strong> Alle Instanzen des betreffenden Entitätstyps müssen an der Beziehung teilnehmen (z.B. jeder MA muss einer Abteilung angehören)" }
      ],
      interaktion: [
        { frage: "Womit wird ein Entitätstyp im ERM dargestellt?", optionen: ["Ellipse", "Raute", "Rechteck", "Pfeil"], richtig: 2, erklaerung: "Entitätstypen werden als Rechtecke dargestellt. Attribute = Ellipsen, Beziehungen = Rauten." },
        { frage: "Was bedeutet eine 1:n-Beziehung?", optionen: ["Beide Seiten haben genau eine Entität", "Eine Entität der einen Seite ist mit mehreren der anderen verknüpft", "Alle Entitäten haben keine Verbindung", "Nur m:n ist möglich"], richtig: 1, erklaerung: "1:n: Eine Entität (z.B. Abteilung) ist mit mehreren Entitäten der anderen Seite (z.B. Mitarbeitern) verknüpft." },
        { frage: "Wie wird eine m:n-Beziehung im relationalen Modell umgesetzt?", optionen: ["Durch eine Ellipse", "Durch eine Zwischentabelle", "Durch doppelte Primärschlüssel", "Gar nicht – m:n ist verboten"], richtig: 1, erklaerung: "m:n-Beziehungen werden durch eine Zwischentabelle (Verbindungstabelle) mit den Primärschlüsseln beider Entitätstypen aufgelöst." },
        { frage: "Was bedeutet der Doppelstrich im ERM?", optionen: ["Zwei Beziehungen", "Vollständige Partizipation: alle Instanzen müssen teilnehmen", "Optionale Teilnahme", "Fremdschlüssel"], richtig: 1, erklaerung: "Doppelstrich = vollständige Partizipation: Jede Instanz des Entitätstyps muss an der Beziehung teilnehmen." }
      ]
    },
    {
      titel: "📊 Relationales Datenbankmodell",
      inhalt: `<p>Das relationale Datenbankmodell überführt das ERM in <strong>Tabellen (Relationen)</strong>. Es ist das heute am weitesten verbreitete Modell (relationale DBMS wie MySQL, Oracle, MS SQL Server).</p>
<div class="def-box"><div class="def-label">Relation (Tabelle)</div>
Eine Relation ist eine <strong>zweidimensionale Tabelle</strong>:<br>
• <strong>Zeile (Tupel):</strong> Eine konkrete Instanz (z.B. ein Mitarbeiter)<br>
• <strong>Spalte (Attribut):</strong> Eine Eigenschaft (z.B. Name, PLZ)<br>
• <strong>Primärschlüssel:</strong> Attribut oder Kombination zur eindeutigen Identifikation einer Zeile
</div>
<div class="def-box"><div class="def-label">Beispiel: Relation PERSON</div>
PERSON (<u>Personennummer</u>, Name, PLZ, Ort, Land)<br>
→ Personennummer = Primärschlüssel (unterstrichen)
</div>
<p><strong>Fremdschlüssel (Foreign Key):</strong> Ein Attribut einer Tabelle, das auf den Primärschlüssel einer <em>anderen</em> Tabelle verweist → stellt die Verbindung zwischen Tabellen her (referentielle Integrität).</p>
<p><strong>Normalisierung:</strong> Überführung in eine redundanzarme Form durch Normalformen (1NF, 2NF, 3NF) → Datenanomalien vermeiden.</p>
<p><strong>SQL (Structured Query Language):</strong> Standardsprache zur Abfrage und Manipulation relationaler DBs.<br>
Wichtige Befehle: <code>SELECT ... FROM ... WHERE</code> · <code>JOIN</code> (Verknüpfung von Tabellen) · <code>INSERT / UPDATE / DELETE</code></p>`,
      merke: "Relation = Tabelle. Tupel = Zeile. Attribut = Spalte. Primärschlüssel = eindeutige ID. Fremdschlüssel = Verweis auf anderen PK. SQL = Abfragesprache.",
      flipcards: [
        { vorne: "Primärschlüssel (Primary Key)", hinten: "Attribut (oder Kombination), das eine Zeile in einer Tabelle <strong>eindeutig identifiziert</strong>. Darf nicht NULL sein und muss einzigartig sein." },
        { vorne: "Fremdschlüssel (Foreign Key)", hinten: "Attribut in Tabelle A, das auf den <strong>Primärschlüssel von Tabelle B</strong> verweist → stellt Beziehung zwischen Tabellen her." },
        { vorne: "Was ist referentielle Integrität?", hinten: "Ein Fremdschlüsselwert muss immer als Primärschlüssel in der referenzierten Tabelle <strong>existieren</strong> (oder NULL sein). Verhindert verwaiste Datensätze." },
        { vorne: "Wie wird m:n im relationalen Modell aufgelöst?", hinten: "Durch eine <strong>Zwischentabelle</strong> (Verbindungstabelle), die die Primärschlüssel beider beteiligten Tabellen als Fremdschlüssel enthält." },
        { vorne: "Normalisierung", hinten: "Überführung in Normalformen (1NF, 2NF, 3NF) zur <strong>Vermeidung von Redundanzen und Anomalien</strong> bei Einfügen, Ändern, Löschen." }
      ],
      interaktion: [
        { frage: "Was ist eine Relation im relationalen Datenbankmodell?", optionen: ["Eine Beziehung im ERM", "Eine zweidimensionale Tabelle", "Ein Programmcode", "Ein Schlüsselattribut"], richtig: 1, erklaerung: "Im relationalen Modell = Relation = Tabelle mit Zeilen (Tupeln/Instanzen) und Spalten (Attributen)." },
        { frage: "Was ist ein Primärschlüssel?", optionen: ["Der erste Eintrag einer Tabelle", "Ein Attribut zur eindeutigen Identifikation einer Zeile", "Der Name der Tabelle", "Ein Fremdschlüssel"], richtig: 1, erklaerung: "Primärschlüssel: Attribut oder Kombination, das jede Zeile eindeutig identifiziert – darf nicht NULL sein und muss einzigartig sein." },
        { frage: "Wozu dient ein Fremdschlüssel?", optionen: ["Zur Verschlüsselung der Daten", "Zum Verknüpfen von Tabellen durch Verweis auf anderen Primärschlüssel", "Zur Nummerierung der Zeilen", "Zur Sortierung"], richtig: 1, erklaerung: "Fremdschlüssel verweist auf den Primärschlüssel einer anderen Tabelle und stellt so die Beziehung zwischen den Tabellen her." },
        { frage: "Wofür steht SQL?", optionen: ["System Query Language", "Structured Query Language", "Simple Query Layer", "Server Query Logic"], richtig: 1, erklaerung: "SQL = Structured Query Language: Standardsprache für relationale Datenbanken (Abfragen, Einfügen, Ändern, Löschen)." }
      ]
    }
  ],
  quiz: [
    { frage: "Woraus besteht ein Datenbanksystem (DBS)?", optionen: ["Nur Tabellen", "Datenbank + DBMS", "Anwendungsprogramm + Betriebssystem", "Hardware + Netzwerk"], richtig: 1, erklaerung: "DBS = Datenbank (strukturierte Datenmenge) + DBMS (Software zur Verwaltung und Abfrage)." },
    { frage: "Was ist ein DBMS?", optionen: ["Datenbankstruktur", "Software zur Verwaltung, Abfrage und Zugriffssteuerung der DB", "Eine Tabelle", "Eine SQL-Abfrage"], richtig: 1, erklaerung: "DBMS = Datenbank-Management-System: Software (z.B. MySQL, Oracle, PostgreSQL) zur Verwaltung der DB." },
    { frage: "Welche Schicht im ANSI-SPARC-Modell beschreibt die logische Gesamtsicht?", optionen: ["Externe Schicht", "Konzeptuelle Schicht", "Interne Schicht", "Physische Schicht"], richtig: 1, erklaerung: "Konzeptuelle Schicht: vollständige logische Datenstruktur (z.B. ERM), unabhängig von physischer Speicherung." },
    { frage: "Was beschreibt die externe Schicht im ANSI-SPARC-Modell?", optionen: ["Physische Speicherung", "Gesamte logische Datenstruktur", "Individuelle Benutzersicht / View", "SQL-Abfragen"], richtig: 2, erklaerung: "Externe Schicht = Benutzersicht: spezifische Sicht einzelner Nutzer oder Anwendungen – nur ein Ausschnitt der Gesamtdaten." },
    { frage: "Was bedeutet Datenunabhängigkeit?", optionen: ["Daten sind unabhängig vom Nutzer", "Änderungen in einer Schicht beeinflussen andere Schichten nicht", "Daten werden nie gelöscht", "Jeder Nutzer hat eigene Daten"], richtig: 1, erklaerung: "Datenunabhängigkeit: Vorteil der Dreischichtigkeit – z.B. physische Speicheränderung ohne Auswirkung auf Anwendungen." },
    { frage: "Wie wird ein Entitätstyp im ERM dargestellt?", optionen: ["Ellipse", "Raute", "Rechteck", "Pfeil"], richtig: 2, erklaerung: "Entitätstypen werden als Rechtecke dargestellt. Attribute = Ellipsen, Beziehungen = Rauten." },
    { frage: "Wie werden Attribute im ERM dargestellt?", optionen: ["Rechteck", "Raute", "Ellipse", "Linie"], richtig: 2, erklaerung: "Attribute = Ellipsen im ERM." },
    { frage: "Wie werden Beziehungstypen im ERM dargestellt?", optionen: ["Rechteck", "Ellipse", "Dreieck", "Raute"], richtig: 3, erklaerung: "Beziehungstypen = Rauten im ERM." },
    { frage: "Was bedeutet eine 1:n-Beziehung?", optionen: ["Beide Seiten genau eine Entität", "Eine Entität ist mit mehreren der anderen Seite verknüpft", "Alle Entitäten ohne Verbindung", "n wird nicht definiert"], richtig: 1, erklaerung: "1:n: Eine Entität (z.B. Abteilung) ist mit mehreren Entitäten der anderen Seite (z.B. Mitarbeitern) verknüpft." },
    { frage: "Was bedeutet der Doppelstrich im ERM?", optionen: ["Zwei Beziehungen", "Optionale Teilnahme", "Vollständige Partizipation: alle Instanzen müssen teilnehmen", "Fremdschlüssel"], richtig: 2, erklaerung: "Doppelstrich = vollständige Partizipation: jede Instanz des Entitätstyps muss an der Beziehung teilnehmen." },
    { frage: "Was ist ein Schlüsselattribut?", optionen: ["Jedes Attribut eines Entitätstyps", "Ein Attribut zur eindeutigen Identifikation (unterstrichen dargestellt)", "Ein Fremdschlüssel", "Eine Beziehung"], richtig: 1, erklaerung: "Schlüsselattribut: identifiziert eine Entität eindeutig → im ERM unterstrichen dargestellt." },
    { frage: "Wie wird eine m:n-Beziehung im relationalen Modell umgesetzt?", optionen: ["Durch eine Ellipse", "Durch eine Zwischentabelle", "Durch doppelte Primärschlüssel", "Ist nicht möglich"], richtig: 1, erklaerung: "m:n-Beziehungen werden durch eine Zwischentabelle mit den Primärschlüsseln beider beteiligten Tabellen aufgelöst." },
    { frage: "Was ist ein Primärschlüssel?", optionen: ["Der erste Eintrag einer Tabelle", "Attribut zur eindeutigen Identifikation einer Zeile", "Name der Tabelle", "Fremdschlüssel"], richtig: 1, erklaerung: "Primärschlüssel: Attribut (oder Kombination), das jede Zeile eindeutig identifiziert – darf nicht NULL sein." },
    { frage: "Was ist ein Fremdschlüssel?", optionen: ["Verschlüsselung der Daten", "Attribut das auf Primärschlüssel einer anderen Tabelle verweist", "Zweiter Primärschlüssel", "Erste Spalte der Tabelle"], richtig: 1, erklaerung: "Fremdschlüssel verweist auf den Primärschlüssel einer anderen Tabelle → stellt Beziehung zwischen Tabellen her." },
    { frage: "Was ist referentielle Integrität?", optionen: ["Alle Daten sind korrekt", "Fremdschlüsselwert muss als PK in referenzierter Tabelle existieren", "Tabellen dürfen nicht gelöscht werden", "Primärschlüssel nie ändern"], richtig: 1, erklaerung: "Referentielle Integrität: Ein FK-Wert muss immer als PK in der referenzierten Tabelle existieren – verhindert verwaiste Datensätze." },
    { frage: "Was ist das Ziel der Normalisierung?", optionen: ["Tabellen vergrößern", "Redundanzen und Anomalien vermeiden", "Daten verschlüsseln", "Abfragen beschleunigen"], richtig: 1, erklaerung: "Normalisierung: Überführung in Normalformen (1NF, 2NF, 3NF) zur Vermeidung von Redundanzen und Anomalien." },
    { frage: "Was ist eine Relation im relationalen Datenbankmodell?", optionen: ["Beziehung im ERM", "Zweidimensionale Tabelle", "Programmcode", "Schlüsselattribut"], richtig: 1, erklaerung: "Relation = Tabelle mit Zeilen (Tupeln/Instanzen) und Spalten (Attributen)." },
    { frage: "Was sind typische Probleme ohne zentrale Datenbank?", optionen: ["Zu schnelle Abfragen", "Redundanz, Inkonsistenz, kein Mehrbenutzerzugriff", "Zu viele Tabellen", "Keine Normalisierung"], richtig: 1, erklaerung: "Insellösungen: Redundanz (mehrfache Datenspeicherung), Inkonsistenz (verschiedene Versionen), kein gleichzeitiger Zugriff." },
    { frage: "Was ist eine Entität?", optionen: ["Klasse gleichartiger Objekte (Entitätstyp)", "Konkrete Ausprägung eines Entitätstyps", "Eine Tabelle im DB-Modell", "Ein Primärschlüssel"], richtig: 1, erklaerung: "Entität = konkrete Ausprägung (Instanz) eines Entitätstyps (z.B. Mitarbeiter Max Müller ist eine Entität des Typs Mitarbeiter)." },
    { frage: "Welcher SQL-Befehl dient zur Abfrage?", optionen: ["INSERT", "DELETE", "SELECT ... FROM ... WHERE", "UPDATE"], richtig: 2, erklaerung: "SELECT ... FROM ... WHERE: Standard-SQL-Abfragebefehl zum Abrufen von Daten aus Tabellen." }
  ],
  lueckentext: [
    { text: "Ein Datenbanksystem (DBS) besteht aus der ___ (Datenmenge) und dem ___ (Software zur Verwaltung).", luecken: ["Datenbank", "DBMS"], erklaerung: "DBS = Datenbank + DBMS." },
    { text: "Das ANSI-SPARC-Modell hat 3 Schichten: ___ (Benutzersicht), ___ (logische Gesamtsicht) und ___ (physische Speicherung).", luecken: ["extern", "konzeptuell", "intern"], erklaerung: "3 Schichten: extern, konzeptuell, intern." },
    { text: "Der Vorteil der Dreischichtigkeit ist die ___, d.h. Änderungen in einer Schicht beeinflussen andere ___ nicht.", luecken: ["Datenunabhängigkeit", "Schichten"], erklaerung: "Datenunabhängigkeit = Kernvorteil des ANSI-SPARC-Modells." },
    { text: "Im ERM werden Entitätstypen als ___, Attribute als ___ und Beziehungstypen als ___ dargestellt.", luecken: ["Rechtecke", "Ellipsen", "Rauten"], erklaerung: "ERM-Notation: Rechteck (Entität), Ellipse (Attribut), Raute (Beziehung)." },
    { text: "Ein ___ identifiziert eine Entität eindeutig und wird im ERM ___ dargestellt.", luecken: ["Schlüsselattribut", "unterstrichen"], erklaerung: "Schlüsselattribut = eindeutige Identifikation, im ERM unterstrichen dargestellt." },
    { text: "Eine ___ Beziehung kann nicht direkt in Tabellen übertragen werden und wird durch eine ___ aufgelöst.", luecken: ["m:n-", "Zwischentabelle"], erklaerung: "m:n wird durch Verbindungstabelle mit den PKs beider Seiten aufgelöst." },
    { text: "Ein ___ identifiziert eine Zeile eindeutig. Ein ___ verweist auf den PK einer anderen Tabelle.", luecken: ["Primärschlüssel", "Fremdschlüssel"], erklaerung: "PK = eindeutige ID einer Zeile. FK = Verweis auf anderen PK." },
    { text: "___ Partizipation (___) bedeutet, dass alle Instanzen eines Entitätstyps an der Beziehung teilnehmen müssen.", luecken: ["Vollständige", "Doppelstrich"], erklaerung: "Vollständige Partizipation = Doppelstrich im ERM." }
  ],
  zuordnung: [
    { titel: "ERM-Element → Darstellung", paare: [
      { links: "Entitätstyp", rechts: "Rechteck" },
      { links: "Attribut", rechts: "Ellipse" },
      { links: "Beziehungstyp", rechts: "Raute" },
      { links: "Schlüsselattribut", rechts: "Unterstrichene Ellipse" }
    ]},
    { titel: "ANSI-SPARC Schicht → Beschreibung", paare: [
      { links: "Externe Schicht", rechts: "Individuelle Benutzersicht / View" },
      { links: "Konzeptuelle Schicht", rechts: "Logische Gesamtsicht (ERM)" },
      { links: "Interne Schicht", rechts: "Physische Speicherung (Festplatte)" },
      { links: "Datenunabhängigkeit", rechts: "Schichten änderbar ohne gegenseitige Auswirkung" }
    ]},
    { titel: "Datenbankbegriff zuordnen", paare: [
      { links: "Tabelle im relat. Modell", rechts: "Relation" },
      { links: "Zeile einer Tabelle", rechts: "Tupel / Instanz" },
      { links: "Eindeutige Zeilen-ID", rechts: "Primärschlüssel" },
      { links: "Verweis auf anderen PK", rechts: "Fremdschlüssel" }
    ]}
  ]
};

// Neuigkeiten – hier neue Einträge oben hinzufügen
const NEUIGKEITEN = [
  {
    datum: "2026-03-26",
    typ: "inhalt",
    titel: "Rechnungslegung – Kap. 1 & 2 neu!",
    text: "Konzernrechnungslegung Grundlagen + alle Konsolidierungsarten (Kapital-, Schulden-, At-Equity) hinzugefügt."
  },
  {
    datum: "2026-03-26",
    typ: "inhalt",
    titel: "WInf Seidlmeier – Kap. 4 neu!",
    text: "Neues Thema: Datenbanksysteme (ERM, relationales Modell, ANSI-SPARC, Buchentleihprozess)."
  },
  {
    datum: "2026-03-26",
    typ: "inhalt",
    titel: "WInf Seidlmeier – Kap. 3 neu!",
    text: "Neues Thema: Modellierung von Organisationen und IS (Prozesstypen, EPK, ARIS, KDIS-Beispiel)."
  },
  {
    datum: "2026-03-26",
    typ: "inhalt",
    titel: "WInf Seidlmeier – Devisenkurs-Beispiel",
    text: "Das Devisenkurs-Beispiel aus Folie 2-7 wurde zur Wissenstreppe (Kap. 2) hinzugefügt."
  },
  {
    datum: "2026-03-26",
    typ: "feature",
    titel: "Problemzonen-Fix",
    text: "Richtig beantwortete Fragen verschwinden jetzt aus den Problemzonen."
  },
  {
    datum: "2026-03-27",
    typ: "inhalt",
    titel: "Großes Quiz-Update 🎯",
    text: "Alle Themen haben jetzt 15–20 Fragen im Pool. Je Quiz werden 10 zufällig gewählt – immer neue Runden!"
  }
];

// ============================================================
// QUIZ-FRAGEN-POOLS (je 15-20 Fragen pro Thema)
// ============================================================

// --- Kapitalkonsolidierung ---
FAECHER["rechnungslegung"].themen["kapitalkonsolidierung"].quiz = [
  { frage: "Was ist das Ziel der Kapitalkonsolidierung?", optionen: ["Eigenkapital erhöhen", "Verflechtungen zwischen Mutter- und Tochterunternehmen eliminieren", "Schulden tilgen", "Gewinne ausschütten"], richtig: 1, erklaerung: "Die Kapitalkonsolidierung eliminiert gegenseitige Verflechtungen durch Aufrechnung des Anteils gegen das Eigenkapital der Tochter." },
  { frage: "Wie entsteht ein Goodwill bei der Kapitalkonsolidierung?", optionen: ["Anteilswert < Eigenkapital zu Zeitwerten", "Anteilswert > Eigenkapital zu Zeitwerten", "Eigenkapital = 0", "Keine stillen Reserven vorhanden"], richtig: 1, erklaerung: "Goodwill = Kaufpreis (Anteilswert) minus Eigenkapital zu Zeitwerten. Er entsteht, wenn mehr gezahlt wird als der Zeitwert des Eigenkapitals." },
  { frage: "Was kennzeichnet die Neubewertungsmethode (Purchase Method)?", optionen: ["Buchwertfortführung, kein Goodwill", "Aktiva/Passiva zu Zeitwerten, Goodwill möglich", "Nur für Pooling geeignet", "Keine Aufdeckung stiller Reserven"], richtig: 1, erklaerung: "Bei der Neubewertungsmethode werden alle Aktiva und Passiva zum Zeitwert angesetzt, und ein verbleibender Überschuss wird als Goodwill bilanziert." },
  { frage: "Was kennzeichnet die Poolomethode (Pooling of Interests)?", optionen: ["Zeitwertansatz und Goodwill", "Buchwertfortführung, kein Goodwill", "Nur bei 100%-Beteiligung", "Verwendung stiller Reserven"], richtig: 1, erklaerung: "Die Poolomethode führt Buchwerte fort – es entsteht kein Goodwill. Sie gilt für Vereinigungen unter gemeinsamer Leitung." },
  { frage: "Was sind stille Reserven?", optionen: ["Offene Rücklagen im Jahresabschluss", "Differenz zwischen Zeitwert und Buchwert von Vermögenswerten", "Geheimkonten des Unternehmens", "Steuerlich nicht anerkannte Rücklagen"], richtig: 1, erklaerung: "Stille Reserven = Zeitwert minus Buchwert eines Vermögensgegenstands. Sie werden bei der Kapitalkonsolidierung aufgedeckt." },
  { frage: "Was passiert mit stillen Lasten bei der Kapitalkonsolidierung?", optionen: ["Sie erhöhen den Goodwill", "Sie verringern das angesetzte Eigenkapital", "Sie werden ignoriert", "Sie werden sofort aufgelöst"], richtig: 1, erklaerung: "Stille Lasten (z.B. Passiva zu Zeitwerten höher als Buchwert) reduzieren das anzurechnende Eigenkapital." },
  { frage: "Formel: M-AG zahlt 1.000 € für T-GmbH, EK = 300 €, stille Reserven = +60 € in Aktiva, -20 € in Passiva. Goodwill?", optionen: ["700 €", "640 €", "660 €", "720 €"], richtig: 2, erklaerung: "Goodwill = 1.000 - (300 + 60 - 20) = 1.000 - 340 = 660 €." },
  { frage: "Was ist bei einem negativen Goodwill (Lucky Buy) zu tun?", optionen: ["Sofort als Gewinn verbuchen", "Als passiver Unterschiedsbetrag bilanzieren", "Ignorieren", "Als Verlust abschreiben"], richtig: 1, erklaerung: "Ein negativer Goodwill (Badwill/Lucky Buy) entsteht, wenn weniger gezahlt wird als der Zeitwert. Er wird als passiver Unterschiedsbetrag erfasst." },
  { frage: "Wie wird der Goodwill nach HGB behandelt?", optionen: ["Sofort als Aufwand erfasst", "Über die Nutzungsdauer abgeschrieben (max. 10 Jahre)", "Dauerhaft bilanziert", "Gegen Eigenkapital verrechnet"], richtig: 1, erklaerung: "Nach HGB wird der Goodwill planmäßig über die Nutzungsdauer abgeschrieben, maximal 10 Jahre." },
  { frage: "Was passiert, wenn eine Mutter 60% an einer Tochter hält?", optionen: ["Vollkonsolidierung und keine Minderheiten", "Vollkonsolidierung mit Minderheitsanteil (40%) im Konzerneigenkapital", "Nur Quotenkonsolidierung", "Keine Konsolidierung nötig"], richtig: 1, erklaerung: "Bei Vollkonsolidierung werden 100% der Tochter einbezogen. Der nicht gehaltene Anteil (40%) erscheint als Minderheitsanteil im Eigenkapital." },
  { frage: "Was ist der Akquisitionszeitpunkt?", optionen: ["Datum der ersten Dividende", "Zeitpunkt, zu dem die Kapitalkonsolidierung durchgeführt wird (Erwerb der Anteile)", "Ende des Geschäftsjahres", "Datum der Gründung der Tochter"], richtig: 1, erklaerung: "Der Akquisitionszeitpunkt ist der Zeitpunkt des Anteilserwerbs. Das Eigenkapital wird zu diesem Zeitpunkt zu Zeitwerten ermittelt." },
  { frage: "Welche Methode wird typischerweise bei einem Unternehmenskauf angewendet?", optionen: ["Poolomethode", "Neubewertungsmethode (Purchase Method)", "Quotenkonsolidierung", "Equity-Methode"], richtig: 1, erklaerung: "Die Neubewertungsmethode (Purchase Method) ist die Standardmethode bei Unternehmenserwerben." },
  { frage: "Was ist ein Minderheitsanteil im Konzernabschluss?", optionen: ["Schulden gegenüber Tochterunternehmen", "Anteil des EK, der nicht dem Mutterunternehmen gehört", "Der kleinste Konzernbereich", "Nicht konsolidierte Tochterunternehmen"], richtig: 1, erklaerung: "Der Minderheitsanteil zeigt den Anteil am Eigenkapital der Tochter, der von anderen Gesellschaftern gehalten wird." },
  { frage: "Wozu dient die Konsolidierung im Konzernabschluss generell?", optionen: ["Steueroptimierung", "Konzern als wirtschaftliche Einheit darstellen", "Gewinnmaximierung", "Internationale Rechnungslegung vereinfachen"], richtig: 1, erklaerung: "Konsolidierung beseitigt Doppelzählungen und zeigt den Konzern als wirtschaftliche Einheit (Single Entity Concept)." },
  { frage: "Wie lautet die grundlegende Formel der Kapitalkonsolidierung?", optionen: ["Anteilswert + EK = Goodwill", "Anteilswert - EK zu Zeitwerten = Goodwill", "EK - Schulden = Goodwill", "Goodwill + stille Reserven = Anteilswert"], richtig: 1, erklaerung: "Goodwill = Anteilswert (Kaufpreis) minus Eigenkapital zu Zeitwerten (inkl. aufgedeckter stiller Reserven/Lasten)." }
];

// --- Informations- und Anwendungssysteme ---
FAECHER["winf-seidlmeier"].themen["applikationssysteme"].quiz = [
  { frage: "Was unterscheidet ein Informationssystem (IS) von einem Anwendungssystem (AS)?", optionen: ["IS ist älter", "IS umfasst Mensch + Technik, AS nur die Technik", "AS ist größer als IS", "Kein Unterschied"], richtig: 1, erklaerung: "IS = soziotechnisches System (Mensch + Hardware + Software). AS = nur die technische Komponente ohne Menschen." },
  { frage: "Welche Systeme zählen zu den operativen Informationssystemen?", optionen: ["MIS und DSS", "TPS (Transaktionsverarbeitungssysteme)", "EIS (Executive IS)", "KI-Systeme"], richtig: 1, erklaerung: "TPS (Transaction Processing Systems) unterstützen das operative Tagesgeschäft (Bestellungen, Buchungen)." },
  { frage: "Wofür steht ERP?", optionen: ["Enterprise Resource Planning", "Electronic Retail Processing", "Extended Report Program", "Enterprise Reporting Platform"], richtig: 0, erklaerung: "ERP = Enterprise Resource Planning – integrierte Systeme, die alle Geschäftsfunktionen in einer zentralen Datenbank bündeln." },
  { frage: "Was ist der Hauptvorteil eines ERP-Systems?", optionen: ["Niedrigere Serverkosten", "Integration aller Geschäftsfunktionen in einer Datenbasis", "Schnellere E-Mails", "Günstigere Hardware"], richtig: 1, erklaerung: "ERP integriert Finanzen, Produktion, Logistik und HR – alle Bereiche arbeiten mit denselben, aktuellen Daten." },
  { frage: "Für was wird ein CRM-System primär eingesetzt?", optionen: ["Verwaltung von Maschinen", "Verwaltung von Kundenbeziehungen", "Buchhaltung", "Lagerhaltung"], richtig: 1, erklaerung: "CRM (Customer Relationship Management) verwaltet Kundeninformationen, Kontakthistorien und Verkaufsprozesse." },
  { frage: "Was ist ein SCM-System?", optionen: ["Software für Buchhaltung", "System zur Verwaltung der Lieferkette", "Social Media Management", "Sicherheitssystem"], richtig: 1, erklaerung: "SCM (Supply Chain Management) optimiert die Lieferkette von Zulieferern bis zum Endkunden." },
  { frage: "Welches IS unterstützt das mittlere Management bei der Entscheidungsfindung?", optionen: ["TPS", "MIS (Management Information System)", "EIS", "DSS"], richtig: 1, erklaerung: "MIS liefert dem mittleren Management aggregierte Berichte und Kennzahlen für strukturierte Entscheidungen." },
  { frage: "Was macht ein Decision Support System (DSS)?", optionen: ["Entscheidungen autonom treffen", "Manager bei schlecht-strukturierten Entscheidungen unterstützen", "Nur Daten speichern", "Mitarbeiter verwalten"], richtig: 1, erklaerung: "DSS unterstützt Manager bei komplexen, schwach strukturierten Entscheidungen durch Analysen und Modelle." },
  { frage: "Was bedeutet Medienbruch in einem Informationssystem?", optionen: ["Technischer Defekt", "Wechsel des Datenträgers oder Formats zwischen Prozessschritten", "Systemabsturz", "Fehlerhafte Daten"], richtig: 1, erklaerung: "Medienbruch: Daten müssen von einem Medium auf ein anderes übertragen werden (z.B. Papier → Computer), was Fehlerquellen schafft." },
  { frage: "Welches System wird typischerweise für das Top-Management genutzt?", optionen: ["TPS", "MIS", "EIS (Executive Information System)", "DSS"], richtig: 2, erklaerung: "EIS liefert dem Top-Management hochaggregierte strategische Informationen und Kennzahlen." },
  { frage: "Was ist ein Vorteil von Cloud-Computing für Informationssysteme?", optionen: ["Immer günstiger als lokale Systeme", "Flexibilität und Skalierbarkeit", "Keine Sicherheitsbedenken", "100% Verfügbarkeitsgarantie"], richtig: 1, erklaerung: "Cloud bietet Flexibilität (Ressourcen nach Bedarf) und Skalierbarkeit (schnell wachsen oder schrumpfen)." },
  { frage: "Welche Aussage über ERP-Systeme ist FALSCH?", optionen: ["Sie integrieren mehrere Geschäftsfunktionen", "Sie nutzen eine zentrale Datenbasis", "Sie ersetzen alle anderen IT-Systeme vollständig", "Beispiele sind SAP und Oracle"], richtig: 2, erklaerung: "ERP-Systeme ersetzen nicht alle IT-Systeme – oft gibt es ergänzende Speziallösungen (Best-of-Breed-Ansatz)." },
  { frage: "Was ist das Ziel der Beseitigung von Medienbrüchen?", optionen: ["Papier komplett abschaffen", "Nahtlosen, fehlerfreien Datenfluss zwischen Systemen sicherstellen", "Mitarbeiter einsparen", "Hardware reduzieren"], richtig: 1, erklaerung: "Ohne Medienbrüche fließen Daten ohne manuelle Übertragung durch alle Prozessschritte – weniger Fehler, mehr Effizienz." },
  { frage: "Welche Module sind typisch in einem ERP-System?", optionen: ["Klimaanlage, Aufzug, Beleuchtung", "Finanzen, Produktion, Logistik, HR", "E-Mail, Browser, Virenschutz", "Datenbank, Server, Netzwerk"], richtig: 1, erklaerung: "ERP-Module umfassen Geschäftsfunktionen: Finanzwesen (FI), Controlling (CO), Produktion (PP), Logistik (MM/SD), HR." },
  { frage: "Was versteht man unter einem soziotechnischen System?", optionen: ["Ein System nur aus Hardware und Software", "Ein System, das menschliche und technische Komponenten kombiniert", "Ein System, das ausschließlich von KI gesteuert wird", "Ein soziales Netzwerk"], richtig: 1, erklaerung: "Soziotechnisch = Zusammenspiel von Menschen (sozial) und Technologie (technisch) in einem System." }
];

// --- Standardsoftware ---
FAECHER["winf-seidlmeier"].themen["standardsoftware"].quiz = [
  { frage: "Was ist Standardsoftware?", optionen: ["Speziell für ein Unternehmen entwickelte Software", "Vorgefertigte Software für allgemeine Aufgaben, die am Markt verfügbar ist", "Kostenlose Open-Source-Software", "Interne Software ohne Lizenz"], richtig: 1, erklaerung: "Standardsoftware ist vorgefertigt und für viele Unternehmen nutzbar – im Gegensatz zu maßgeschneiderter Individualsoftware." },
  { frage: "Was ist Individualsoftware?", optionen: ["Standard-Office-Paket", "Software, die speziell für die Anforderungen eines bestimmten Unternehmens entwickelt wird", "Open-Source-Software", "Freeware"], richtig: 1, erklaerung: "Individualsoftware ist maßgeschneidert und deckt spezifische Unternehmensanforderungen ab, die Standard-Lösungen nicht bieten." },
  { frage: "Welcher Hauptvorteil hat Standardsoftware?", optionen: ["Maximale Flexibilität", "Geringere Kosten durch Verteilung der Entwicklungskosten auf viele Nutzer", "Keine Abhängigkeit vom Hersteller", "Immer beste Performance"], richtig: 1, erklaerung: "Standardsoftware ist günstiger, weil sich die Entwicklungskosten auf viele Käufer verteilen." },
  { frage: "Welcher Hauptnachteil hat Standardsoftware?", optionen: ["Zu teuer", "Weniger flexibel – nicht alle spezifischen Anforderungen werden abgedeckt", "Kein Support verfügbar", "Immer veraltet"], richtig: 1, erklaerung: "Standardsoftware kann nicht alle individuellen Unternehmensprozesse optimal abbilden – Kompromisse sind nötig." },
  { frage: "Was versteht man unter Customizing?", optionen: ["Das Farbschema der Software ändern", "Anpassung von Standardsoftware an spezifische Unternehmensanforderungen", "Die Software neu programmieren", "Ein neues Software-Update installieren"], richtig: 1, erklaerung: "Customizing = Konfiguration und Anpassung von Standardsoftware (ohne Programmierung) an Unternehmensprozesse." },
  { frage: "Welche Beschaffungsvariante ist typisch für Cloud-Software?", optionen: ["Einmaliger Kauf mit ewigem Nutzungsrecht", "Miete (Subscription) mit monatlichen oder jährlichen Gebühren", "Tausch gegen andere Software", "Kostenloser Download"], richtig: 1, erklaerung: "Cloud-Software wird typischerweise als Subscription (SaaS) bezahlt – monatlich oder jährlich, kein Kauf." },
  { frage: "Was bedeutet SaaS?", optionen: ["Software as a Service", "System as a Standard", "Subscription and Software", "Secure Application System"], richtig: 0, erklaerung: "SaaS = Software as a Service – Software wird über das Internet als Dienst bereitgestellt und gemietet." },
  { frage: "Wann ist Individualsoftware sinnvoll?", optionen: ["Immer", "Wenn spezifische Prozesse nicht durch Standardsoftware abgebildet werden können", "Nur für Kleinunternehmen", "Wenn kein Budget vorhanden"], richtig: 1, erklaerung: "Individualsoftware lohnt sich, wenn Unternehmensprozesse einzigartig sind und Standardlösungen nicht passen." },
  { frage: "Was ist das Risiko der Herstellerabhängigkeit bei Standardsoftware?", optionen: ["Software wird zu langsam", "Preiserhöhungen, Support-Einstellung und erzwungene Updates", "Zu viele Funktionen", "Schlechtere Benutzeroberfläche"], richtig: 1, erklaerung: "Abhängigkeit vom Hersteller bedeutet: Preise, Updates und Support-Entscheidungen liegen beim Hersteller, nicht beim Nutzer." },
  { frage: "Welche ist ein Beispiel für Standardsoftware?", optionen: ["Ein intern entwickeltes HR-Tool einer Bank", "Microsoft Office, SAP, Salesforce", "Ein Einzelhandel-spezifisches Warenwirtschaftssystem", "Eigene Entwicklung auf Basis von Python"], richtig: 1, erklaerung: "Microsoft Office, SAP und Salesforce sind klassische Beispiele für Standardsoftware." },
  { frage: "Was passiert, wenn ein Unternehmen Prozesse an die Standardsoftware anpasst?", optionen: ["Das ist nicht möglich", "Das Unternehmen passt seine Abläufe an die Software-Logik an", "Software wird komplett neu entwickelt", "Der Hersteller übernimmt die Anpassung kostenlos"], richtig: 1, erklaerung: "Oft müssen Unternehmen ihre Prozesse an die Software-Logik angleichen – ein häufiger Effekt bei ERP-Einführungen." },
  { frage: "Was ist der Unterschied zwischen Kauf und Miete von Software?", optionen: ["Kein Unterschied", "Kauf = einmalige Zahlung, dauerhaftes Nutzungsrecht; Miete = laufende Gebühren", "Miete ist teurer als Kauf", "Kauf gilt nur für Privatpersonen"], richtig: 1, erklaerung: "Beim Kauf erwirbt man ein dauerhaftes Nutzungsrecht. Bei der Miete (Subscription) zahlt man laufende Gebühren für die Nutzung." },
  { frage: "Welches Kriterium spricht für die Wahl von Standardsoftware?", optionen: ["Unternehmen hat völlig einzigartige Prozesse", "Unternehmen hat begrenzte IT-Ressourcen und braucht schnelle Lösung", "Unternehmen möchte keinen Wartungsvertrag", "Unternehmen will vollständige Kontrolle über den Quellcode"], richtig: 1, erklaerung: "Begrenzte Ressourcen und Zeitdruck sprechen für Standardsoftware – schnelle Implementierung, kein Entwicklungsaufwand." },
  { frage: "Was ist der Unterschied zwischen Standard- und Individualsoftware in Bezug auf Kosten?", optionen: ["Individualsoftware ist immer günstiger", "Standardsoftware hat niedrigere Anschaffungskosten, Individualsoftware höhere Entwicklungskosten", "Beide kosten gleich viel", "Standardsoftware ist teurer wegen Lizenzgebühren"], richtig: 1, erklaerung: "Individualsoftware hat hohe Entwicklungskosten. Standardsoftware verteilt diese auf viele Nutzer, was sie günstiger macht." },
  { frage: "Was ist eine Lizenz bei Software?", optionen: ["Ein kostenloses Nutzungsrecht", "Eine rechtliche Genehmigung zur Nutzung der Software unter definierten Bedingungen", "Eine Zertifizierung des Herstellers", "Ein Sicherheits-Zertifikat"], richtig: 1, erklaerung: "Eine Softwarelizenz ist die vertragliche Vereinbarung, die Art und Umfang der Nutzung regelt (z.B. Anzahl Nutzer, Standorte)." }
];

// --- Prozessautomatisierung ---
FAECHER["winf-seidlmeier"].themen["prozessautomatisierung"].quiz = [
  { frage: "Was ist Prozessautomatisierung?", optionen: ["Manuelle Ausführung digitaler Prozesse", "Vollständige oder teilweise Übernahme von Prozessschritten durch Anwendungssysteme", "Digitalisierung von Papierdokumenten", "Einführung von ERP-Systemen"], richtig: 1, erklaerung: "Prozessautomatisierung = Maschinen/Systeme übernehmen Prozessschritte, die früher Menschen ausgeführt haben." },
  { frage: "Was ist ein Workflowsystem?", optionen: ["Ein E-Mail-Programm", "Ein System, das den Ablauf automatisierter Prozessschritte steuert und überwacht", "Ein Projektmanagement-Tool", "Ein Datenbanksystem"], richtig: 1, erklaerung: "Workflowsysteme steuern den Ablauf von Prozessen: welcher Schritt wann von wem oder welchem System ausgeführt wird." },
  { frage: "Was ist der Unterschied zwischen Digitalisierung und Automatisierung?", optionen: ["Sie sind identisch", "Digitalisierung = analog zu digital; Automatisierung = Maschinen übernehmen Schritte", "Automatisierung ist älter", "Digitalisierung betrifft nur Dokumente"], richtig: 1, erklaerung: "Digitalisierung wandelt analoge Inhalte in digitale um (Papier → PDF). Automatisierung lässt Systeme Schritte selbstständig ausführen." },
  { frage: "Welche Aufgabe hat ein Workflowsystem?", optionen: ["Nur Dokumente speichern", "Prozesse steuern, überwachen und koordinieren", "Hardware verwalten", "Passwörter verwalten"], richtig: 1, erklaerung: "Workflowsysteme koordinieren Aufgaben, überwachen Fristen und steuern, welche Schritte wann und von wem ausgeführt werden." },
  { frage: "Was ist RPA (Robotic Process Automation)?", optionen: ["Roboter in der Fabrik", "Software-Roboter, die repetitive digitale Aufgaben automatisch ausführen", "Automatische Datenbankabfragen", "Ein ERP-Modul"], richtig: 1, erklaerung: "RPA = Software-Bots, die wie ein Mensch mit digitalen Systemen interagieren und repetitive Aufgaben automatisieren." },
  { frage: "Welche Prozessschritte eignen sich besonders gut für Automatisierung?", optionen: ["Kreative Designaufgaben", "Strategische Entscheidungen", "Repetitive, regelbasierte und strukturierte Aufgaben", "Verhandlungen mit Kunden"], richtig: 2, erklaerung: "Automatisierung funktioniert am besten bei repetitiven, klar definierten, regelbasierten Aufgaben ohne Ausnahmefälle." },
  { frage: "Was ist ein Vorteil der Prozessautomatisierung?", optionen: ["Mehr Mitarbeiter benötigt", "Schnellere Ausführung und weniger Fehler als bei manueller Bearbeitung", "Höhere Kosten", "Mehr Papierkram"], richtig: 1, erklaerung: "Automatisierte Prozesse laufen schneller, konsistenter und mit weniger Fehlern als manuelle Abläufe." },
  { frage: "Was ist ein Ereignis in einem Prozessmodell (z.B. EPK)?", optionen: ["Eine Aktion, die ausgeführt wird", "Ein Zustand, der einen Prozess auslöst oder abschließt", "Ein Mitarbeiter", "Ein IT-System"], richtig: 1, erklaerung: "Ereignisse (z.B. 'Bestellung eingegangen') lösen Prozesse aus oder beenden sie – sie sind passive Zustände, keine Aktionen." },
  { frage: "Was ist eine Funktion in einer EPK?", optionen: ["Ein Ereignis", "Eine auszuführende Tätigkeit in einem Prozess", "Ein Datenbank-Aufruf", "Ein Workflowsystem"], richtig: 1, erklaerung: "Funktionen (z.B. 'Bestellung prüfen') sind aktive Tätigkeiten in einer EPK – sie werden von Rollen oder Systemen ausgeführt." },
  { frage: "Was bedeutet 'end-to-end Automatisierung'?", optionen: ["Nur den letzten Schritt automatisieren", "Den gesamten Prozess von Anfang bis Ende ohne manuelle Eingriffe automatisieren", "Zwei Systeme verbinden", "E-Mail-Automatisierung"], richtig: 1, erklaerung: "End-to-end Automatisierung = kein manueller Eingriff vom Start bis zum Abschluss eines Prozesses." },
  { frage: "Welches Risiko birgt zu hohe Prozessautomatisierung?", optionen: ["Prozesse werden zu schnell", "Verlust von Flexibilität und Schwierigkeiten bei Ausnahmefällen", "Mitarbeiter haben zu viel zu tun", "Kosten sinken zu stark"], richtig: 1, erklaerung: "Stark automatisierte Prozesse sind starr – unerwartete Situationen, die Urteilsvermögen erfordern, können Probleme verursachen." },
  { frage: "Was ist ein BPMN-Diagramm?", optionen: ["Eine Datenbankstruktur", "Eine standardisierte Notation zur grafischen Darstellung von Geschäftsprozessen", "Ein Netzwerkdiagramm", "Ein Finanzmodell"], richtig: 1, erklaerung: "BPMN (Business Process Model and Notation) ist ein Standard zur grafischen Darstellung von Prozessen, ähnlich wie EPK." },
  { frage: "Welcher Begriff beschreibt die Verbindung von Menschen und automatisierten Systemen in einem Prozess?", optionen: ["Vollautomatisierung", "Hybride Automatisierung / Mensch-Maschine-Kollaboration", "Digitalisierung", "ERP-Integration"], richtig: 1, erklaerung: "In hybriden Prozessen arbeiten Menschen und Systeme zusammen – automatische Schritte wechseln mit menschlichen Entscheidungen." },
  { frage: "Was ist ein Trigger in einem Workflowsystem?", optionen: ["Ein Benutzerpasswort", "Ein Ereignis, das einen automatischen Prozessschritt auslöst", "Eine Datenbanktabelle", "Ein Fehler im System"], richtig: 1, erklaerung: "Trigger sind Auslöser (z.B. Rechnungseingang, Zeitpunkt), die automatisch den nächsten Prozessschritt starten." },
  { frage: "Was ist das Ziel der Prozessoptimierung vor der Automatisierung?", optionen: ["Möglichst viele Schritte hinzufügen", "Ineffiziente Schritte eliminieren, bevor sie automatisiert werden", "Mitarbeiter schulen", "Hardware aufrüsten"], richtig: 1, erklaerung: "Schlechte Prozesse sollten nicht einfach automatisiert werden – zuerst optimieren, dann automatisieren ('don't automate waste')." }
];

// --- Digitalisierung in Unternehmen ---
FAECHER["winf-seidlmeier"].themen["digitalisierung-transformation"].quiz = [
  { frage: "Was ist der Unterschied zwischen Digitalisierung und digitaler Transformation?", optionen: ["Kein Unterschied", "Digitalisierung = analog zu digital; Transformation = Neugestaltung von Geschäftsmodellen", "Transformation ist älter", "Digitalisierung betrifft nur IT-Abteilungen"], richtig: 1, erklaerung: "Digitalisierung = technische Umwandlung (Papier → Digital). Digitale Transformation = umfassende Neugestaltung von Geschäftsmodellen, Prozessen und Kultur." },
  { frage: "Was ist ein Beispiel für reine Digitalisierung (ohne Transformation)?", optionen: ["Einführung eines neuen Geschäftsmodells durch KI", "Papierrechnung als PDF-Datei speichern", "Entwicklung einer komplett neuen App", "Schließung aller Filialen zugunsten von Online-Handel"], richtig: 1, erklaerung: "Papier → PDF ist reine Digitalisierung. Der Prozess bleibt gleich, nur das Medium wechselt." },
  { frage: "Was ist ein Beispiel für digitale Transformation?", optionen: ["E-Mails statt Briefen nutzen", "Netflix ersetzt das Videotheken-Geschäftsmodell durch Streaming", "Scanner statt Fotokopierer", "Digitale Signaturen nutzen"], richtig: 1, erklaerung: "Netflix transformierte die gesamte Branche – nicht nur das Medium, sondern das Geschäftsmodell (Subscription statt Einzelkauf)." },
  { frage: "Was sind Treiber der digitalen Transformation?", optionen: ["Höhere Steuern", "Neue Technologien (KI, Cloud, IoT), veränderte Kundenwünsche, Wettbewerbsdruck", "Mehr Mitarbeiter", "Weniger IT-Budgets"], richtig: 1, erklaerung: "Digitale Transformation wird getrieben durch Technologie (KI, Cloud, IoT), Kundenwandel und Wettbewerbsdruck." },
  { frage: "Was versteht man unter dem Internet of Things (IoT)?", optionen: ["Das reguläre Internet", "Vernetzung physischer Objekte (Maschinen, Geräte) mit dem Internet", "Social-Media-Plattformen", "Cloud-Speicher"], richtig: 1, erklaerung: "IoT = physische Objekte (Sensoren, Maschinen, Geräte) sind mit dem Internet verbunden und tauschen Daten aus." },
  { frage: "Was ist ein disruptives Geschäftsmodell?", optionen: ["Ein Modell mit vielen Fehlern", "Ein Modell, das etablierte Branchen durch neue Technologien grundlegend verändert", "Ein Modell, das nur digital funktioniert", "Ein Modell für Startups"], richtig: 1, erklaerung: "Disruption = neue Anbieter oder Technologien ersetzen etablierte Lösungen (z.B. Uber vs. Taxis, Airbnb vs. Hotels)." },
  { frage: "Welche Technologie ermöglicht das Analysieren großer Datenmengen?", optionen: ["Fax", "Big Data Analytics", "Textverarbeitung", "E-Mail-Server"], richtig: 1, erklaerung: "Big Data Analytics ermöglicht die Verarbeitung und Analyse sehr großer, schneller und vielfältiger Datenmengen." },
  { frage: "Was ist künstliche Intelligenz (KI) im Unternehmenskontext?", optionen: ["Nur Roboter in Fabriken", "Systeme, die menschenähnliche kognitive Fähigkeiten imitieren (Lernen, Entscheiden)", "Ein ERP-Modul", "Automatische E-Mail-Antworten"], richtig: 1, erklaerung: "KI = Systeme lernen aus Daten und treffen Entscheidungen, die früher menschliches Urteilsvermögen erforderten." },
  { frage: "Was ist ein typisches Hindernis bei der digitalen Transformation?", optionen: ["Zu viel IT-Know-how", "Kultureller Widerstand, mangelnde Fähigkeiten und Silodenken", "Zu niedrige Kosten", "Zu wenige Digitaldaten"], richtig: 1, erklaerung: "Kultureller Wandel ist das größte Hindernis: Mitarbeiter müssen neue Denkweisen akzeptieren und Silos überwunden werden." },
  { frage: "Was ist Plattform-Ökonomie?", optionen: ["Eine Buchhaltungssoftware", "Geschäftsmodelle, die als digitale Plattform Anbieter und Nachfrager verbinden", "Eine Art von ERP", "Öffentliche IT-Infrastruktur"], richtig: 1, erklaerung: "Plattform-Ökonomie: digitale Plattformen verbinden Angebot und Nachfrage (z.B. Amazon, Uber, Airbnb) ohne eigene Produkte." },
  { frage: "Was versteht man unter 'Agilität' im Kontext der Transformation?", optionen: ["Körperliche Fitness der Mitarbeiter", "Fähigkeit, schnell auf Veränderungen zu reagieren und sich anzupassen", "Schnellere Computer", "Mehr Mitarbeiter einstellen"], richtig: 1, erklaerung: "Agilität = Unternehmen können schnell auf Marktveränderungen reagieren, iterativ entwickeln und sich anpassen." },
  { frage: "Was ist ein Smart Factory / Industrie 4.0?", optionen: ["Eine besonders große Fabrik", "Vernetzte, automatisierte Produktion durch IoT, KI und Datenanalyse", "Ein Fabrikmanagement-Tool", "Digitalisierte Papierdokumente in der Fabrik"], richtig: 1, erklaerung: "Industrie 4.0 = vernetzte Fabriken, in denen Maschinen kommunizieren, Daten analysieren und Prozesse selbst optimieren." },
  { frage: "Welche Kompetenz ist für Mitarbeiter in der digitalen Transformation besonders wichtig?", optionen: ["Schreibmaschinenkompetenz", "Digitale Kompetenz (Data Literacy, Umgang mit Tools, agiles Arbeiten)", "Buchhaltungswissen", "Fremdsprachen"], richtig: 1, erklaerung: "Digitale Kompetenz (Digital Literacy) umfasst den sicheren Umgang mit digitalen Tools, Daten und neuen Arbeitsmethoden." },
  { frage: "Was bedeutet 'Customer Centricity' in der digitalen Transformation?", optionen: ["Kunden bezahlen mehr", "Der Kunde steht im Mittelpunkt aller digitalen Entscheidungen", "Kundendaten sammeln und verkaufen", "Kunden selbst digitalisieren lassen"], richtig: 1, erklaerung: "Customer Centricity = alle Prozesse, Produkte und Systeme werden konsequent auf den Kundennutzen ausgerichtet." },
  { frage: "Was ist Cloud Computing im Unternehmenskontext?", optionen: ["Speicherung von Wetterdaten", "Bereitstellung von IT-Ressourcen (Server, Software) über das Internet nach Bedarf", "Ein lokales Netzwerk", "Eine Backup-Lösung nur für große Konzerne"], richtig: 1, erklaerung: "Cloud = IT-Ressourcen (Rechenleistung, Speicher, Software) werden über das Internet bedarfsgerecht bereitgestellt." }
];

// --- Datensicherheit und Datenschutz ---
FAECHER["winf-seidlmeier"].themen["datensicherheit-datenschutz"].quiz = [
  { frage: "Wofür steht CIA im Kontext der Informationssicherheit?", optionen: ["Confidentiality, Integrity, Availability", "Control, Inspection, Authorization", "Cybersecurity, IT, Access", "Compliance, Innovation, Audit"], richtig: 0, erklaerung: "CIA = Vertraulichkeit (Confidentiality), Integrität (Integrity), Verfügbarkeit (Availability) – die drei Grundziele der Informationssicherheit." },
  { frage: "Was bedeutet Vertraulichkeit (Confidentiality)?", optionen: ["Daten sind immer erreichbar", "Nur autorisierte Personen können auf Daten zugreifen", "Daten werden regelmäßig gesichert", "Daten sind korrekt"], richtig: 1, erklaerung: "Vertraulichkeit schützt Daten vor unbefugtem Zugriff durch Verschlüsselung und Zugriffskontrollen." },
  { frage: "Was bedeutet Integrität in der Informationssicherheit?", optionen: ["Daten sind verschlüsselt", "Daten bleiben korrekt und werden nicht unbemerkt verändert", "Daten sind immer verfügbar", "Daten sind vollständig gesichert"], richtig: 1, erklaerung: "Integrität = Daten werden nicht unbemerkt verändert. Checksummen und digitale Signaturen schützen die Integrität." },
  { frage: "Was bedeutet Verfügbarkeit (Availability)?", optionen: ["Daten sind verschlüsselt", "Autorisierte Nutzer haben Zugriff auf Daten, wenn sie ihn brauchen", "Keine externen Zugriffe erlaubt", "Daten werden täglich gesichert"], richtig: 1, erklaerung: "Verfügbarkeit = System und Daten sind funktionsfähig und erreichbar, wenn autorisierte Nutzer sie brauchen." },
  { frage: "Was ist der Unterschied zwischen Datensicherheit und Datenschutz?", optionen: ["Kein Unterschied", "Datensicherheit = technischer Schutz vor Bedrohungen; Datenschutz = rechtlicher Schutz personenbezogener Daten", "Datenschutz ist technisch, Datensicherheit rechtlich", "Datenschutz gilt nur für Großunternehmen"], richtig: 1, erklaerung: "Datensicherheit schützt technisch (CIA-Modell). Datenschutz schützt rechtlich die Privatsphäre personenbezogener Daten (DSGVO)." },
  { frage: "Wofür steht die DSGVO?", optionen: ["Deutsche Software-Grundverordnung", "Datenschutz-Grundverordnung (EU)", "Digitale Sicherheits-Grundordnung und -Verfahren", "Datenserver-Grundverfassung"], richtig: 1, erklaerung: "DSGVO = Datenschutz-Grundverordnung der EU – regelt den Umgang mit personenbezogenen Daten europaweit." },
  { frage: "Was sind personenbezogene Daten?", optionen: ["Alle digitalen Daten", "Daten, die eine identifizierte oder identifizierbare natürliche Person betreffen", "Nur Name und Adresse", "Nur Bankdaten"], richtig: 1, erklaerung: "Personenbezogene Daten = alle Daten, die eine Person direkt oder indirekt identifizierbar machen (Name, IP, Standort etc.)." },
  { frage: "Was ist Zwei-Faktor-Authentifizierung (2FA)?", optionen: ["Zwei Passwörter hintereinander", "Identitätsnachweis durch zwei verschiedene Faktoren (z.B. Passwort + SMS-Code)", "Ein doppeltes Passwort", "Zwei Administratoren müssen zustimmen"], richtig: 1, erklaerung: "2FA = Kombination zweier verschiedener Faktoren: Wissen (Passwort), Besitz (Handy), Biometrie – erhöht die Sicherheit." },
  { frage: "Was ist eine Firewall?", optionen: ["Ein physischer Schutzwall für Server-Räume", "Eine Sicherheitssoftware/Hardware, die Netzwerkverkehr filtert und unerwünschte Verbindungen blockiert", "Ein Backup-System", "Ein Verschlüsselungsalgorithmus"], richtig: 1, erklaerung: "Firewall = kontrolliert eingehenden und ausgehenden Netzwerkverkehr anhand von Regeln – schützt vor unberechtigten Zugriffen." },
  { frage: "Was ist ein Phishing-Angriff?", optionen: ["Ein Hackerangriff auf Server-Hardware", "Täuschung von Nutzern durch gefälschte E-Mails/Webseiten zur Datendiebstahl", "Ein Virenangriff auf Datenbanken", "Physischer Diebstahl von Hardware"], richtig: 1, erklaerung: "Phishing = Kriminelle täuschen Nutzer durch gefälschte E-Mails oder Websites, um Login-Daten oder Zahlungsinformationen zu stehlen." },
  { frage: "Welches Recht gewährt die DSGVO Betroffenen?", optionen: ["Recht auf kostenlose Software", "Recht auf Zugriff, Berichtigung und Löschung personenbezogener Daten", "Recht auf anonymes Surfen", "Recht auf unbegrenzte Datenspeicherung"], richtig: 1, erklaerung: "DSGVO-Rechte: Auskunft, Berichtigung, Löschung ('Recht auf Vergessenwerden'), Datenportabilität, Widerspruch." },
  { frage: "Was ist Ransomware?", optionen: ["Ein legales Backup-Tool", "Schadsoftware, die Daten verschlüsselt und Lösegeld fordert", "Ein Antivirenprogramm", "Eine Art Firewall"], richtig: 1, erklaerung: "Ransomware verschlüsselt Daten und fordert Lösegeld für den Entschlüsselungscode – eine der gefährlichsten Bedrohungen." },
  { frage: "Was ist der Datenschutzbeauftragte (DSB)?", optionen: ["Der IT-Administrator eines Unternehmens", "Eine Person, die die Einhaltung des Datenschutzes im Unternehmen überwacht", "Der Geschäftsführer", "Ein externer Auditor"], richtig: 1, erklaerung: "Der DSB überwacht die DSGVO-Konformität im Unternehmen und ist Ansprechpartner für Datenschutzfragen." },
  { frage: "Was ist Datenverschlüsselung?", optionen: ["Löschen sensibler Daten", "Umwandlung von Daten in ein unlesbares Format, das nur mit dem Schlüssel lesbar ist", "Komprimierung von Daten", "Sicherung von Daten auf externen Servern"], richtig: 1, erklaerung: "Verschlüsselung = Daten werden so umgewandelt, dass nur autorisierte Personen mit dem Schlüssel sie lesen können." },
  { frage: "Was schützt die Integrität von Daten bei der Übertragung?", optionen: ["Antivirensoftware", "Digitale Signaturen und Checksummen", "Firewall", "Benutzerdokumentation"], richtig: 1, erklaerung: "Digitale Signaturen und Checksummen prüfen, ob Daten während der Übertragung verändert wurden." }
];

// --- 1. Was ist Wirtschaftsinformatik? (aufstocken auf 17 Fragen) ---
FAECHER["winf-seidlmeier"].themen["was-ist-wi"].quiz = FAECHER["winf-seidlmeier"].themen["was-ist-wi"].quiz.concat([
  { frage: "Was ist das Ziel der Wertkette nach Porter?", optionen: ["Alle Kosten senken", "Wettbewerbsvorteile durch systematische Analyse wertschöpfender Aktivitäten", "Produkte billiger machen", "Mitarbeiter reduzieren"], richtig: 1, erklaerung: "Porters Wertkette analysiert primäre und unterstützende Aktivitäten, um Quellen von Wettbewerbsvorteilen zu identifizieren." },
  { frage: "Was sind unterstützende Aktivitäten in der Wertkette?", optionen: ["Eingangslogistik, Operationen, Ausgangslogistik", "Unternehmensinfrastruktur, HR, Technologieentwicklung, Beschaffung", "Marketing, Vertrieb, Service", "Forschung und Entwicklung"], richtig: 1, erklaerung: "Unterstützende Aktivitäten: Unternehmensinfrastruktur, Personalwirtschaft (HR), Technologieentwicklung, Beschaffung." },
  { frage: "Was analysieren die fünf Porter-Kräfte?", optionen: ["Interne Mitarbeiterstruktur", "Wettbewerbsintensität einer Branche aus fünf Richtungen", "Kostenstruktur eines Unternehmens", "Nur direkte Konkurrenten"], richtig: 1, erklaerung: "Porters 5 Kräfte: Lieferantenmacht, Kundenmacht, neue Anbieter, Substitute, Wettbewerbsintensität – analysieren die Branchenattraktivität." },
  { frage: "Was ist ein Executive Information System (EIS)?", optionen: ["Ein E-Mail-Programm für Manager", "IS für das Top-Management mit strategischen Kennzahlen", "Ein Warenwirtschaftssystem", "Ein IT-Sicherheitssystem"], richtig: 1, erklaerung: "EIS liefert dem Top-Management hochaggregierte, strategische Informationen zur Unterstützung von Führungsentscheidungen." },
  { frage: "Was ist ein Geschäftsprozess?", optionen: ["Eine einzelne Aufgabe", "Eine strukturierte Abfolge von Aktivitäten zur Erreichung eines Unternehmensziels", "Ein IT-System", "Ein Organigramm"], richtig: 1, erklaerung: "Geschäftsprozesse = strukturierte Abfolgen von Aktivitäten (oft abteilungsübergreifend) zur Erreichung eines definierten Ziels." },
  { frage: "Was ist ein TPS (Transaction Processing System)?", optionen: ["Ein System für das Top-Management", "Ein System zur Verarbeitung von Alltagstransaktionen (Bestellungen, Buchungen)", "Ein Analyse-Tool", "Ein CRM-System"], richtig: 1, erklaerung: "TPS verarbeiten täglich große Mengen an Transaktionen (Bestellungen, Buchungen, Zahlungen) auf operativer Ebene." },
  { frage: "Warum sind Informationssysteme für die Wertschöpfung entscheidend?", optionen: ["Sie ersetzen alle Mitarbeiter", "Sie unterstützen und optimieren wertschöpfende Aktivitäten durch Daten und Automatisierung", "Sie sind nur für IT-Abteilungen relevant", "Sie senken automatisch alle Kosten"], richtig: 1, erklaerung: "IS ermöglichen bessere Entscheidungen, schnellere Prozesse und neue Geschäftsmodelle – sie sind integraler Teil der Wertschöpfung." },
  { frage: "Was ist Insourcing vs. Outsourcing im IS-Kontext?", optionen: ["Kein Unterschied", "Insourcing = intern entwickeln/betreiben; Outsourcing = externe Anbieter nutzen", "Outsourcing ist immer günstiger", "Insourcing ist für alle Unternehmen besser"], richtig: 1, erklaerung: "Insourcing = eigene Ressourcen. Outsourcing = externe Dienstleister (z.B. Cloud-Anbieter). Entscheidung abhängig von Kosten, Know-how, Kontrolle." }
]);

// --- Einkommensteuer (aufstocken auf 20 Fragen) ---
FAECHER["steuerrecht"].themen["einkommensteuer"].quiz = FAECHER["steuerrecht"].themen["einkommensteuer"].quiz.concat([
  { frage: "Was sind 'Einkünfte aus Kapitalvermögen'?", optionen: ["Nur Zinsen aus Bankguthaben", "Dividenden, Zinsen und Kursgewinne aus Wertpapieren", "Mieterträge", "Einkünfte aus selbständiger Arbeit"], richtig: 1, erklaerung: "§ 20 EStG: Kapitalvermögen umfasst Dividenden, Zinsen, Kursgewinne – pauschal besteuert mit 25% Abgeltungsteuer." },
  { frage: "Was ist der Unterschied zwischen Steuerpflicht und Steuerschuld?", optionen: ["Kein Unterschied", "Steuerpflicht = Verpflichtung, Steuererklärung abzugeben; Steuerschuld = konkreter Steuerbetrag", "Steuerschuld entsteht immer automatisch", "Nur natürliche Personen haben Steuerpflicht"], richtig: 1, erklaerung: "Steuerpflicht = persönliche Pflicht zur Steuererklärung. Steuerschuld = der konkret berechnete Steuerbetrag nach Abzug aller Abzüge." },
  { frage: "Welche Einkunftsart unterliegt der Abgeltungsteuer?", optionen: ["Einkünfte aus Gewerbebetrieb", "Einkünfte aus Kapitalvermögen", "Einkünfte aus nichtselbständiger Arbeit", "Vermietung und Verpachtung"], richtig: 1, erklaerung: "Kapitalerträge (§ 20 EStG) werden pauschal mit 25% Abgeltungsteuer (+ SolZ + KiSt) besteuert." },
  { frage: "Was ist der Arbeitnehmer-Pauschbetrag für Werbungskosten?", optionen: ["500 €", "1.000 €", "1.230 €", "2.000 €"], richtig: 2, erklaerung: "Der Werbungskosten-Pauschbetrag für Arbeitnehmer beträgt 1.230 € (Stand 2023/2024). Wird automatisch abgezogen." },
  { frage: "Was sind Sonderausgaben?", optionen: ["Nur Kirchensteuer", "Ausgaben, die nicht Betriebsausgaben/Werbungskosten sind, aber steuerlich absetzbar", "Betriebliche Ausgaben", "Ausgaben für Hobbykosten"], richtig: 1, erklaerung: "Sonderausgaben (z.B. Altersvorsorge, Krankenkasse, Spenden, Kirchensteuer) sind privat, aber steuerlich abziehbar." },
  { frage: "Was regelt § 2 EStG?", optionen: ["Den Steuersatz", "Den Einkommensbegriff und die Ermittlungssystematik", "Die Steuererklärungspflicht", "Nur Kapitalerträge"], richtig: 1, erklaerung: "§ 2 EStG definiert das zu versteuernde Einkommen und listet die 7 Einkunftsarten." },
  { frage: "Was ist die Günstigerprüfung bei der Abgeltungsteuer?", optionen: ["Vergleich mit ausländischen Steuersätzen", "Prüfung, ob persönlicher Steuersatz unter 25% liegt – dann gilt dieser statt 25%", "Optimierung durch Steuerberater", "Vergleich mit Vorjahressteuern"], richtig: 1, erklaerung: "Liegt der persönliche Steuersatz unter 25%, kann man die Günstigerprüfung beantragen – Kapitalerträge werden dann niedriger besteuert." },
  { frage: "Welche Einkunftsarten zählen zu den Überschusseinkünften?", optionen: ["Land/Forst, Gewerbe, Selbständig", "Nichtselbständig, Kapital, V&V, Sonstige", "Alle 7 Einkunftsarten", "Nur gewerbliche Einkünfte"], richtig: 1, erklaerung: "Überschusseinkünfte (Einnahmen - Werbungskosten): Nichtselbständige Arbeit, Kapital, V&V, Sonstige Einkünfte." }
]);

// ============================================================
// STEUERRECHT - Kapitel 3: Gewerbesteuer
// ============================================================
FAECHER["steuerrecht"].themen["gewerbesteuer"] = {
  name: "3. Gewerbesteuer",
  zusammenfassung: `<h4>3. Gewerbesteuer – Vollständige Zusammenfassung</h4>

<h5>📌 Allgemeine Charakterisierung</h5>
<table class="erk-table">
  <tr><th>Merkmal</th><th>Inhalt</th><th>Rechtsgrundlage</th></tr>
  <tr><td><strong>Sachsteuer</strong></td><td>Besteuert die Ertragskraft des Gewerbebetriebs – unabhängig von der Person</td><td>§ 2 GewStG</td></tr>
  <tr><td><strong>Ertragsteuer</strong></td><td>Bemessungsgrundlage = Gewerbeertrag</td><td>§ 7 GewStG</td></tr>
  <tr><td><strong>Gemeindesteuer</strong></td><td>Aufkommen fließt den Gemeinden zu</td><td>Art. 106 Abs. 6 GG</td></tr>
  <tr><td><strong>Jahressteuer</strong></td><td>VZ = Kalenderjahr, vierteljährl. Vorauszahlungen</td><td>§§ 19, 20 GewStG</td></tr>
</table>
<p><strong>Aufkommen 2024:</strong> ca. 75 Mrd. €</p>

<h5>📌 Zweistufiges Verfahren</h5>
<div class="def-box">
  <div class="def-label">Stufe 1 – Finanzamt</div>
  Ermittelt den <strong>Steuermessbetrag</strong> → erlässt <strong>Steuermessbescheid</strong> (§ 184 AO = Grundlagenbescheid)
</div>
<div class="def-box">
  <div class="def-label">Stufe 2 – Gemeinde</div>
  Wendet den <strong>Hebesatz</strong> an → erlässt <strong>Gewerbesteuerbescheid</strong>
</div>

<h5>📌 Sachliche Steuerpflicht (§ 2 GewStG)</h5>
<p>Steuerpflichtig sind <strong>inländische stehende Gewerbebetriebe</strong> (§ 2 Abs. 1 GewStG i.V.m. § 12 AO) und Reisegewerbebetriebe (§ 35a GewStG).</p>
<p><strong>Gewerbebetrieb entsteht auf 3 Wegen:</strong></p>
<table class="erk-table">
  <tr><th>Entstehungsweg</th><th>Voraussetzungen</th><th>Norm</th></tr>
  <tr><td><strong>Kraft gewerblicher Betätigung</strong></td><td>Selbständig, nachhaltig, Gewinnerzielungsabsicht, Beteiligung am Verkehr, nicht LuF/freiberuflich. Achtung: Abfärbetheorie (§ 15 Abs. 3 Nr. 1 EStG) und gewerblich geprägte PersGes (§ 15 Abs. 3 Nr. 2 EStG)</td><td>§ 2 Abs. 1 S. 2 GewStG</td></tr>
  <tr><td><strong>Kraft Rechtsform</strong></td><td>Kapitalgesellschaften (GmbH, AG) → stets Gewerbebetrieb</td><td>§ 2 Abs. 2 S. 1 GewStG</td></tr>
  <tr><td><strong>Kraft wirtschaftlichen Geschäftsbetriebs</strong></td><td>e.V. und nichtrechtsfähige Vereine</td><td>§ 2 Abs. 3 GewStG</td></tr>
</table>

<h5>📌 Persönliche Steuerpflicht (§ 5 GewStG)</h5>
<table class="erk-table">
  <tr><th>Unternehmensform</th><th>Steuerschuldner</th></tr>
  <tr><td>Einzelunternehmen</td><td>Einzelunternehmer</td></tr>
  <tr><td>Personengesellschaft</td><td>Die Gesellschaft</td></tr>
  <tr><td>Kapitalgesellschaft</td><td>Die Gesellschaft</td></tr>
</table>

<h5>📌 Steuerbefreiungen (§ 3 GewStG)</h5>
<p>Beispiele: Deutsche Bundesbank, KfW (Kreditanstalt für Wiederaufbau), Krankenhäuser/Altenheime/Pflegeheime unter Voraussetzungen (§ 3 Nr. 20 GewStG)</p>

<h5>📌 Ermittlungsschema I – Gewerbeertrag</h5>
<table class="erk-table">
  <tr><td>Gewinn aus Gewerbebetrieb</td><td>§ 7 GewStG</td></tr>
  <tr><td>+ Hinzurechnungen</td><td>§ 8 GewStG</td></tr>
  <tr><td>− Kürzungen</td><td>§ 9 GewStG</td></tr>
  <tr><td><strong>= maßgebender Gewerbeertrag</strong></td><td>§ 10 GewStG</td></tr>
  <tr><td>− Gewerbeverlust vergangener Jahre</td><td>§ 10a GewStG</td></tr>
  <tr><td><strong>= Gewerbeertrag nach Verlustabzug</strong></td><td></td></tr>
  <tr><td>Abrundung auf volle 100 €</td><td>§ 11 Abs. 1 S. 3 GewStG</td></tr>
  <tr><td>− 24.500 € Freibetrag (nur EU/PersGes)</td><td>§ 11 Abs. 1 Nr. 1 GewStG</td></tr>
  <tr><td><strong>= Gewerbeertrag nach Freibetrag</strong></td><td></td></tr>
</table>

<h5>📌 Hinzurechnungen (§ 8 GewStG) – Beseitigung von Gewinnverzerrungen</h5>
<table class="erk-table">
  <tr><th>Nr.</th><th>Kategorie</th><th>Satz</th></tr>
  <tr><td>1a–f</td><td>Finanzierungsanteile: Zinsen/Renten (100%), Miete unbewegliche WG (50%), Konzessionen/Lizenzen (25%), Miete bewegliche WG (20%) → Summe − 200.000 € FB × 25%</td><td>§ 8 Nr. 1</td></tr>
  <tr><td>4, 5</td><td>Diverse Gewinnanteile</td><td>§ 8 Nr. 4, 5</td></tr>
  <tr><td>8</td><td>Anteile am Verlust von Mitunternehmerschaften (OHG, KG, GmbH & Co. KG)</td><td>§ 8 Nr. 8</td></tr>
  <tr><td>9</td><td>Ausgaben i.S.v. § 9 Abs. 1 Nr. 2 KStG (Spenden/Zuwendungen bei Körperschaften)</td><td>§ 8 Nr. 9</td></tr>
  <tr><td>10, 12</td><td>Diverse Gewinnminderungen / ausländische Steuern</td><td>§ 8 Nr. 10, 12</td></tr>
</table>

<h5>📌 Kürzungen (§ 9 GewStG) – Beseitigung von Gewinnverzerrungen</h5>
<table class="erk-table">
  <tr><th>Nr.</th><th>Kategorie</th></tr>
  <tr><td>1</td><td>Grundsteuer für Grundbesitz im Betriebsvermögen (ab 2025)</td></tr>
  <tr><td>2</td><td>Anteile am Gewinn von Mitunternehmerschaften → Vermeidung Doppelbesteuerung</td></tr>
  <tr><td>2a, 2b, 7, 8</td><td>Diverse sonstige Gewinnanteile</td></tr>
  <tr><td>3</td><td>Anteil des Gewerbeertrags einer ausländischen Betriebsstätte</td></tr>
  <tr><td>5</td><td>Aus Mitteln des Gewerbebetriebs geleistete Zuwendungen (Höchstbeträge: 20% des erhöhten Gewinns oder 4‰ von Umsatz + Lohnsumme)</td></tr>
</table>

<h5>📌 Verlustabzug (§ 10a GewStG)</h5>
<div class="def-box">
  <div class="def-label">Wichtig: Nur Verlustvortrag – kein Verlustrücktrag!</div>
  <strong>1. Stufe:</strong> Unbegrenzter Verlustabzug bis 1 Mio. €<br>
  <strong>2. Stufe:</strong> Für Gewerbeertrag über 1 Mio. € → begrenzter Verlustabzug von 60 %
</div>

<h5>📌 Ermittlungsschema II – Von Gewerbeertrag zur Steuer</h5>
<table class="erk-table">
  <tr><td>Gewerbeertrag nach Freibetrag</td><td></td></tr>
  <tr><td>× Steuermesszahl 3,5 %</td><td>§ 11 Abs. 2 GewStG</td></tr>
  <tr><td><strong>= Steuermessbetrag</strong> (abrunden auf volle €)</td><td>§§ 11, 14 GewStG</td></tr>
  <tr><td>× Gewerbesteuerhebesatz (mind. 200 %)</td><td>§ 16 GewStG</td></tr>
  <tr><td><strong>= festzusetzende Gewerbesteuer</strong></td><td></td></tr>
  <tr><td>− Vorauszahlungen</td><td>§§ 19, 20 GewStG</td></tr>
  <tr><td><strong>= Nachzahlung / Erstattung</strong></td><td></td></tr>
</table>

<h5>📌 Anrechnung auf die ESt (§ 35 EStG)</h5>
<p>Für Einzelunternehmer und Mitunternehmer: Ermäßigung der ESt um das <strong>4-fache des Steuermessbetrags</strong>, maximal jedoch die tatsächliche Gewerbesteuer. Nur anrechenbar auf Gewerbeeinkünfte, kein Vor-/Rücktrag.</p>`,

  erklaerungen: [
    {
      titel: "Allgemeine Charakterisierung der Gewerbesteuer",
      inhalt: `<p>Die <strong>Gewerbesteuer (GewSt)</strong> ist eine der wichtigsten Steuern für Unternehmen. Sie hat vier prägende Merkmale:</p>
<div class="erk-tree">
  <div class="tree-root">Gewerbesteuer – Charakter</div>
  <div class="tree-branches">
    <div class="tree-branch"><strong>Sachsteuer:</strong> Besteuert die Ertragskraft des Betriebs, nicht die Person dahinter</div>
    <div class="tree-branch"><strong>Ertragsteuer:</strong> Bemessungsgrundlage ist der Gewerbeertrag</div>
    <div class="tree-branch"><strong>Gemeindesteuer:</strong> Das Aufkommen fließt der Gemeinde zu (Art. 106 Abs. 6 GG)</div>
    <div class="tree-branch"><strong>Jahressteuer:</strong> Vierteljährliche Vorauszahlungen (§§ 19, 20 GewStG)</div>
  </div>
</div>
<p>Das <strong>zweistufige Verfahren</strong> ist entscheidend:</p>
<table class="erk-table">
  <tr><th>Stufe</th><th>Wer?</th><th>Was?</th><th>Ergebnis</th></tr>
  <tr><td>1</td><td>Finanzamt</td><td>Ermittelt Steuermessbetrag</td><td>Steuermessbescheid (Grundlagenbescheid, § 184 AO)</td></tr>
  <tr><td>2</td><td>Gemeinde</td><td>Wendet Hebesatz an</td><td>Gewerbesteuerbescheid</td></tr>
</table>`,
      beispiel: "Aufkommen 2024: ca. 75 Mrd. € – damit ist die GewSt nach USt und Lohnsteuer die drittgrößte Steuer.",
      merke: "GewSt = Sachsteuer! Sie besteuert den Betrieb, nicht den Unternehmer persönlich. Zweistufiges Verfahren: FA ermittelt Messbetrag, Gemeinde setzt GewSt fest.",
      flipcards: [
        { vorne: "Was ist das Steuersubjekt der GewSt?", hinten: "Der Gewerbebetrieb als solcher (Sachsteuer) – nicht der Unternehmer persönlich." },
        { vorne: "Wer erlässt den Steuermessbescheid?", hinten: "Das Finanzamt (Grundlagenbescheid nach § 184 AO)." },
        { vorne: "Wer erlässt den Gewerbesteuerbescheid?", hinten: "Die Gemeinde – sie wendet ihren Hebesatz auf den Messbetrag an." },
        { vorne: "Wie hoch ist das GewSt-Aufkommen 2024?", hinten: "Ca. 75 Mrd. € – fließt vollständig den Gemeinden zu." }
      ],
      details: [
        { titel: "Warum Gemeinde und nicht Bund/Land?", inhalt: "Die GewSt ist Ausgleich dafür, dass Unternehmen die kommunale Infrastruktur nutzen (Straßen, Ver-/Entsorgung, Feuerwehr etc.)." },
        { titel: "Vorauszahlungen", inhalt: "Jeweils am 15.02., 15.05., 15.08. und 15.11. – je ein Viertel der Vorauszahlung (§ 19 GewStG)." }
      ],
      interaktion: [
        { frage: "Was beschreibt den Charakter der GewSt als 'Sachsteuer' am besten?", optionen: ["Sie ist abhängig vom Einkommen des Unternehmers", "Sie besteuert die Ertragskraft des Betriebs unabhängig von der Person", "Sie ist eine Verbrauchsteuer", "Sie wird vom Bund erhoben"], richtig: 1, erklaerung: "Sachsteuer = die Steuer knüpft an den Betrieb (die Sache) an, nicht an die persönlichen Verhältnisse des Inhabers." },
        { frage: "Welches Verfahren gilt bei der Gewerbesteuer?", optionen: ["Einheitliches Verfahren nur durch Finanzamt", "Zweistufig: FA → Messbescheid, Gemeinde → GewSt-Bescheid", "Nur Gemeinde zuständig", "Nur Finanzamt zuständig"], richtig: 1, erklaerung: "Zweistufig: Das FA ermittelt den Steuermessbetrag (Grundlagenbescheid), die Gemeinde wendet ihren Hebesatz an." }
      ]
    },
    {
      titel: "Steuerpflicht: Wer unterliegt der Gewerbesteuer?",
      inhalt: `<p>Die Steuerpflicht bei der GewSt unterscheidet zwischen <strong>sachlicher</strong> und <strong>persönlicher</strong> Steuerpflicht.</p>

<p><strong>Sachliche Steuerpflicht (§ 2 GewStG):</strong> Inländische stehende Gewerbebetriebe.</p>
<p>Ein Gewerbebetrieb entsteht auf <strong>3 Wegen</strong>:</p>
<div class="erk-tree">
  <div class="tree-root">Gewerbebetrieb entsteht kraft...</div>
  <div class="tree-branches">
    <div class="tree-branch">
      <strong>1. Gewerblicher Betätigung</strong> (§ 2 Abs. 1 S. 2 GewStG)<br>
      Alle 5 Voraussetzungen müssen kumulativ vorliegen: Selbständigkeit, Nachhaltigkeit, Gewinnerzielungsabsicht, Beteiligung am allg. wirtschaftl. Verkehr, nicht LuF und nicht freiberuflich.<br>
      ⚠ Abfärbetheorie (§ 15 Abs. 3 Nr. 1 EStG): Eine gewerbliche Tätigkeit „färbt" alle anderen Tätigkeiten einer PersGes ab.<br>
      ⚠ Gewerblich geprägte PersGes (§ 15 Abs. 3 Nr. 2 EStG)
    </div>
    <div class="tree-branch">
      <strong>2. Rechtsform</strong> (§ 2 Abs. 2 S. 1 GewStG)<br>
      Kapitalgesellschaften (GmbH, AG, KGaA) → stets und in vollem Umfang Gewerbebetrieb
    </div>
    <div class="tree-branch">
      <strong>3. Wirtschaftlichen Geschäftsbetriebs</strong> (§ 2 Abs. 3 GewStG)<br>
      e.V. und nichtrechtsfähige Vereine mit wirtschaftlichem Geschäftsbetrieb
    </div>
  </div>
</div>

<p><strong>Persönliche Steuerpflicht (§ 5 GewStG):</strong></p>
<table class="erk-table">
  <tr><th>Unternehmensform</th><th>Steuerschuldner</th></tr>
  <tr><td>Einzelunternehmen</td><td>Der Einzelunternehmer persönlich</td></tr>
  <tr><td>Personengesellschaft (OHG, KG...)</td><td>Die Gesellschaft selbst</td></tr>
  <tr><td>Kapitalgesellschaft (GmbH, AG...)</td><td>Die Gesellschaft selbst</td></tr>
</table>`,
      beispiel: "Eine GmbH ist kraft Rechtsform immer gewerbesteuerpflichtig – auch wenn sie nur vermögensverwaltend tätig wäre. Ein Arzt (Freiberufler) hingegen zahlt keine GewSt.",
      merke: "GmbH/AG = immer GewSt (kraft Rechtsform)! Freiberufler (Ärzte, Anwälte, Steuerberater) und Land-/Forstwirte zahlen keine GewSt.",
      flipcards: [
        { vorne: "Zahlt eine GmbH, die nur Immobilien verwaltet, GewSt?", hinten: "Ja! Kapitalgesellschaften unterliegen kraft Rechtsform (§ 2 Abs. 2 GewStG) immer der GewSt." },
        { vorne: "Was ist die Abfärbetheorie?", hinten: "§ 15 Abs. 3 Nr. 1 EStG: Eine gewerbliche Tätigkeit einer PersGes 'infiziert' alle anderen Tätigkeiten → gesamte Tätigkeit wird gewerblich." },
        { vorne: "5 Voraussetzungen Gewerbebetrieb kraft Betätigung?", hinten: "Selbständigkeit, Nachhaltigkeit, Gewinnerzielungsabsicht, Beteiligung am allg. wirtschaftl. Verkehr, nicht LuF/freiberuflich." },
        { vorne: "Wer ist Steuerschuldner bei einer OHG?", hinten: "Die OHG selbst (§ 5 Abs. 1 GewStG) – nicht die einzelnen Gesellschafter." }
      ],
      details: [
        { titel: "Abgrenzung: Freiberufler vs. Gewerbebetrieb", inhalt: "Freiberufliche Tätigkeiten (§ 18 EStG): Ärzte, Rechtsanwälte, Steuerberater, Architekten, Journalisten etc. → keine GewSt. Abgrenzung kann schwierig sein (z.B. Ingenieur als Freiberufler vs. gewerblicher Betrieb)." },
        { titel: "Steuerbefreiungen § 3 GewStG", inhalt: "Befreit sind u.a.: Deutsche Bundesbank, KfW, Krankenhäuser/Altenheime/Pflegeheime unter bestimmten Voraussetzungen (§ 3 Nr. 20 GewStG)." }
      ],
      interaktion: [
        { frage: "Eine GmbH betreibt ausschließlich Vermögensverwaltung. Unterliegt sie der GewSt?", optionen: ["Nein, weil reine Vermögensverwaltung kein Gewerbe ist", "Ja, weil Kapitalgesellschaften kraft Rechtsform stets gewerblich sind", "Nur wenn der Gewinn über 24.500 € liegt", "Nein, Vermögensverwaltung ist immer steuerfrei"], richtig: 1, erklaerung: "§ 2 Abs. 2 GewStG: Kapitalgesellschaften begründen stets und in vollem Umfang einen Gewerbebetrieb – unabhängig von ihrer Tätigkeit." },
        { frage: "Eine OHG betreibt sowohl eine freiberufliche Beratung als auch einen kleinen Handel. Was gilt?", optionen: ["Nur der Handelsanteil unterliegt der GewSt", "Gar keine GewSt, weil überwiegend freiberuflich", "Durch die Abfärbetheorie wird die gesamte Tätigkeit gewerblich", "Nur wenn Gewinn > 24.500 €"], richtig: 2, erklaerung: "Abfärbetheorie (§ 15 Abs. 3 Nr. 1 EStG): Die gewerbliche Tätigkeit infiziert die gesamte PersGes – alle Einkünfte werden gewerblich und unterliegen der GewSt." }
      ]
    },
    {
      titel: "Ermittlung des Gewerbeertrags: Hinzurechnungen und Kürzungen",
      inhalt: `<p>Ausgangspunkt ist der steuerliche <strong>Gewinn aus Gewerbebetrieb (§ 7 GewStG)</strong>:</p>
<table class="erk-table">
  <tr><th>Unternehmensform</th><th>Gewinn i.S.v. § 7 GewStG</th></tr>
  <tr><td>Einzelunternehmen / PersGes</td><td>Einkünfte aus Gewerbebetrieb gem. § 15 Abs. 1 EStG</td></tr>
  <tr><td>Kapitalgesellschaft</td><td>Zu versteuerndes Einkommen vor Verlustabzug (§§ 7+8 KStG)</td></tr>
</table>

<p><strong>Hinzurechnungen (§ 8 GewStG)</strong> – Beseitigung von Gewinnverzerrungen durch Finanzierungsform:</p>
<div class="def-box">
  <div class="def-label">§ 8 Nr. 1 – Finanzierungsanteile (wichtigste Hinzurechnung!)</div>
  <table class="erk-table">
    <tr><td>Zinsen, Renten, dauernde Lasten, Gewinnanteile stiller Gesellschafter</td><td>100 %</td></tr>
    <tr><td>Mieten/Pachten/Leasing unbewegliche Wirtschaftsgüter</td><td>50 %</td></tr>
    <tr><td>Konzessionen / Lizenzen</td><td>25 %</td></tr>
    <tr><td>Mieten/Pachten/Leasing bewegliche Wirtschaftsgüter</td><td>20 %</td></tr>
    <tr><td><strong>= Summe Finanzierungsanteile</strong></td><td></td></tr>
    <tr><td>− Freibetrag</td><td>200.000 €</td></tr>
    <tr><td><strong>= Summe nach Freibetrag</strong></td><td></td></tr>
    <tr><td>× allgemeiner Hinzurechnungssatz</td><td>25 %</td></tr>
    <tr><td><strong>= Hinzurechnungsbetrag</strong></td><td></td></tr>
  </table>
</div>
<p>Weitere Hinzurechnungen: Anteile am Verlust von Mitunternehmerschaften (§ 8 Nr. 8), Spenden/Zuwendungen bei Körperschaften (§ 8 Nr. 9)</p>

<p><strong>Kürzungen (§ 9 GewStG)</strong> – ebenfalls Beseitigung von Gewinnverzerrungen:</p>
<table class="erk-table">
  <tr><td>§ 9 Nr. 1</td><td>Grundsteuer für Grundbesitz im Betriebsvermögen (ab 2025)</td></tr>
  <tr><td>§ 9 Nr. 2</td><td>Anteile am Gewinn von Mitunternehmerschaften → Vermeidung Doppelbesteuerung</td></tr>
  <tr><td>§ 9 Nr. 3</td><td>Gewerbeertrag auf ausländische Betriebsstätten entfallend</td></tr>
  <tr><td>§ 9 Nr. 5</td><td>Zuwendungen (Spenden): max. 20% des erhöhten Gewinns oder 4‰ von Umsatz+Lohnsumme</td></tr>
</table>`,
      beispiel: `Rosenheimer Craft Beer OHG (Gewinn § 7 GewStG: 2.000.000 €):
Hinzurechnungen:
+ Zinsen Bankdarlehen 2 Mio. × 10% = 200.000 € × 100% = 200.000 €
+ Stiller Gesellschafter Gewinnanteil 20.000 € × 100% = 20.000 €
+ Miete Gewerbehalle 10.000 × 12 = 120.000 € × 50% = 60.000 €
+ Leasing LKW 5.000 × 12 = 60.000 € × 20% = 12.000 €
= Summe Finanzierungsanteile: 292.000 € − 200.000 FB = 92.000 € × 25% = 23.000 €
+ Verlustanteil Mälzerei OHG (20% von 50.000 €) = 10.000 €
Gesamt-Hinzurechnungen: 33.000 €`,
      merke: "Hinzurechnungen neutralisieren den Vorteil der Fremdfinanzierung – Eigenkapital und Fremdkapital sollen steuerlich gleichbehandelt werden. Wichtig: Freibetrag 200.000 € bei Finanzierungsanteilen!",
      flipcards: [
        { vorne: "Warum gibt es Hinzurechnungen bei der GewSt?", hinten: "Beseitigung von 'Gewinnverzerrungen': Eigenkapital- und fremdkapitalfinanzierte Betriebe sollen gleich behandelt werden." },
        { vorne: "Hinzurechnung Zinsen § 8 Nr. 1 GewStG: Wie viel Prozent?", hinten: "Zunächst 100% → Summe − 200.000 € Freibetrag → × 25% = Hinzurechnungsbetrag." },
        { vorne: "Warum werden Gewinnanteile aus Mitunternehmerschaften gekürzt (§ 9 Nr. 2)?", hinten: "Vermeidung der Doppelbesteuerung: Der Gewinn wird bei der Mitunternehmerschaft bereits mit GewSt belastet." },
        { vorne: "Was ist die Kürzung nach § 9 Nr. 1 GewStG (ab 2025)?", hinten: "Grundsteuer für Grundbesitz im Betriebsvermögen – weil Grundsteuer und GewSt sonst doppelt belasten würden." }
      ],
      details: [
        { titel: "Hinzurechnung Verlustanteil Mitunternehmerschaft (§ 8 Nr. 8)", inhalt: "Hat ein Betrieb einen Verlustanteil als Gesellschafter einer OHG/KG/GmbH & Co. KG abgezogen, wird dieser hinzugerechnet. Der Verlust soll die GewSt-Basis des eigenen Betriebs nicht mindern." },
        { titel: "Spenden: Hinzurechnung und Kürzung", inhalt: "Spenden werden zunächst nach § 8 Nr. 9 hinzugerechnet und dann nach § 9 Nr. 5 bis zum Höchstbetrag wieder gekürzt. Höchstbetrag: 20% des erhöhten Gewinns (§ 7 + § 8 Nr. 9) ODER 4‰ von Gesamtumsatz + Lohnsumme (höherer Betrag gilt)." }
      ],
      interaktion: [
        { frage: "Ein Unternehmen zahlt 500.000 € Zinsen für ein Darlehen. Wie hoch ist der Hinzurechnungsbetrag (§ 8 Nr. 1 GewStG)? (Nur Zinsen, kein anderer Posten)", optionen: ["500.000 €", "125.000 €", "75.000 €", "300.000 €"], richtig: 2, erklaerung: "500.000 € × 100% = 500.000 € − 200.000 € FB = 300.000 € × 25% = 75.000 € Hinzurechnungsbetrag." },
        { frage: "Warum werden Mieten für Gewerbehallen nur zu 50% bei § 8 Nr. 1 GewStG angesetzt?", optionen: ["Weil Mieten generell steuerbefreit sind", "Weil nur der Finanzierungsanteil (= Zinsäquivalent) aus der Miete erfasst werden soll", "Weil Immobilien besonders gefördert werden", "Aus politischen Gründen"], richtig: 1, erklaerung: "In einer Miete steckt neben einem Finanzierungsanteil auch ein Entgelt für Betrieb, Verwaltung, Instandhaltung. Nur der Finanzierungsanteil soll hinzugerechnet werden." }
      ]
    },
    {
      titel: "Berechnung der Gewerbesteuer: Messbetrag, Hebesatz, Anrechnung",
      inhalt: `<p>Nach Ermittlung des Gewerbeertrags erfolgt die <strong>eigentliche Steuerberechnung in zwei Schritten</strong>:</p>

<p><strong>Verlustabzug (§ 10a GewStG):</strong></p>
<div class="def-box">
  <div class="def-label">Wichtig: Nur Verlustvortrag – KEIN Verlustrücktrag!</div>
  1. Stufe: Unbegrenzt abziehbar bis 1 Mio. €<br>
  2. Stufe: Für den 1 Mio. € übersteigenden Gewerbeertrag: max. 60 % abziehbar
</div>

<p><strong>Freibetrag (§ 11 Abs. 1 GewStG):</strong></p>
<table class="erk-table">
  <tr><th>Rechtsform</th><th>Freibetrag</th></tr>
  <tr><td>Einzelunternehmen / Personengesellschaft</td><td>24.500 € (§ 11 Abs. 1 Nr. 1 GewStG)</td></tr>
  <tr><td>Kapitalgesellschaft</td><td>0 € – kein Freibetrag!</td></tr>
</table>

<p><strong>Steuermesszahl und Messbetrag:</strong></p>
<table class="erk-table">
  <tr><td>Gewerbeertrag nach Freibetrag (abgerundet auf volle 100 €)</td><td></td></tr>
  <tr><td>× Steuermesszahl</td><td><strong>3,5 %</strong> (§ 11 Abs. 2 GewStG)</td></tr>
  <tr><td>= <strong>Steuermessbetrag</strong></td><td>Abrunden auf volle €, Grundlagenbescheid FA</td></tr>
  <tr><td>× <strong>Hebesatz</strong> (mind. 200 %)</td><td>§ 16 GewStG, wird von Gemeinde festgesetzt</td></tr>
  <tr><td>= <strong>festzusetzende Gewerbesteuer</strong></td><td></td></tr>
</table>

<p><strong>Anrechnung auf die ESt (§ 35 EStG)</strong> – nur für Einzelunternehmer und Mitunternehmer:</p>
<div class="def-box">
  <div class="def-label">§ 35 EStG – Gewerbesteueranrechnung</div>
  Ermäßigung der ESt = <strong>4-facher Steuermessbetrag</strong>, maximal jedoch die tatsächlich gezahlte Gewerbesteuer.<br>
  Nur anrechenbar auf die ESt, die auf Gewerbeeinkünfte entfällt – kein Vor-/Rücktrag.<br>
  Anrechnung darf nicht zu einer Erstattung führen.
</div>`,
      beispiel: `Beispiel Einzelunternehmer (Gewerbeertrag 47.768 €):
47.768 € − 24.500 € FB = 23.268 €, abgerundet → 23.200 €
× 3,5% = 812 € Steuermessbetrag

Hebesatz 450%: GewSt = 812 € × 450% = 3.654 €
Anrechnung ESt: 4 × 812 € = 3.248 € (< 3.654 €, also 3.248 € anrechenbar)
→ Effektive Belastung: 3.654 € − 3.248 € = 406 €

Hebesatz 300%: GewSt = 812 € × 300% = 2.436 €
Anrechnung ESt: 4 × 812 € = 3.248 €, aber max. 2.436 € (tatsächliche GewSt)
→ Bei niedrigem Hebesatz wird GewSt fast vollständig angerechnet!`,
      merke: "Steuermesszahl immer 3,5% – bundeseinheitlich! Hebesatz variiert (mind. 200%). München: 490%, Rosenheim: 400%. Für Einzelunternehmer/Mitunternehmer: GewSt wird über § 35 EStG auf die ESt angerechnet (4-facher Messbetrag).",
      flipcards: [
        { vorne: "Wie hoch ist die Steuermesszahl bei der GewSt?", hinten: "3,5% – bundeseinheitlich (§ 11 Abs. 2 GewStG). Sie wird auf den Gewerbeertrag nach Freibetrag angewendet." },
        { vorne: "Welchen Freibetrag hat eine GmbH bei der GewSt?", hinten: "Keinen! Der Freibetrag von 24.500 € gilt nur für Einzelunternehmer und Personengesellschaften (§ 11 Abs. 1 Nr. 1 GewStG)." },
        { vorne: "Was bedeutet § 35 EStG für Einzelunternehmer?", hinten: "GewSt-Anrechnung auf die ESt: 4-facher Steuermessbetrag, max. tatsächliche GewSt – mindert die Steuerbelastung." },
        { vorne: "Warum gibt es keinen GewSt-Verlustrücktrag?", hinten: "Rücktrag würde bereits festgesetzte GewSt-Bescheide aufheben → problematisch für Gemeinden. Nur Vortrag möglich (§ 10a GewStG)." }
      ],
      details: [
        { titel: "Zerlegung bei mehreren Betriebsstätten (§§ 28 ff. GewStG)", inhalt: "Hat ein Unternehmen Betriebsstätten in mehreren Gemeinden, wird der Steuermessbetrag nach dem Verhältnis der Arbeitslöhne auf die Gemeinden aufgeteilt (Zerlegungsbescheid = Grundlagenbescheid durch das Betriebsfinanzamt am Ort der Geschäftsleitung)." },
        { titel: "GewSt als Betriebsausgabe?", inhalt: "NEIN! Seit 2008 ist die GewSt keine Betriebsausgabe mehr (§ 4 Abs. 5b EStG). In der Handelsbilanz: Aufwand. Steuerlich: außerbilanzielle Neutralisierung → steuerlicher Gewinn wird durch GewSt nicht gemindert." },
        { titel: "Mindest-Hebesatz", inhalt: "§ 16 Abs. 4 GewStG: Hebesatz mindestens 200%. Ausnahme: Gemeinden die keinen Hebesatz festsetzen, gilt automatisch 200%. Schönbeck (MV) mit 11 Einwohnern hat den Mindest-Hebesatz. Rekordhoch: Dierfeld (RP) mit 900%." }
      ],
      interaktion: [
        { frage: "Ein Einzelunternehmer hat einen Gewerbeertrag von 74.500 €. Wie hoch ist der Steuermessbetrag?", optionen: ["2.607 €", "2.625 €", "1.750 €", "3.500 €"], richtig: 2, erklaerung: "74.500 € − 24.500 € Freibetrag = 50.000 € → abgerundet auf volle 100 €: 50.000 € × 3,5% = 1.750 € Steuermessbetrag (§ 11 Abs. 2 GewStG)." },
        { frage: "Was ist die Untergrenze für den Gewerbesteuer-Hebesatz?", optionen: ["100%", "150%", "200%", "300%"], richtig: 2, erklaerung: "§ 16 Abs. 4 S. 2 GewStG: Der Hebesatz muss mindestens 200% betragen. Gemeinden darunter würden Unternehmen mit Scheinbetriebsstätten anlocken (Steueroasen-Problem)." }
      ]
    }
  ],

  lueckentext: [
    { text: "Die Gewerbesteuer ist eine ___, die die Ertragskraft des Betriebs besteuert – unabhängig von der Person des Unternehmers.", luecken: ["Sachsteuer"], erklaerung: "GewSt = Sachsteuer: Sie knüpft an den Betrieb an, nicht an den Unternehmer persönlich." },
    { text: "Das Finanzamt erlässt den ___, die Gemeinde dann den ___.", luecken: ["Steuermessbescheid", "Gewerbesteuerbescheid"], erklaerung: "Zweistufiges Verfahren: FA → Steuermessbescheid (Grundlagenbescheid), Gemeinde → GewSt-Bescheid mit Hebesatz." },
    { text: "Der Gewerbeertrag ergibt sich aus: Gewinn § 7 GewStG + ___ (§ 8) − ___ (§ 9).", luecken: ["Hinzurechnungen", "Kürzungen"], erklaerung: "Ermittlungsschema I: Gewinn + Hinzurechnungen − Kürzungen = maßgebender Gewerbeertrag (§ 10 GewStG)." },
    { text: "Die Steuermesszahl beträgt bundeseinheitlich ___. Der Freibetrag für Einzelunternehmer und PersGes beträgt ___.", luecken: ["3,5 %", "24.500 €"], erklaerung: "Steuermesszahl 3,5% (§ 11 Abs. 2 GewStG); Freibetrag 24.500 € nur für EU/PersGes (§ 11 Abs. 1 Nr. 1 GewStG)." },
    { text: "Die GewSt ist seit 2008 ___ Betriebsausgabe mehr (§ 4 Abs. 5b EStG). Bei EU/Mitunternehmern kann sie über § 35 EStG auf die ESt angerechnet werden: ___ des Steuermessbetrags.", luecken: ["keine", "das 4-fache"], erklaerung: "§ 4 Abs. 5b EStG: GewSt keine BA mehr. § 35 EStG: Anrechnung 4-facher Messbetrag, max. tatsächliche GewSt." },
    { text: "Kapitalgesellschaften sind kraft ___ immer gewerbesteuerpflichtig. Der gesetzliche Mindest-Hebesatz beträgt ___ (§ 16 Abs. 4 GewStG).", luecken: ["Rechtsform", "200 %"], erklaerung: "§ 2 Abs. 2 GewStG: KapGes stets Gewerbebetrieb. § 16 Abs. 4 GewStG: Mindest-Hebesatz 200%." }
  ],

  zuordnung: [
    {
      titel: "GewSt-Charaktermerkmale zuordnen",
      paare: [
        { links: "Sachsteuer", rechts: "Besteuert Ertragskraft des Betriebs" },
        { links: "Ertragsteuer", rechts: "BMG ist der Gewerbeertrag" },
        { links: "Gemeindesteuer", rechts: "Aufkommen fließt den Gemeinden zu" },
        { links: "Jahressteuer", rechts: "Vierteljährliche Vorauszahlungen" }
      ]
    },
    {
      titel: "Entstehung Gewerbebetrieb zuordnen",
      paare: [
        { links: "GmbH (nur Vermögensverwaltung)", rechts: "Kraft Rechtsform (§ 2 Abs. 2 GewStG)" },
        { links: "Einzelhändler mit Gewinnabsicht", rechts: "Kraft gewerblicher Betätigung (§ 2 Abs. 1 GewStG)" },
        { links: "e.V. mit Wirtschaftsbetrieb", rechts: "Kraft wirtschaftlichen Geschäftsbetriebs (§ 2 Abs. 3 GewStG)" },
        { links: "Arzt in eigener Praxis", rechts: "Kein Gewerbebetrieb (Freiberufler)" }
      ]
    },
    {
      titel: "Hinzurechnungen und Kürzungen zuordnen",
      paare: [
        { links: "Zinsen für Bankdarlehen", rechts: "Hinzurechnung § 8 Nr. 1a (100%)" },
        { links: "Miete Gewerbehalle", rechts: "Hinzurechnung § 8 Nr. 1e (50%)" },
        { links: "Gewinnanteil aus OHG-Beteiligung", rechts: "Kürzung § 9 Nr. 2 (Doppelbesteuerung)" },
        { links: "Verlustanteil aus KG-Beteiligung", rechts: "Hinzurechnung § 8 Nr. 8" }
      ]
    }
  ],

  quiz: [
    { frage: "Was ist das Steuersubjekt der Gewerbesteuer?", optionen: ["Der Unternehmer persönlich", "Der Gewerbebetrieb als solcher (Sachsteuer)", "Das Finanzamt", "Die Gemeinde"], richtig: 1, erklaerung: "Die GewSt ist eine Sachsteuer – sie besteuert die Ertragskraft des Betriebs, nicht den Unternehmer persönlich." },
    { frage: "Wer erlässt den Steuermessbescheid?", optionen: ["Die Gemeinde", "Der Steuerberater", "Das Finanzamt", "Das Bundesfinanzministerium"], richtig: 2, erklaerung: "Das Finanzamt ermittelt den Steuermessbetrag und erlässt den Steuermessbescheid (Grundlagenbescheid, § 184 AO)." },
    { frage: "Unterliegt eine GmbH, die nur Wohnungen vermietet, der Gewerbesteuer?", optionen: ["Nein, Vermögensverwaltung ist kein Gewerbe", "Ja, weil Kapitalgesellschaften kraft Rechtsform stets gewerblich sind", "Nur wenn Gewinn über 24.500 €", "Nur bei mehr als 3 Wohnungen"], richtig: 1, erklaerung: "§ 2 Abs. 2 GewStG: Kapitalgesellschaften begründen stets und in vollem Umfang einen Gewerbebetrieb – unabhängig von ihrer Tätigkeit." },
    { frage: "Wie hoch ist die Steuermesszahl bei der Gewerbesteuer?", optionen: ["15%", "5%", "3,5%", "25%"], richtig: 2, erklaerung: "Die Steuermesszahl beträgt bundeseinheitlich 3,5% (§ 11 Abs. 2 GewStG)." },
    { frage: "Welche Aussage zum Freibetrag bei der GewSt ist richtig?", optionen: ["Alle Unternehmen haben einen FB von 24.500 €", "Kapitalgesellschaften haben keinen Freibetrag", "Der FB beträgt 50.000 €", "Der FB gilt nur für GmbHs"], richtig: 1, erklaerung: "Der Freibetrag von 24.500 € gilt nur für Einzelunternehmer und Personengesellschaften (§ 11 Abs. 1 Nr. 1 GewStG). KapGes haben 0 €." },
    { frage: "Was sind Hinzurechnungen bei der GewSt?", optionen: ["Steuern, die nachgezahlt werden müssen", "Beträge, die zum Gewinn hinzuaddiert werden, um Gewinnverzerrungen durch Finanzierungsform zu beseitigen", "Zusätzliche Steuern auf Luxusgüter", "Gewinn aus Beteiligungen"], richtig: 1, erklaerung: "Hinzurechnungen (§ 8 GewStG) gleichen den Vorteil der Fremdfinanzierung aus – z.B. werden Zinsen anteilig hinzugerechnet." },
    { frage: "Zu wieviel Prozent werden Zinsen für Bankdarlehen bei der GewSt hinzugerechnet (vor Freibetrag)?", optionen: ["25%", "50%", "100%", "20%"], richtig: 2, erklaerung: "Zinsen werden zunächst zu 100% erfasst. Davon wird der Freibetrag von 200.000 € abgezogen, dann × 25% = Hinzurechnungsbetrag (§ 8 Nr. 1a GewStG)." },
    { frage: "Warum gibt es bei der GewSt keinen Verlustrücktrag?", optionen: ["Weil GewSt keine Betriebsausgabe ist", "Weil es keine Verluste bei Gewerbebetrieben gibt", "Weil ein Rücktrag Gemeinden durch Erstattung bereits festgesetzter Steuern belasten würde", "Weil das GewStG dies nicht regelt"], richtig: 2, erklaerung: "Nur Verlustvortrag (§ 10a GewStG). Ein Rücktrag würde bereits beschlossene Gemeindebudgets gefährden. 1. Stufe: unbegrenzt bis 1 Mio. €; 2. Stufe: 60% des übersteigenden Betrags." },
    { frage: "Was regelt § 35 EStG?", optionen: ["Den GewSt-Hebesatz", "Die Anrechnung der GewSt auf die Einkommensteuer bei EU/Mitunternehmern", "Den Freibetrag bei der GewSt", "Die Verlustverrechnung"], richtig: 1, erklaerung: "§ 35 EStG ermöglicht EU und Mitunternehmern, die GewSt auf die ESt anzurechnen: 4-facher Steuermessbetrag, max. tatsächliche GewSt." },
    { frage: "Was gilt bei der Zerlegung (§§ 28 ff. GewStG)?", optionen: ["Aufteilung des Gewinns nach Umsatz", "Aufteilung des Steuermessbetrags nach dem Verhältnis der Arbeitslöhne bei mehreren Betriebsstätten", "Nur für Kapitalgesellschaften", "Aufteilung des Gewinns nach Eigenkapitalanteilen"], richtig: 1, erklaerung: "Bei mehreren Betriebsstätten in verschiedenen Gemeinden wird der Steuermessbetrag nach Arbeitslöhnen auf die Gemeinden aufgeteilt." }
  ]
};
