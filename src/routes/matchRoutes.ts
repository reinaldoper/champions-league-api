import { Router } from 'express';
import * as matchController from '../controllers/matchController';

const router = Router();

/**
 * @openapi
 * /matches:
 *   get:
 *     summary: Retorna todas as partidas
 *     tags:
 *       - Matches
 *     responses:
 *       200:
 *         description: Lista de partidas
 */
router.get('/', matchController.getMatches);
/**
 * @openapi
 * /matches/{id}:
 *   get:
 *     summary: Retorna uma partida pelo ID
 *     tags:
 *       - Matches
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da partida
 *         schema:
 *           type: integer
 */
router.get('/:id', matchController.getMatch);
/**
 * @openapi
 * /matches:
 *   post:
 *     summary: Cria uma nova partida
 *     tags:
 *       - Matches
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Match'
 *     responses:
 *       201:
 *         description: Partida criada com sucesso
 */
router.post('/', matchController.createMatch);
/**
 * @openapi
 * /matches/{id}:
 *   put:
 *     summary: Atualiza uma partida pelo ID
 *     tags:
 *       - Matches
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da partida
 *         schema:
 *           type: integer
 */
router.put('/:id', matchController.updateMatch);
/**
 * @openapi
 * /matches/{id}:
 *   delete:
 *     summary: Deleta uma partida pelo ID
 *     tags:
 *       - Matches
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da partida a ser deletada
 *         schema:
 *           type: integer
 */
router.delete('/:id', matchController.deleteMatch);
/**
 * @openapi
 * /matches/team/{teamId}:
 *   get:
 *     summary: Retorna partidas de um time específico
 *     tags:
 *       - Matches
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         description: ID do time
 *         schema:
 *           type: integer
 */
router.get('/team/:teamId', matchController.getMatchesByTeam);
/**
 * @openapi
 * /matches/country:
 *   get:
 *     summary: Retorna partidas de um país específico
 *     tags:
 *       - Matches
 *     parameters:
 *       - in: query
 *         name: country
 *         required: true
 *         description: Nome do país
 *         schema:
 *           type: string
 */
router.get('/country', matchController.getMatchesByCountry);

export default router;
