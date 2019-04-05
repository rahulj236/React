import styled from 'styled-components';

// export const Search = styled.span`
//     background: url('https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png') no-repeat -1509px -1px;
// 	width: 40px;
// 	height: 40px;
// 	display:block;
// `;
// export const Section = styled.section`
// 	display: flex;
// 	flex-basis: 90%;
		
// `;

export const Section = styled.section`
	display:flex;
	flex-basis:60%;
	justify-content:center;
	align-items:center;

	a{

		height: 42px;
		/* width: 40px; */
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		text-align: center;
		padding: 6px 0px 0px 6px;
		background: #f3f3f3;
		border: 1px solid #F5F5F6;
		border-right: none;
		-webkit-border-radius: 4px 0 0 4px;
		-moz-border-radius: 4px 0 0 4px;
		border-radius: 4px 0 0 4px;
	}
	span{
		transform: scale(0.7);
		background: url('https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png') no-repeat -754px 4px;
		background-size: 1404px 105px;
		width: 26px;
		height: 24px;
		background-color: #f3f3f3;
		/* border-top-left-radius: 4px; */
		/* border-bottom-left-radius: 4px; */
		/* border: none; */
		/* outline: none; */
		display: block;
		box-sizing: content-box;
		text-align: center;
	}
	
	input{
		background-color: #f3f3f3;
		width: 100%;
		line-height: 30px;
		box-sizing: border-box;
		border:none;
		outline:none;
		padding: 6px 7px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		font-size:12px;
	}
`;