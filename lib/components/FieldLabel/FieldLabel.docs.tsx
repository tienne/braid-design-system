import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import {
  FieldLabel,
  Stack,
  Text,
  TextLink,
  Strong,
  Box,
  Hidden,
  Alert,
  Notice,
} from '../';
import { Placeholder } from '../../playroom/components';
import { ReactNode } from 'markdown-to-jsx/node_modules/@types/react';

const Container = ({ children }: { children: ReactNode }) => (
  <Box maxWidth="xsmall">{children}</Box>
);

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Box maxWidth="xsmall">
        <Stack space="xsmall">
          <FieldLabel
            htmlFor="field"
            label="Label"
            secondaryLabel={
              <>
                Secondary<Hidden below="tablet"> label</Hidden>
              </>
            }
            tertiaryLabel={
              <TextLink href="#">
                Tertiary<Hidden below="tablet"> label</Hidden>
              </TextLink>
            }
          />
          <Box id="field">
            <Placeholder height={40} />
          </Box>
        </Stack>
      </Box>,
    ),
  description: (
    <Alert tone="info">
      <Text weight="medium">
        This component is only required when building a custom field that isn’t
        provided by Braid.
      </Text>
    </Alert>
  ),
  accessibility: (
    <Text>
      The <Strong>htmlFor</Strong> prop is mandatory, which accepts the ID of
      the field being labelled. This ensures that screen readers are able to
      associate the label with its associated field.
    </Text>
  ),
  alternatives: [
    {
      name: 'FieldMessage',
      description: 'For displaying messages below a custom field.',
    },
  ],
  additional: [
    {
      label: 'Label',
      Container,
      description: <Text>Sets the primary label of field.</Text>,
      Example: () => source(<FieldLabel htmlFor="field" label="Label" />),
    },
    {
      label: 'Secondary label',
      Container,
      description: (
        <>
          <Text>
            Provide additional context, typically used to indicate optionality
            of a field.
          </Text>
          <Notice tone="info">
            <Text>
              Only displayed when provided in addition to a{' '}
              <TextLink href="#label">label</TextLink>.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <FieldLabel
            htmlFor="field"
            label="Label"
            secondaryLabel="Secondary label"
          />,
        ),
    },
    {
      label: 'Tertiary label',
      Container,
      description: (
        <>
          <Text>
            Provide further context, typically used for providing assistance
            with a field.
          </Text>
          <Notice tone="info">
            <Text>
              Only displayed when provided in addition to a{' '}
              <TextLink href="#label">label</TextLink>.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <FieldLabel
            htmlFor="field"
            label="Label"
            tertiaryLabel={
              <TextLink href="#">
                Tertiary<Hidden below="tablet"> label</Hidden>
              </TextLink>
            }
          />,
        ),
    },
    {
      label: 'Additional description',
      description: (
        <>
          <Text>
            Additional context can be provided with a{' '}
            <Strong>description</Strong>. This will display below the field
            label.
          </Text>
          <Alert tone="info">
            <Text>
              It is strongly recommended that a <Strong>descriptionId</Strong>{' '}
              is also passed in, allowing the description to be associated with
              your custom field via <Strong>aria-describedby</Strong> prop. This
              will allow a screen reader to provide this additional context upon
              focusing the field.
            </Text>
          </Alert>
        </>
      ),
      Example: () =>
        source(
          <FieldLabel
            htmlFor="field"
            label="Label"
            description="Extra information about the field"
            descriptionId="description"
          />,
        ),
    },
    {
      label: 'Disabled field',
      Container,
      description: (
        <Text>
          Setting the <Strong>disabled</Strong> prop to <Strong>true</Strong>{' '}
          dims the field label.
        </Text>
      ),
      Example: () =>
        source(<FieldLabel htmlFor="field" label="Label" disabled={true} />),
    },
  ],
};

export default docs;
