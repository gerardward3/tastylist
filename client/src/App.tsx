import { AppShell, Navbar, Text, MediaQuery, Aside, Footer, Burger, Header, Title, MantineProvider, Button } from "@mantine/core";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [opened, setOpened] = useState(false);
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar hidden={!opened} width={{ sm: opened ? 300: 0 }} sx={{
          overflow: "hidden",
          transition: "width 1000ms ease, min-width 1000ms ease"
        }}>
          <Button styles={(theme => ({
            root: {
              margin: 20
            }
          }))
          }>ADD LIST</Button>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            <Text>TastyList</Text>
          </div>
        </Header>
      }
    >
      <Text>You don't currently have any lists! Click the button below to keep track of your favourites.</Text>
      <Button styles={(theme => ({
            root: {
              margin: 20
            }
          }))
          }>ADD LIST</Button>
    </AppShell>
    </MantineProvider>
    
  )
}

export default App
