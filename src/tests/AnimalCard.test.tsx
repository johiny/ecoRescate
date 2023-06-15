import { afterEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import AnimalCard from "@/components/AnimalCard";

const dummy_animal = {
  name: "dummy animal",
  category: "EN",
  population_trend: "Stable",
  description: "dummy description",
  img: "https://source.unsplash.com/random/?lion%20african",
};

describe("AnimalCard", () => {
  afterEach(() => {
    cleanup();
  });
  describe("when render", () => {
    it("should show the animal name", () => {
        render(<AnimalCard animal={dummy_animal} />);
        expect(screen.getByText(dummy_animal.name)).toBeDefined();
      });
  })
describe("when mini attribute is not passed", () => {
  it("should render with the correct classnames for big behaviour", () => {
    render(<AnimalCard animal={dummy_animal} />);
    const animalCard = screen.getByTestId("animalCard");
    expect(animalCard.className).toContain("w-80 h-96");
  });
});
describe("when mini attribute is passed", () => {
    it("should render with the correct classnames for little behaviour", () => {
      render(<AnimalCard animal={dummy_animal} mini={true}/>);
      const animalCard = screen.getByTestId("animalCard");
      expect(animalCard.className).toContain("w-[8vw] h-[20vh]");
    });
  });
});
