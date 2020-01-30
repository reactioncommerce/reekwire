import { createRequire } from "module";
import stack from "callsite";

export default function(...args) {
	const caller = stack()[1];
	const callerFileName = caller.getFileName();
	return createRequire(callerFileName)(...args);
}
