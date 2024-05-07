const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const brokers = [
    {
        name: "Express VPN",
        userRating: 9.6,
        overallRating: 9.6,
        localDownload: 97,
        simultaneousConnections: 8,
        countriesWithServers: 106,
        servers: 3000,
        price: 6.67,
        features: ["7 Days free trial & 30 days money-back guarantee"]
  }
   
    
];


app.get('/brokers', (req, res) => {
    res.json(brokers);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// URL for retrieving the list of brokers
// http://localhost:3000/brokers