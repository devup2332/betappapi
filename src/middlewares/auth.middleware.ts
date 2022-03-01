import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { environments } from "../environemts";
import DB from "../database";

const options: StrategyOptions = {
  secretOrKey: environments.JWT.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const JwtStrategy = new Strategy(options, async (payload, done) => {
  const { id } = payload;
  const res = (await DB.promisePool.query("SELECT * FROM users WHERE id=?", [id])) as any;
  const user = res[0][0];
  if (!user) {
    return done(false, false);
  }
  return done(false, user);
});

export default JwtStrategy;
