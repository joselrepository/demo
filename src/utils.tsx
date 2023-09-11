export function generateRandomUid() {
  // Generate a random 5-character string
  const randomString = Math.random().toString(36).substring(2, 7);

  // Get the current timestamp in milliseconds
  const timestamp = Date.now();

  // Combine the timestamp and random string to create the UID
  const uid = `${timestamp}${randomString}`;

  return uid;
}
