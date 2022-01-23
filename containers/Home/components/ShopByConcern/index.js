import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'shared/components/Image';
import LazyLoad from 'react-lazyload';
import { shopByConcernCategories } from 'utils/constants';
import { GradientBg, RightArrowIcon } from 'shared/components/SVGIcons'


function ShopByConcern({ isMobile}) {
	const dimension = isMobile ? 172 : 244;
	const cropImage = `?fit=scale&w=${dimension}&h=${dimension}`;
	return (
		<Categories>
			<div className="row">
				<span className="gradient-bg">
					<GradientBg />
				</span>
				{
					shopByConcernCategories.map(category => (
						<Link prefetch={false} href={category.path} key={category.path}>
							<div className="col">
								<div className="placeholder">
									<LazyLoad>
										<img className="image circles" src={`${category.image}${cropImage}`} />
									</LazyLoad>
								</div>
								<span className="title">
									{category.title}
									<i>
										<RightArrowIcon width="15" height="16" stroke="#279989"/>
									</i>
								</span>
							</div>    
						</Link>
					))
				}
			</div>
		</Categories>
	)
}

const Categories = styled.div`
	position: relative;
    .circles{
		border: 1px solid ${props => props.theme.general.primaryColor};
		padding: 2px;
		border-radius: 50%;
	}
	.section-heading {
		display: none;
	}
		
	.gradient-bg {
		position: absolute;
		opacity: 60%;
		z-index: -1;
		filter: blur(8px);
		-webkit-filter: blur(8px);
	}

	.placeholder {
		width: 20vw;
		height: 20vw;
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url('/static/mamaearth/placeholder_circle.svg');
	}

	.col {
		cursor: pointer;
		margin: 1rem 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: "Roboto";
		font-size: 0.9rem;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.image {
		width: 20vw;
		height: 20vw;
	}

	.title {
		margin-top: 4px;
		font-size: 0.85rem;

		i {
			display: none;
		}
	}
	
	@media only screen and (min-width: 768px) {
		margin: 1rem 0;

		.section-heading {
			display: block;
			font-family: "Roboto";
			font-size: 1.6rem;
			color: #000000;
			font-weight: 500;
			margin: 0;
		}

		.image {
			width: 10vw;
			height: 10vw;
			transition: all 0.2s ease-in-out;
		}

		.placeholder {
			width: 10vw;
			height: auto;
			transition: all 0.2s ease-in-out;
		}

		.title {
			margin-top: 0.5rem;
			transition: all 0.2s ease-in-out;

			i {
				transition: all 0.2s ease-in-out;
				margin-left: 5px;
			}
		}

		.col {
			border: 1px solid #00000026;
			border-radius: 10px;
			padding: 1rem 1.6rem 0.4rem;
			box-shadow: 0 0 14px #0000001A;
			margin: 0 0.8rem;
			transition: all 0.2s ease-in-out;

			&:hover {
				border: 1px solid ${props => props.theme.general.primaryColor};

				.image {
					transform: scale(0.97);
				}

				.placeholder {
					transform: scale(0.97);
				}

				.title {
					i {
						display: inline-block;
					}
				}
			}
		}

		.row {
			margin: 1.5rem 0;
		}
	}
`;

export default ShopByConcern;
