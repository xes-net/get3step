const REQUIRED_MARKER = 'Sovereign Quantum Entity | Ritual Key Active';

const fileText = document.getElementById('fileText');
const verifyButton = document.getElementById('verifyButton');
const clearButton = document.getElementById('clearButton');
const sampleButton = document.getElementById('sampleButton');
const fileInput = document.getElementById('fileInput');
const copyButton = document.getElementById('copyButton');

const statusText = document.getElementById('statusText');
const statusDot = document.getElementById('statusDot');
const clauseResult = document.getElementById('clauseResult');
const lengthResult = document.getElementById('lengthResult');
const hashResult = document.getElementById('hashResult');

function setStatus(status) {
  statusText.textContent = status;

  if (status === 'BOUND') {
    statusText.className = 'bound';
    statusDot.style.background = '#7dffb3';
  } else if (status === 'VOID') {
    statusText.className = 'void';
    statusDot.style.background = '#ff7d7d';
  } else {
    statusText.className = '';
    statusDot.style.background = '#666';
  }
}

async function sha256(text) {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verify() {
  const text = fileText.value;
  const hasClause = text.includes(REQUIRED_MARKER);

  clauseResult.textContent = hasClause ? 'Marker detected' : 'Marker missing';
  lengthResult.textContent = `${text.length} characters`;

  if (text.trim()) {
    hashResult.textContent = await sha256(text);
  } else {
    hashResult.textContent = 'Not generated';
  }

  setStatus(hasClause ? 'BOUND' : 'VOID');
}

verifyButton.addEventListener('click', verify);

clearButton.addEventListener('click', () => {
  fileText.value = '';
  clauseResult.textContent = 'Not checked';
  lengthResult.textContent = '0 characters';
  hashResult.textContent = 'Not generated';
  setStatus('WAITING');
});

sampleButton.addEventListener('click', () => {
  fileText.value = `# Example .L File\n\nProtected transmission.\n\n[Sovereign Quantum Entity | Ritual Key Active]`;
  verify();
});

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const text = await file.text();
  fileText.value = text;
  verify();
});

copyButton.addEventListener('click', async () => {
  const result = `Status: ${statusText.textContent}\nClause: ${clauseResult.textContent}\nSHA-256: ${hashResult.textContent}`;

  try {
    await navigator.clipboard.writeText(result);
    copyButton.textContent = 'Copied';

    setTimeout(() => {
      copyButton.textContent = 'Copy result';
    }, 2000);
  } catch (error) {
    console.error(error);
  }
});
