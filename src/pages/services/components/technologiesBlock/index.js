module.exports = async function technologiesBlock() {
  return /* html */ `
    <h2 class="big-title big-title-lh big-title-technologies">Technologies</h2>

        <div class="tech-swiper-wrapper">
          <div class="swiper-pagination-tech"></div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide tech-slide">
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/react.svg')}
                    ${await this.image('svg/react-alt.svg')}
                  </p>
                  <span>ReactJS</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/vue.svg')}
                    ${await this.image('svg/vue-alt.svg')}
                  </p>
                  <span>VueJS</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/eleventy.svg')}
                    ${await this.image('svg/eleventy-alt.svg')}
                  </p>
                  <span>Eleventy</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/gatsby.svg')}
                    ${await this.image('svg/gatsby-alt.svg')}
                  </p>
                  <span>GatsbyJS</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/next.svg')}
                    ${await this.image('svg/next-alt.svg')}
                  </p>
                  <span>NextJS</span>
                </div>
              </div>
              <div class="swiper-slide slide tech-slide">
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/node.svg')}
                    ${await this.image('svg/node-alt.svg')}
                  </p>
                  <span>NodeJS</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/php.svg')}
                    ${await this.image('svg/php-alt.svg')}
                  </p>
                  <span>Php</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/laravel.svg')}
                    ${await this.image('svg/laravel-alt.svg')}
                  </p>
                  <span>Laravel</span>
                </div>
              </div>
              <div class="swiper-slide slide tech-slide">
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/mysql.svg')}
                    ${await this.image('svg/mysql-alt.svg')}
                  </p>
                  <span>MySQL</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/postgre.svg')}
                    ${await this.image('svg/postgre-alt.svg')}
                  </p>
                  <span>PostgreSQL</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/mongo.svg')}
                    ${await this.image('svg/mongo-alt.svg')}
                  </p>
                  <span>MongoDB</span>
                </div>
                <div class="single-slide">
                  <p class="tech-logo">
                    ${await this.image('svg/dynamodb.svg')}
                    ${await this.image('svg/dynamodb-alt.svg')}
                  </p>
                  <span>DynamoDB</span>
                </div>
              </div>
              <div class="swiper-slide slide tech-slide">
              <div class="single-slide">
                <p class="tech-logo">
                  ${await this.image('svg/contentful.svg')}
                  ${await this.image('svg/contentful-alt.svg')}
                </p>
                <span>Contentful</span>
              </div>
              <div class="single-slide">
                <p class="tech-logo">
                  ${await this.image('svg/prismic.svg')}
                  ${await this.image('svg/prismic-alt.svg')}
                </p>
                <span>Prismic</span>
              </div>
              <div class="single-slide">
                <p class="tech-logo">
                  ${await this.image('svg/strapi.svg')}
                  ${await this.image('svg/strapi-alt.svg')}
                </p>
                <span>Strapi</span>
              </div>
              <div class="single-slide">
                <p class="tech-logo">
                  ${await this.image('svg/sanity.svg')}
                  ${await this.image('svg/sanity-alt.svg')}
                </p>
                <span>Sanity</span>
              </div>
              <div class="single-slide">
                <p class="tech-logo">
                  ${await this.image('svg/shopify.svg')}
                  ${await this.image('svg/shopify-alt.svg')}
                </p>
                <span>Shopify</span>
              </div>
              <div class="single-slide">
                <p class="tech-logo">
                  ${await this.image('svg/bigcommerce.svg')}
                  ${await this.image('svg/bigcommerce-alt.svg')}
                </p>
                <span>Bigcommerce</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
