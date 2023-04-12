// const prompt = "افضل 10 مواقع لحجز الكشف الطبي?";
// const api_key = "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";
// const url = "https://api.openai.com/v1/engines/davinci-codex/completions";

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${api_key}`,
//   },
//   body: JSON.stringify({
//     prompt: prompt,
//     max_tokens: 150,
//     temperature: 0.5,
//     n: 1,
//     stop: ".",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.choices[0].text);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
