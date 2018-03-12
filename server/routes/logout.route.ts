import { Request, Response } from 'express';
import {sessionStore} from "../core/session-store";

export function logout(req: Request, res: Response) {

  const sessionId = req.cookies['SESSIONID'];

  sessionStore.destroySession(sessionId);

  res.clearCookie("SESSIONID");

  res.sendStatus(200);
}
