import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function SumskiwaNavList() {
  return (
    <List
      sx={{
        height: 1
      }}>
      <NavListItem
        tocNumber="0"
        title="Util"
      />
      <NavListNested>
        <NavListItem
          tocNumber="0.1"
          title="gen"
        />
      </NavListNested>

      <NavListItem
        tocNumber="1"
        title="Introduction"
      />
      <NavListNested>
        <NavListItem
          tocNumber="1.1"
          title="Terms & Abbreviations"
        />
        <NavListNested>
          <NavListItem
            tocNumber="1.1.1"
            title="Glossing Abbreviations"
          />
        </NavListNested>
        <NavListItem
          tocNumber="1.2"
          title="Symbols"
        />
      </NavListNested>
    </List>
  );
}

type NavListItemProps = {
  tocNumber: string;
  title: string;
};
function NavListItem({ tocNumber, title }: NavListItemProps) {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Chip
          label={tocNumber}
          color="primary"
        />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
}

type NavListNestedProps = {
  children?: React.ReactNode;
};
function NavListNested({ children }: NavListNestedProps) {
  return (
    <List
      component="div"
      disablePadding
      sx={{
        pl: 2
      }}>
      {children}
    </List>
  );
}
