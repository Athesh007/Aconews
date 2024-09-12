const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const express = require('express');

const app = express();
dotenv.config();
app.use(cors());

// Middleware
app.use(express.json());

const port = process.env.PORT || 3000;

// Route - /api/news
app.get('/api/news', async (req, res) => {
    try {
        const { q = '', country = '', category = '', page = '1', max = 10 } = req.query;
        let url;
        if (q.length!=0 && country && category) {
            url = new URL('https://gnews.io/api/v4/search');
            url.searchParams.append('q', q);
            url.searchParams.append('lang', 'en');
            url.searchParams.append('country', country);
            url.searchParams.append('category', category);
            url.searchParams.append('max', max);
            url.searchParams.append('page', parseInt(page));
        } else {
            url = new URL('https://gnews.io/api/v4/top-headlines');
            url.searchParams.append('lang', 'en');
            url.searchParams.append('category', 'general');
            url.searchParams.append('max', max);
            url.searchParams.append('page', 1);
        }

        url.searchParams.append('apikey', process.env.GNEWS_API_KEY);

        const response = await axios.get(url.toString());
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching news' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});