/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { Box } from '@mui/material';
import React from 'react';
import useMobile from '../hooks/useMobile';

import _ from "lodash"
import { Cbox } from '../Components/CustomizeComponents';

const RoadMap: React.FC = () => {
    const { isMobile } = useMobile()

    const renderMobile = () => {
        return <Box padding="25px" display="flex" flexDirection="column">
            <Cbox borderRadius="8px" style={{ background: '#1D2328' }} p="9.23vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Cbox fontSize="36px" mb="10px" textAlign="center">Ariva Metaverse Roadmap</Cbox>
                <Cbox fontSize="14px" mb="60px" textAlign="center" maxWidth="68.8vw">This is our road map where you can see what was done far now and what will come in future in Ariva Wonderland.</Cbox>
                <Cbox fontSize="18px" bold >Q1, 2022</Cbox>
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">The recruitment of our great and talented team for Ariva Wonderland will revolutionize the tourism industry.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Determining the visual style of Ariva Wonderland and its 3D models.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">The emergence of 3D models of the determined style.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Creating environment design, space, animations and mechanics. </Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Presenting the realized works to the community with a promotional video.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Designing the Main Crater and the lands for sale.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Crafting, and creating unique craters and areas to be put up for sale.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Planning the Main Crater with the professional town planning team.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">The 3D design of the Main Crater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Creating social areas such as movie theaters, theater halls, parks & city squares.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Ariva Wonderland's sense of time is going to be different.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Designing promotional areas in 3D.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Watch videos & movies in the movie theater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Creating multiple 3D characters with unique technical characteristics.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fontSize="14px">Creating 3D spacecraft with multiple variations.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Developing the multiplayer feature so that hundreds of thousands of players can spend time in Ariva Wonderland at the same time.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Establishing a voice and text chat, assigning unique identities to lands, and preparing for Alpha Version</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Improving the IK system </Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Performing various tests on characters and other created objects. Based on the results of these tests, the muscle system studies are carried out.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Inclusion of Mocap library.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Performing mechanism and animation quality tests.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Coding software for character customization.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Designing the user interface (UI) for character selection.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Designing an interface so that users can customize their own lands.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">The 3D design of the “concert area” is to be located in the Main Crater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Alpha Test Release</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>

                    <Box position="absolute" border="3px solid rgba(203, 250, 52, 0.26)" top="100%" left="2.76vw" height="calc(50px + 18.46vw + 18px)"></Box>
                </Box>
            </Cbox>
            <Cbox borderRadius="8px" mt="-10px" style={{ background: '#1D2328' }} p="9.23vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Cbox fontSize="18px" bold >Q2, 2022</Cbox>

                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">

                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Editor design (UI) realization.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Determinating the editor functions.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Ensuring the creation of unique objects with ready-made objects for easy creation of 3D objects in the editor.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Identifying and designing objects that can be used by users in the editor.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">3D design of the “museum” to be located in the Main Crater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Linking assets of Ariva Wonderland with OpenSea</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Enabling users to create museums in their own lands with Ariva Creator.</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>

                    <Box position="absolute" border="3px solid rgba(203, 250, 52, 0.26)" top="100%" left="2.76vw" height="calc(50px + 18.46vw + 18px)"></Box>
                </Box>
            </Cbox>
            <Cbox borderRadius="8px" mt="-10px" style={{ background: '#1D2328' }} p="9.23vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Cbox fontSize="18px" bold >Q3, 2022</Cbox>
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Coding the crafting system and the unique in-game payment system.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Performing server and internal structure tests, detecting errors, and correcting the found errors.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Beginning of pre-optimization work.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Coding of the "visa system", which allows users to charge fees according to their preferences from other people who want to visit or perform actions on their land.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Establishing a popularity system by recording the number of visitors and increasing the incentive to discover new areas.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Ensuring a quick way to travel by adding the teleport feature to the Tourism Agency.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Developing special sound sensing systems for theaters, cinemas, and concert venues.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Creating Powerful VFX (visual effects).</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>

                    <Box position="absolute" border="3px solid rgba(203, 250, 52, 0.26)" top="100%" left="2.76vw" height="calc(50px + 18.46vw + 18px + 18px)"></Box>
                </Box>
            </Cbox>
            <Cbox borderRadius="8px" mt="-10px" style={{ background: '#1D2328' }} p="9.23vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Cbox  flexDirection="column" alignItems="flex-end">
                    <Cbox fontSize="18px" bold>Q4, 2022</Cbox>
                    <Cbox fontSize="13px">(Beta Test Release)</Cbox>
                </Cbox>
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox zIndex="14" p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Creation of VR usage support for the user interface (UI).</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Development of the control system of vehicles created and specified in Ariva Wonderland.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Fixing the bugs that have been detected and given feedback by the users.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Performing the general test (hard test) and stress test.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="9px" minHeight="9px" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fontSize="14px">Establishing the mobile infrastructure, as we believe that stores such as the App Store and Google Play Store will allow the use cases of blockchain in the future.</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>

                </Box>
            </Cbox>
        </Box>
    }

    const renderWeb = () => {
        return <Box padding="75px 70px 70px 150px" position="relative" zIndex="-1">
            <Cbox borderRadius="8px" style={{ background: '#1D2328' }} p="3.8vw 6.21vw 4vw 13.8vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Cbox fsize="36" mb="10px">Ariva Metaverse Roadmap</Cbox>
                <Cbox fsize="14" mb="60px" textAlign="center" maxWidth="33.8vw">This is our road map where you can see what was done far now and what will come in future in Ariva Wonderland.</Cbox>
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">The recruitment of our great and talented team for Ariva Wonderland will revolutionize the tourism industry.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Determining the visual style of Ariva Wonderland and its 3D models.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">The emergence of 3D models of the determined style.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Creating environment design, space, animations and mechanics. </Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Presenting the realized works to the community with a promotional video.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Designing the Main Crater and the lands for sale.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Crafting, and creating unique craters and areas to be put up for sale.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Planning the Main Crater with the professional town planning team.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">The 3D design of the Main Crater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Creating social areas such as movie theaters, theater halls, parks & city squares.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Ariva Wonderland's sense of time is going to be different.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Designing promotional areas in 3D.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Watch videos & movies in the movie theater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Creating multiple 3D characters with unique technical characteristics.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #CBFA34" bgcolor="#CBFA34" />
                            <Cbox fsize="14">Creating 3D spacecraft with multiple variations.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Developing the multiplayer feature so that hundreds of thousands of players can spend time in Ariva Wonderland at the same time.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Establishing a voice and text chat, assigning unique identities to lands, and preparing for Alpha Version</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Improving the IK system </Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Performing various tests on characters and other created objects. Based on the results of these tests, the muscle system studies are carried out.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Inclusion of Mocap library.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Performing mechanism and animation quality tests.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Coding software for character customization.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Designing the user interface (UI) for character selection.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Designing an interface so that users can customize their own lands.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">The 3D design of the “concert area” is to be located in the Main Crater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Alpha Test Release</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>
                    <Cbox fsize="18" bold position="absolute" top="45px" left="-8.5vw">Q1, 2022</Cbox>
                    <Box position="absolute" border="3px solid rgba(203, 250, 52, 0.26)" top="100%" left="2.76vw" height="calc(50px + 8vw)"></Box>
                </Box>
            </Cbox>
            <Cbox borderRadius="8px" mt="-10px" style={{ background: '#1D2328' }} p="3.8vw 6.21vw 4vw 13.8vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">

                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Editor design (UI) realization.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Determinating the editor functions.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Ensuring the creation of unique objects with ready-made objects for easy creation of 3D objects in the editor.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Identifying and designing objects that can be used by users in the editor.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">3D design of the “museum” to be located in the Main Crater.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Linking assets of Ariva Wonderland with OpenSea</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Enabling users to create museums in their own lands with Ariva Creator.</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>
                    <Cbox fsize="18" bold position="absolute" top="45px" left="-8.5vw">Q2, 2022</Cbox>
                    <Box position="absolute" border="3px solid rgba(203, 250, 52, 0.26)" top="100%" left="2.76vw" height="calc(50px + 8vw)"></Box>
                </Box>
            </Cbox>
            <Cbox borderRadius="8px" mt="-10px" style={{ background: '#1D2328' }} p="3.8vw 6.21vw 4vw 13.8vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Coding the crafting system and the unique in-game payment system.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Performing server and internal structure tests, detecting errors, and correcting the found errors.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Beginning of pre-optimization work.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Coding of the "visa system", which allows users to charge fees according to their preferences from other people who want to visit or perform actions on their land.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Establishing a popularity system by recording the number of visitors and increasing the incentive to discover new areas.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Ensuring a quick way to travel by adding the teleport feature to the Tourism Agency.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Developing special sound sensing systems for theaters, cinemas, and concert venues.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Creating Powerful VFX (visual effects).</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>
                    <Cbox fsize="18" bold position="absolute" top="45px" left="-8.5vw">Q3, 2022</Cbox>
                    <Box position="absolute" border="3px solid rgba(203, 250, 52, 0.26)" top="100%" left="2.76vw" height="calc(50px + 8vw)"></Box>
                </Box>
            </Cbox>
            <Cbox borderRadius="8px" mt="-10px" style={{ background: '#1D2328' }} p="3.8vw 6.21vw 4vw 13.8vw" flexDirection="column" justifyContent="center" alignItems="center">
                <Box style={{ background: 'linear-gradient(90deg, rgba(176, 222, 28, 0.71) 0%, rgba(255, 255, 255, 0) 100%)' }} mb="50px" width="100%" p="3px" borderRadius="8px" position="relative">
                    <Cbox zIndex="14" p="2.6vw 5.2vw" pr="14.5vw" style={{ background: '#2C2C2C' }} flexDirection="column" borderRadius="6px">
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Creation of VR usage support for the user interface (UI).</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Development of the control system of vehicles created and specified in Ariva Wonderland.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Fixing the bugs that have been detected and given feedback by the users.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Performing the general test (hard test) and stress test.</Cbox>
                        </Cbox>
                        <Cbox justifyContent="flex-start" mb="5px" alignItems="center">
                            <Box minWidth="0.62vw" minHeight="0.62vw" borderRadius="999px" mr="20px" boxShadow="0px 0px 4px #E4761B" bgcolor="#E4761B" />
                            <Cbox fsize="14">Establishing the mobile infrastructure, as we believe that stores such as the App Store and Google Play Store will allow the use cases of blockchain in the future.</Cbox>
                        </Cbox>

                    </Cbox>
                    <Box position="absolute" width="3vw" height="3vw" top="35px" left="-1.5vw" borderRadius="999px" boxShadow="0px 0px 11px #CBFA34" bgcolor="#4A4A4A" border="2px solid #CBFA34" display="flex" justifyContent="center" alignItems="center">
                        <Box width="1.6vw" height="1.6vw" bgcolor="#CBFA34" borderRadius="999px" boxShadow="0px 0px 4px #CBFA34" ></Box>
                    </Box>
                    <Cbox position="absolute" top="45px" left="-12vw" flexDirection="column" alignItems="flex-end">
                        <Cbox fsize="18" bold>Q4, 2022</Cbox>
                        <Cbox fsize="13">(Beta Test Release)</Cbox>
                    </Cbox>
                </Box>
            </Cbox>

        </Box>
    }

    return !isMobile ? renderWeb() : renderMobile();

}

export default RoadMap
