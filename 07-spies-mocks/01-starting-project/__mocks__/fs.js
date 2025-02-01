import { vi } from "vitest";
export const promises = {
  writeFile: vi.fn(() => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
