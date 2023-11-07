function solution(name) {
  let answer = 0;
  let verticalMovement = name.length - 1;

  [...name].map((char, index) => {
    answer += Math.min(
      char.charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() + 1 - char.charCodeAt()
    );
    let nextIndex = index + 1;

    while (nextIndex < name.length && name[nextIndex] === "A") {
      nextIndex++;
    }

    verticalMovement = Math.min(
      verticalMovement,
      index * 2 + name.length - nextIndex,
      index + 2 * (name.length - nextIndex)
    );
  });

  return answer + verticalMovement;
}
