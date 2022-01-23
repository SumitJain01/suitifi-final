import React, { Component } from 'react';
import makeCleverTap from 'lib/makeClevertap';
import Unpad from 'shared/components/Unpad';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Select from 'react-select';
import Link from 'next/link';
import renderProductListData from 'utils/helpers/products/renderProductListData';
import ImageCarousel from 'shared/components/ImageCarousel';
import Gap from 'shared/components/Gap';
import Button from 'shared/components/Button';

const clevertap = makeCleverTap();

const categories = [
  {
    name: 'All',
    id: -1
  },
  {
    name: 'Acne Marks',
    id: 15
  },
  {
    name: 'Acne Scars',
    id: 20
  },
  {
    name: 'Acne/Pimple',
    id: 21
  },
  {
    name: 'Pigmentation',
    id: 6
  },
  {
    name: 'Open Pores',
    id: 16
  },
  {
    name: 'Hair Care',
    id: 26
  },
  {
    name: 'Skin Radiance',
    id: 35
  },
  {
    name: 'Dry & Dull Skin',
    id: 7
  }
]

class ShopPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isMobile: true,
    activeFilter: undefined,
  }

  componentDidMount() {
    clevertap.event.push("shopPageVisited", {
      platform: "mewebsite",
      name: "Shop Page",
      Date: new Date(),
    });
  }

  componentWillUnmount() {
    this.props.resetFilterBy();
    this.props.resetSortBy();
  }

  sortHandler = (data) => {
    if (data == null) {
      this.props.resetSortBy();
    }
    else {
      this.props.setSortBy(data.value);
    }
  }

  activeHandler = (data) => {
    this.setState({ activeFilter: data })
    if (data == -1) {
      this.props.resetFilterBy();
    }
    else {
      this.props.setFilterBy(data);
    }
  }

  render() {
    const { allProducts, banners, className } = this.props;
    return (
      <div className={className}>
        <Unpad>
          <Link prefetch={false} href="/products">
            <div>
              {banners && banners.includes && <ImageCarousel plpBanners={banners} />}
            </div>
          </Link>
        </Unpad>
        <section>
          <div className="breadCrumbs">
            <Link prefetch={false} href="/">Home</Link>
            <span className="divider">/</span>
            <span className="current">Shop</span>
          </div>
          {
            <Grid fluid>
              <Gap h="1rem"></Gap>
              <div className="filterDiv">
                <Col xs={8} sm={8} md={8} className="filters" style={{ alignItems: "center"}}>
                  {categories.map((item, index) => {
                    return (
                      <StyledButton key={index} onClick={() => this.activeHandler(item.id)} active={this.state.activeFilter == item.id}>
                        {item.name}
                      </StyledButton >
                    )
                  })}
                </Col>
                <Col xs={4} sm={4} md={4} className="sort"> 
                  <Select
                    options={[
                      { value: { name: 'avg_rating_percent', direction: 0 }, label: 'Rating' },
                      { value: { name: 'price', direction: 0 }, label: 'Price - High to Low' },
                      { value: { name: 'price', direction: 1 }, label: 'Price - Low to High' }
                    ]}
                    isClearable={true}
                    isSearchable={false}
                    onChange={this.sortHandler}
                    on
                    placeholder={"Sort By"}
                  />
                </Col>
              </div>
              <Gap h="1rem"></Gap>
            </Grid>
          }
          {
            allProducts && renderProductListData({ products: allProducts })
          }
        </section>
      </div>
    );
  }
}

const StyledButton = styled(Button)`
  display: inline;
  font-size: 0.8rem;
  padding: 0.4rem;
  margin: 0.2rem 0.4rem;
  color: #333333;
  border: 1px solid #ccccdd;
  border-radius: 2px;
  background-color: ${props => props.active ? "#dbe8e8b8" : "white"} ;
  &:hover {
    background-color: #dbe8e8;
    color: #333333;
  }
`;

export default styled(ShopPage)`
  .breadCrumbs {
    margin-top: 10px;
    font-size: 0.9rem;
    margin-left:0.5rem;
    .divider {
      margin: 0 5px;
    }
    .current {
      color: #000;
    }
  }

  .filterDiv{
    @media only screen and (min-width: 768px){
      display:flex;
      flex-direction:row;
    }
  }

  .filters {
    @media only screen and (max-width: 768px){
      max-width:100%;
    }
  }
  .sort {
    @media only screen and (max-width: 768px){
    max-width:100%;
    padding-left:2.8px;
    padding-right:2.8px;
    margin-top:10px;
    }
  }
`;
