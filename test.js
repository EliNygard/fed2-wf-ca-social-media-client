import "dotenv/config";

function test(expectedSecret) {
  const secretMatches = process.env.TEST_USER_PASSWORD == expectedSecret;
  console.log(`The meaning of life is ${process.env.TEST_USER_PASSWORD}`);
  console.log(`The secret does${secretMatches ? "" : " not"} match!`);
  return secretMatches;
}

test("passwordtestUser1234");
