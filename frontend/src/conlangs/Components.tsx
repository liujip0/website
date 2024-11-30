import { List, ListItem, Typography } from '@mui/material';

type LiProps = {
  typography?: boolean;
  children?: React.ReactNode;
};
export function Li({ typography = true, children }: LiProps) {
  return (
    <ListItem
      sx={{
        display: 'list-item'
      }}>
      {typography ? <Typography>{children}</Typography> : children}
    </ListItem>
  );
}

type OlProps = {
  children?: React.ReactNode;
};
export function Ol({ children }: OlProps) {
  return (
    <List
      component="ol"
      sx={{
        listStyle: 'decimal',
        pl: 3
      }}>
      {children}
    </List>
  );
}

type UlProps = {
  children?: React.ReactNode;
};
export function Ul({ children }: UlProps) {
  return (
    <List
      component="ul"
      sx={{
        listStyle: 'disc',
        pl: 3
      }}>
      {children}
    </List>
  );
}
