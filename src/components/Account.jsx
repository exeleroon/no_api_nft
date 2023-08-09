/** @format */

// import { useMoralisDapp } from 'providers/MoralisDappProvider/MoralisDappProvider'
// import { useMoralis } from 'react-moralis'
// import { getEllipsisTxt } from 'helpers/formatters'
// import Blockie from './Blockie'
// import { Button, Card, Modal } from 'antd'
// import { useState } from 'react'
// import Address from './Address/Address'
// import { SelectOutlined } from '@ant-design/icons'
// import { getExplorer } from 'helpers/networks'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import HeaderAccountInfo from './HeaderAccountInfo/HeaderAccountInfo'
import Link from 'next/link'
import AccordionMenu from './AccordionMenu/AccordionMenu'
import { toggleMobMenu } from 'redux/search-reducer'

//TODO: create style component file for Account component
const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: 767px) {
    margin: 20px 0;
  }
`

const HeaderButton = styled.a`
  height: 42px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 12px;
  background-color: rgb(244, 244, 244);
  cursor: pointer;
  transition: 0.3s;

  ${({ contrast }) =>
          contrast &&
          `background-color: rgb(32,129,226);
        color: #fff;
        
        :hover {
            background-color: rgb(24,104,183);
            color: #fff;
        }
        `}
`

function Account({ mobMenu }) {
    // const { authenticate, isAuthenticated, logout } = useMoralis()
    // const { walletAddress, chainId } = useMoralisDapp()
    // const [isModalVisible, setIsModalVisible] = useState(false)
    const isAuth = useSelector(state => state.auth.isAuth)
    const userDataLoading = useSelector(state => state.auth.userDataLoading)
    const isMobMenuOpen = useSelector(state => state.search.isMobMenuOpen)
    const dispatch = useDispatch()

    const closeMobMenu = () => {
        if (isMobMenuOpen === true) {
            dispatch(toggleMobMenu(false))
        }
    }

    // const isAuth = false
    // if ((isAuth || userDataLoading) && mobMenu === true) {
    //     return <AccordionMenu userDataLoading={userDataLoading} />
    // }
    // if (isAuth || userDataLoading) {
    //     return <HeaderAccountInfo userDataLoading={userDataLoading} />
    // }

    return (
        <HeaderButtonsContainer>
            <div onClick={closeMobMenu}>
                <Link href='/login' passHref>
                    <HeaderButton>Войти</HeaderButton>
                </Link>
            </div>
            <div onClick={closeMobMenu}>
                <Link href='/signup' passHref>
                    <HeaderButton contrast>Регистрация</HeaderButton>
                </Link>
            </div>
            <div>
                <HeaderAccountInfo userDataLoading={userDataLoading} />
            </div>
        </HeaderButtonsContainer>
    )

    // return (
    //     <>
    //         <div  onClick={() => setIsModalVisible(true)}>
    //             <p style={{ marginRight: '5px' }}>{getEllipsisTxt(walletAddress, 6)}</p>
    //             <Blockie currentWallet scale={3} />
    //         </div>
    //         <Modal
    //             visible={isModalVisible}
    //             footer={null}
    //             onCancel={() => setIsModalVisible(false)}
    //             bodyStyle={{
    //                 padding: '15px',
    //                 fontSize: '17px',
    //                 fontWeight: '500'
    //             }}
    //             style={{ fontSize: '16px', fontWeight: '500' }}
    //             width='400px'
    //         >
    //             Account
    //             <Card
    //                 style={{
    //                     marginTop: '10px',
    //                     borderRadius: '1rem'
    //                 }}
    //                 bodyStyle={{ padding: '15px' }}
    //             >
    //                 <Address avatar='left' size={6} copyable style={{ fontSize: '20px' }} />
    //                 <div style={{ marginTop: '10px', padding: '0 10px' }}>
    //                     <a href={`${getExplorer(chainId)}/address/${walletAddress}`} target='_blank' rel='noreferrer'>
    //                         <SelectOutlined style={{ marginRight: '5px' }} />
    //                         View on Explorer
    //                     </a>
    //                 </div>
    //             </Card>
    //             <Button
    //                 size='large'
    //                 type='primary'
    //                 style={{
    //                     width: '100%',
    //                     marginTop: '10px',
    //                     borderRadius: '0.5rem',
    //                     fontSize: '16px',
    //                     fontWeight: '500'
    //                 }}
    //                 onClick={() => {
    //                     logout()
    //                     setIsModalVisible(false)
    //                 }}
    //             >
    //                 Disconnect Wallet
    //             </Button>
    //         </Modal>
    //     </>
    // )
}

export default Account
