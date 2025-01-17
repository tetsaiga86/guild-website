import React from 'react'
import { Carousel } from 'react-bootstrap'
import $ from 'jquery'

class HomeCarousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = { list: [] };
  }

  componentWillMount () {
    $.get('/news', (response) => {
      const $page = $(response);

      const articleTiles = $page.find('.ArticleTile');
      var articlesArr = [];
      for (var i = 0; i < articleTiles.length; i++) {
        articlesArr.push(articleTiles[i]);
      }
      const articles = articlesArr.map(articleTile => {
        const $tile = $(articleTile);
        const imageUrl = $tile.find('.Tile-bg').attr('style').match(/"(.*)"/)[1];
        const title = $tile.find('.ArticleTile-title').text();
        const subtitle = $tile.find('.ArticleTile-subtitle').text();
        const href = "https://worldofwarcraft.com" + $tile.find('.ArticleTile-link').attr('href');
        return {
          imageUrl,
          title,
          subtitle,
          href
        };
      });


      this.setState({ list: articles });

    });
  }

  renderArticle(article) {
    return (
      <Carousel.Item key={article.href}>
        <a href={article.href} target="_blank">
          <img className="carousel-img" width={615} height={300} alt={article.subtitle} src={article.imageUrl} />
          <Carousel.Caption>
            <h3>{article.title}</h3>
            <p>{article.subtitle}</p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    );
  }

  render () {
    const prevIcon = <img className="glyphicon-chevron-left" src="/images/featured-prev.png" />;
    const nextIcon = <img className="glyphicon-chevron-right" src="/images/featured-next.png" />;

    return (
      <Carousel prevIcon={prevIcon} nextIcon={nextIcon}>
        { this.state.list.map(this.renderArticle) }
      </Carousel>
    )
  }
}

export default HomeCarousel
