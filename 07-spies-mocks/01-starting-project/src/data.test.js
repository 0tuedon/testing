import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData(logFn)",()=>{
    it("Should excute logFn if provided",()=>{
        const logger = vi.fn();
        generateReportData(logger);

        expect(logger).toBeCalled()
    })
})