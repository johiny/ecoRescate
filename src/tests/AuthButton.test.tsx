import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import AuthButton from "@/components/AuthButton";
import * as nextAuth from "next-auth/react";
describe("AuthButton", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });
  describe("when render", () => {
    it("should call useSession", () => {
      const useSessionSpy = vi.spyOn(nextAuth, "useSession");
      useSessionSpy.mockReturnValue({ status: "unauthenticated" });
      render(<AuthButton />);
      expect(useSessionSpy).toHaveBeenCalled();
    });
  });
  describe("when render and user is not authenticated", () => {
    it("should render button with text Entrar", () => {
        const useSessionSpy = vi.spyOn(nextAuth, "useSession");
        useSessionSpy.mockReturnValue({ status: "unauthenticated" });
        render(<AuthButton />);
        expect(screen.getByText("Entrar")).toBeDefined()
    });
  });
  describe("when render and user is authenticated", () => {
    it("should render button with text Salir", () => {
        const useSessionSpy = vi.spyOn(nextAuth, "useSession");
        useSessionSpy.mockReturnValue({ status: "authenticated" });
        render(<AuthButton />);
        expect(screen.getByText("Salir")).toBeDefined()
    });
  });
});
