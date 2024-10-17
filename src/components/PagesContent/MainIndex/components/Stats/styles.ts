import {css} from "@emotion/react";

export const FirstTextItem = css`
   @media screen and (max-width: 599px) {
      font-size: 40px;
      line-height: 106%;
      color: #1C1C1C;
      border-radius: 10px;
      background-color: #BDE8FA;
      text-align: center;
      padding: 15px;
      margin-bottom: 25px;
      width: 100%;
   }
   @media screen and (min-width: 600px) {
      font-size: 68px;
      color: #0C0056;
      margin-bottom: 12px;
   }
`;

export const TextItem = css`
   @media screen and (max-width: 599px) {
      font-size: 40px;
      line-height: 106%;
      color: #1C1C1C;
      text-align: center;
      margin-bottom: 25px;
   }
   @media screen and (min-width: 600px) {
      font-size: 68px;
      color: #0C0056;
      margin-bottom: 12px;
   }
`

export const List = css`
   display: grid;
   grid-template-columns: 1fr;
   padding: 50px 0;
   gap: 40px;

   @media screen and (min-width: 600px) {
      padding: 30px 0;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   }
`

export const Description = css`
   text-wrap: pretty;
   text-align: center;
   font-size: 22px;
   font-weight: 400;
   color: #20272C;
   @media screen and (max-width: 599px) {
      font-weight: 500;
      font-size: 16px;
      text-transform: uppercase;
      color: #0C0056;
      &:not(:last-child) {
         margin-bottom: 25px;
      }
   }
`
export const Item = css`
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const Link = css`
   display: flex;
   align-items: center;
   gap: 6px;
   font-size: 16px;
   line-height: 120%;
   color: #1C1C1C;
`
export const ArrowIconWrapper = css`
   display: inline-flex;
   animation: moveIcon 0.5s infinite alternate;

   @keyframes moveIcon {
      0% {
         transform: translateX(0);
      }
      100% {
         transform: translateX(5px);
      }
   }
`