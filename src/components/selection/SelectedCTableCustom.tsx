import {IconButton, Stack} from "@mui/material";
import Text from "@components/text/Text.tsx";

type ISelectParticipant = {
    amount: number;
    handleDelete: () => void;
    handleCancelSelected: () => void;
};

export const SelectedCTableCustom = (props: ISelectParticipant) => {
    const {amount = 0, handleDelete, handleCancelSelected} = props;
    return (
        <Stack
            sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                right: '50%',
                transform: `translate(-50%, -50%)`,
            }}
            width="938px"
            bgcolor={"black.main"}
            borderRadius="6px">
            <Stack
                direction="row"
                width="100%"
                sx={{
                    borderRadius: '6px',
                    height: '48px',
                    alignItems: 'center',
                    justifyContent:"space-between",
                    gap: 2,
                }}>
                <Stack direction="row" alignItems="center" gap={2}>
                    <Stack
                        sx={{
                            px: '14px',
                            py: '12px',
                            bgcolor:"#0040BD",
                            borderRadius: '6px',
                        }}>
                        <Text >{amount}</Text>
                    </Stack>
                    <Text fontSize="13px" >
                       Selection
                    </Text>
                </Stack>

                <Stack direction="row" width={'100%'} justifyContent={'end'} >
                    <IconButton
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        onClick={handleDelete}>
                        <Stack direction="row" alignItems="center" gap={2}>
                            <Stack
                                sx={{
                                    borderRadius: '6px',
                                    gap: 1,
                                }}
                                direction="row">
                                <Text fontSize="13px">
                                    Delete Item
                                </Text>
                                {/*<Trash*/}
                                {/*    fontSize={'small'}*/}
                                {/*/>*/}
                            </Stack>
                        </Stack>
                    </IconButton>
                    <IconButton onClick={handleCancelSelected}>
                        <Text color={'error'}>Cancel</Text>
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    );
};