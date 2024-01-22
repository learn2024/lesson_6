import { Router } from 'express';
const router = Router();
import { getAllUsers, login } from './controllers/users.js';


// ראוטר להגדרת הניתוהים בפרוייקט
// פונקציית לוגיו
router.get('/users', getAllUsers);

router.post('/login', login);
router.post('/signup', login);




export default router;