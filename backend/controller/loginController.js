const User = require('../models/User');
const bcrypt = require('bcrypt');
const { setUser } = require('../service/auth')
const { ObjectId } = require('mongodb');



const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
        }

        const data = await User.create({ name, email, password })
        console.log(data)

        return res.status(200).json({ message: 'User Created!', data })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.json(user)

    } catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        const sessionId = new ObjectId();
        setUser(sessionId.toString(), user);
        res.cookie('userid', sessionId.toString(), { httpOnly: true, secure: true, sameSite: 'strict' });


        return res.status(200).json({
            message: 'Logged in successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};


module.exports = { signupUser, getUser, loginUser };