import styled from "styled-components";

export const ModalContainer = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;

   .modal-content{
        width: 30%;
        height: 70%;
        background-color: ${(props) => props.theme['black-100']};
        border-radius: 3rem;

        @media ((max-width: 1050px)) {
          width: 50%;
        }

        @media ((max-width: 600px)) {
          width: 70%;
        }

        @media ((max-width: 400px)) {
          width: 90%;
        }
   }

   .modal-header{
        padding: 10px;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
   }

   .modal-title{
        margin: 0;
    }

   .modal-body{
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

   .button-close {
        background-color: ${(props) => props.theme['black-100']};;
        border: none;
    }
`
