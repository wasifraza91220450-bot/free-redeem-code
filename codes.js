// Example data — tum ise manually update kar sakte ho ya JSON fetch kara sakte ho.
const codes = [
  { code: "FFXW8Y6ZP2Q3", status: "Used" },
  { code: "BGMI2K25SUPER", status: "Used" },
  { code: "PUBG777REWARD", status: "Used" },
];

const container = document.getElementById("codes");
codes.forEach(c => {
  const div = document.createElement("div");
  div.className = "code-box";
  div.innerHTML = `<div class="code">${c.code}</div><small>Status: ${c.status}</small>`;
  container.appendChild(div);
});