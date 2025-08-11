const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const serviceAccount = require(`./${process.env.GOOGLE_SHEET_KEY_PATH}`);

app.use(cors());
app.use(bodyParser.json());

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const sheetName = process.env.GOOGLE_SHEET_NAME;

app.post('/api/submit-form', async (req, res) => {
  const { name, email, phone, topic, message } = req.body;

  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${sheetName}!A1:F1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, phone, topic, message]],
      },
    });

    res.status(200).json({ success: true, result: 'Success', data: response.data });
  } catch (error) {
    console.error('Error saving to sheet:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
