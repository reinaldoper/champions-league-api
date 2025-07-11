"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchController = __importStar(require("../controllers/matchController"));
const router = (0, express_1.Router)();
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
exports.default = router;
