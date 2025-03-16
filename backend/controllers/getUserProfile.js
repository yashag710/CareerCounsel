exports.getUserProfile = async function (req, res) {
    try {
        // Since `protect` middleware already attaches user, we can send it directly
        res.status(200).json({
            success: true,
            user: req.user,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

