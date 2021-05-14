module.exports = async function menu() {
  return /* html */ `
    <aside class="menu">
      <a data-icon="projects" href="/projects">
        <span></span>
        <span>projects</span>
      </a>   
      <a data-icon="services" href="/services">
        <span></span>
        <span>services</span>
      </a>   
      <a data-icon="blog" href="/blog">
        <span></span>
        <span>blog</span>
      </a>   
      <a data-icon="contacts" href="/contacts">
        <span></span>
        <span>contacts</span>
      </a>   
    </aside>
  `;
};
