module.exports = async function menu() {
  return /* html */ `
    <aside class="menu">
      <a class="menu-link projects" data-icon="projects" href="/projects">
        <div class="background-image"></div>
        <span></span>
        <span>projects</span>
      </a>   
      <a class="menu-link shrink services" data-icon="services" href="/services">
        <div class="background-image"></div>
        <span></span>
        <span>services</span>
      </a>   
      <a class="menu-link shrink blog" data-icon="blog" href="/blog">
        <div class="background-image"></div>
        <span></span>
        <span>blog</span>
      </a>   
      <a class="menu-link semi-shrink contacts" data-icon="contacts" href="/contacts">
        <div class="background-image"></div>
        <span></span>
        <span>contacts</span>
      </a>   
    </aside>
  `;
};
