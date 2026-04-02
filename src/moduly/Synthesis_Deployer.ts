/** * Synthesis_Deployer - Motor pro automatické nahrávání kódu.
 * @module Synthesis_Deployer
 */
export const Deployer = {
  pushToGithub: async (path: string, content: string) => {
    // Použití GITHUB_ACCESS_TOKEN z prostředí
    const owner = process.env.GITHUB_REPO_OWNER || 'jirisar6-netizen';
    const repo = process.env.GITHUB_REPO_NAME || 'chytry-jidelnicek';
    const token = process.env.GITHUB_ACCESS_TOKEN;
    
    if (!token) {
      console.error("[DEPLOYER] GITHUB_ACCESS_TOKEN is missing");
      return false;
    }
    
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    
    try {
      // First, we need to get the SHA of the file if it exists
      const getRes = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      
      let sha: string | undefined;
      if (getRes.ok) {
        const data = await getRes.json();
        sha = data.sha;
      }

      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `[AISS-OS] T: ${Date.now()} | SSM Update`,
          content: btoa(unescape(encodeURIComponent(content))), // Proper base64 for UTF-8
          sha: sha
        })
      });

      return res.ok;
    } catch (error) {
      console.error("Deployer Error:", error);
      return false;
    }
  }
};
