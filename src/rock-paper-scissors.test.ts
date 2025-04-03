import { play } from "./rock-paper-scissors";
describe("test the rock, paper, scissors game", () => {
  test("rock vs rock", () => {
    expect(play("rock","rock")).toBe(0);
  });
  test("rock vs paper", () => {
    expect(play("rock","paper")).toBe(2);
  });
  test("rock vs scissors", () => {
    expect(play("rock","scissors")).toBe(1);
  });
  test("paper vs paper", () => {
    expect(play("paper","paper")).toBe(0);
  });
  test("paper vs rock", () => {
    expect(play("paper","rock")).toBe(1);
  });
  test("paper vs scissors", () => {
    expect(play("paper","scissors")).toBe(2);
  });
  test("scissors vs scissors", () => {
    expect(play("scissors","scissors")).toBe(0);
  });
  test("scissors vs paper", () => {
    expect(play("scissors", "paper")).toBe(1);
  });
  test("scissors vs rock", () => {
    expect(play("scissors","rock")).toBe(2);
  });
  test("anything else is throwing an exception ERROR", () => {
    expect(() =>play("rocking","glue")).toThrow("ERROR");
  });
});

describe("test rock paper scissors", () => {
  test.each([
    ["rock", "rock", 0],
    ["rock", "paper", 2],
    ["rock", "scissors", 1],
    ["paper", "rock", 1],
    ["paper", "paper", 0],
    ["paper", "scissors", 2],
    ["scissors", "rock", 2],
    ["scissors", "paper", 1],
    ["scissors", "scissors", 0],
  ])("play(%s,%s)", (player1, player2, expected) => {
    expect(play(player1, player2)).toBe(expected);
  });

  test("throws an error for invalid moves", () => {
    expect(() => play("rocking","glue")).toThrow("ERROR");
  });
});