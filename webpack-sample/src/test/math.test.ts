import * as math from "../math";
import { assert } from "chai";

suite("Dummy Suite", () => {

    test("Dummy Test", () => {
        let res = math.add(1, 2);

        assert.equal(res, 3);
    });
});