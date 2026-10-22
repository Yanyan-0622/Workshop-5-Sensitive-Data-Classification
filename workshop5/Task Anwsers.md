# Workshop 5: Sensitive Data Classification

## Task 1

**1. What is the appropriate classification for the datastore?**
**Highly Confidential / Special Category Data**. It contains direct identifiers (name, CHI number), health data (medication), and sensitive data (ethnicity). 

**2. What sort of access should be granted to PiC employees?**
Follow the **Principle of Least Privilege**:
- **Operations team:** Access only to necessary fields (name, address, medication) for delivery.
- **Analysts:** No direct access to raw data; only access the sanitized `medicationbyvolume.json`.
- **Everyone else:** No access.

**3. How long should PiC store a customer's information in its datastore?**
Short-term. Delete operational data immediately after delivery confirmation, and purge identifiable customer data once the legal retention period expires. Only keep anonymized/aggregated data for longer analysis.

---

## Task 2

**1. Generate `medicationbyvolume.json`**
I wrote a Node.js script to extract only `medication`, `volume`, and `county`.

**Code (`generate.js`):**
```javascript
const fs = require('fs');
const customers = JSON.parse(fs.readFileSync('customers.json', 'utf8'));

const medicationByVolume = customers.map(c => ({
  medication: c.medication,
  volume: c.volume,
  county: c.county
}));

fs.writeFileSync('medicationbyvolume.json', JSON.stringify(medicationByVolume, null, 2));