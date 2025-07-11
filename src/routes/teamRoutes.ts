import { Router } from 'express';
import * as teamController from '../controllers/teamController';

const router = Router();

/**
 * @openapi
 * /teams:
 *   get:
 *     summary: Retorna todos os times
 *     tags:
 *       - Teams
 *     responses:
 *       200:
 *         description: Lista de times
 */
router.get('/', teamController.getTeams);
/**
 * @openapi
 * /teams/{id}:
 *   get:
 *     summary: Retorna um time pelo ID
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do time
 *         schema:
 *           type: integer
 */
router.get('/:id', teamController.getTeam);
/**
 * @openapi
 * /teams:
 *   post:
 *     summary: Cria um novo time
 *     tags:
 *       - Teams
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       201:
 *         description: Time criado com sucesso
 */
router.post('/', teamController.createTeam);
/**
 * @openapi
 * /teams/{id}:
 *   put:
 *     summary: Atualiza um time pelo ID
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do time a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 */
router.put('/:id', teamController.updateTeam);
/**
 * @openapi
 * /teams/{id}:
 *   delete:
 *     summary: Deleta um time pelo ID
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do time a ser deletado
 *         schema:
 *           type: integer
 */
router.delete('/:id', teamController.deleteTeam);
/**
 * @openapi
 * /teams/country:
 *   get:
 *     summary: Retorna times por país
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: query
 *         name: country
 *         required: true
 *         description: Nome do país para filtrar os times
 *         schema:
 *           type: string
 */
router.get('/country', teamController.getTeamsByCountry);

export default router;
