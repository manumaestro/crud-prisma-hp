import { Router } from 'express';
import * as BruxoController from './../controller/bruxoController.js';

const router = Router();

router.get('/', BruxoController.getAllBruxos);
router.get('/:id', BruxoController.listarUm);
router.post('/', BruxoController.criar);
router.put('/:id', BruxoController.atualizar);
router.delete('/:id', BruxoController.apagar);

export default router;
