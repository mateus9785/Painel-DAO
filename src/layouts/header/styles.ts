import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .div-right{
        display: flex;
        align-items: center;
        gap: 1rem;
        .div-translate{
            &:hover{
                button{
                    display: block;
                }
            }
        }
    }

    .div-buttons{
        padding: 0.7rem;
        align-items: center;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;

        button{
            display: none;
            color: ${(props) => props.theme['yellow-500']};
            border: none;
            background-color: ${(props) => props.theme['black-500']};
            cursor: pointer;
            transition: filter 0.2s;
            &:hover{
                filter: brightness(0.8)
            }
        }
    }

    .select-language{
        text-decoration: underline;
    }

    img{
        width: 3.125rem;
        height: 3.125rem;
    }

    .icon-header{
        width: 2.5rem;
        height: 2.5rem;
    }

    span{
      text-align: center;
      font-size: 1rem;
      color: ${(props) => props.theme['yellow-500']};
    }
`;