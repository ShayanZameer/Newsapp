import React, { Component } from "react";
import Item from "./Item";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";


import PropTypes from "prop-types";

export class News extends Component {
  defaultPropTypes = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];


   capitalize=(str)=> {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    
    if (str.length === 0) {
      return str;
    }
    
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults:0,
      
      
    };
    document.title= `${this.capitalize(this.props.category)}`;
  }

  async componentDidMount() {

    this.props.setProgress(10);



    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b2796e9ff6748919d69f0ec470e5171&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();

  

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    

    });
    this.props.setProgress(100);
  }



  fetchMoreData = async() => {

    this.setState({page: this.state.page+1,})

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=7b2796e9ff6748919d69f0ec470e5171&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parseData = await data.json();


    this.setState({
      articles: this.state.articles.concat( parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
      count: this.state.count+1

    });
  

  };


  render() {
    return (
      <>

        <h1 style={{marginTop:80, marginBottom:30}}  className="text-center ">`NewsApp-Top-{this.capitalize(this.props.category)}-Headlines`</h1>

        {this.state.loading === true ? <Loading /> : ""}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={ this.loading===true? <Loading/>:""}
        >

          <div className="container">

        <div className="row ">

          
          { this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4 p-4" key={index}>
                    <Item
                      title={
                        element.title !== null
                          ? element.title.slice(0, 45) + ". . . . . "
                          : element.title
                      }
                      
                      description={
                        element.description !== null
                          ? element.description.slice(0, 88) + ". . . . . "
                          : element.description
                      }

                      imageUrl={
                        element.urlToImage === null
                          ? (element.urlToImage =
                              "https://media.istockphoto.com/id/1440979913/photo/view-of-stacked-newspapers-on-blurred-background.jpg?s=1024x1024&w=is&k=20&c=Xh8KGeFsyeGPr01_0rFUWzglvf0OBeaF9R0RkbwVuPM=")
                          : element.urlToImage
                      }
                      newsUrl={element.url}

                      date={element.publishedAt.slice(0, 10)}
                      time={element.publishedAt.slice(11, 21)}

                      
                      author={
                        element.author === null ? "Unknown" : element.author
                      }
                      
                      source={element?.source?.name}
                    />

{/* this.setState({
      articles: this.state.articles.concat( parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
      count: this.state.count+1
    }); */}

                    
                  </div>
                );


              })

              
            }

        </div>

        </div>
        </InfiniteScroll>

        </>
      
    );
  }
}

export default News;
