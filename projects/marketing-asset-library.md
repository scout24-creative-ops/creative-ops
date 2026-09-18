# Marketing Asset Library

## Purpose

Build a durable Marketing-wide asset source and delivery foundation that can serve multiple Marketing tools instead of creating separate asset stores per tool.

The immediate MVP supports the Contentful migration and Landing Page Builder. The longer-term direction is a shared Marketing Asset Library for Contentful / LP Builder, Beefree, Iterable, ChatGPT agents and other Marketing workflows.

## Current Status

The technical direction was aligned with John Ford on 2026-09-17.

- Original upstream AEM assets should be used where possible rather than crawler-downloaded renditions, because rendered AEM pages may already expose resized or optimized versions.
- The intended delivery path is `original AEM asset -> S3 -> Scout image scaler -> production delivery URL -> LP Builder / Contentful`.
- Existing AEM directory structure should be preserved in S3 where practical, ideally from `/content` downward, to make source-to-target correlation easier.
- John's existing image-scaler service is a strong fit for production image delivery and can handle quality, dimensions, format and other transformations. Advanced cropping is possible but is outside the MVP.

Beatrice identified the existing CMS AWS account as a pilot home:

- Alias: `is24-cms`
- AWS account ID: `902327926271`
- Head of Tech: Daniel Herold
- Region shown in the Developer Portal: `eu-west-1`
- Cost Centre shown in the Developer Portal: `core-services`

John subsequently confirmed that this existing account is sufficient for the pilot. He recommends creating the S3 bucket through CloudFormation rather than manually through the AWS web interface and asked whether Dominik has GitHub access.

Dominik confirmed that he has GitHub and already uses it for LP Builder-related files. No repository or CloudFormation setup should be created pre-emptively; the work is intentionally paused until John provides the next technical setup instruction or points to the preferred repository/deployment path.

For the migration-scale asset source, John's recommendation is to use the original upstream AEM files rather than relying on crawler-visible renditions, because AEM may already have resized or optimized the page-delivered image. The relevant assets should therefore be downloaded/exported from AEM with their existing `/content/...` path/folder structure preserved where possible, so crawled page references can later be matched back to the canonical source files before S3 upload. A URL/metadata list is useful for mapping but is not sufficient by itself; the original image files are required. Dominik contacted Stefan on 2026-09-18 to clarify whether the relevant B2B/AEM assets can be exported in this form, ideally with paths and available metadata such as ALT text. Response pending.

A separate new `marketing-assets` AWS account is therefore not being requested for the MVP.

## MVP Boundary

The first success criterion is intentionally small:

1. Use the existing `is24-cms` AWS account.
2. Create a minimal private S3 bucket through the infrastructure-as-code path John recommends, not by manually clicking it together in the AWS console.
3. Give the image scaler the permissions/configuration it needs.
4. Upload one original AEM asset.
5. Obtain a stable scaler/delivery URL.
6. Use that URL successfully in the Landing Page Builder / Contentful.

The exact GitHub repository, CloudFormation structure, deployment path, bucket naming and access model are not yet decided. John should guide these technical implementation choices.

Cropping/editor UX, broad Marketing governance and large-scale AEM asset export are deliberately outside the first bucket/scaler proof.

## Longer-Term Direction

The intended capability is broader than Contentful migration. Potential consumers include:

- Contentful / Landing Page Builder
- Beefree
- Iterable
- ChatGPT agents and other AI-supported workflows
- additional Marketing tools that need reusable asset storage and reliable image delivery

The longer-term goal is centralized storage and reuse plus consistent image delivery and quality handling. Final account ownership, cost ownership, permissions, governance, folder conventions and operating model remain open until the MVP proves the technical approach.

## Dominik's Role

Dominik owns the Marketing use case, requirements, workflow direction and cross-tool asset-library goal. He should define the desired asset experience and migration/Marketing requirements rather than independently designing AWS infrastructure.

John / Platform Engineering is the technical partner for the S3, permissions and image-scaler setup. Dominik and John agreed to work together on the bucket setup once a usable AWS account exists.

## Key Stakeholders

- John Ford / Platform Engineering: technical direction, S3/permissions guidance and image-scaler configuration
- Beatrice: Contentful/platform coordination and access to the existing CMS AWS-account context
- Daniel Herold: Head of Tech for the existing `is24-cms` AWS account
- CMS team: existing account context and potentially the relevant infrastructure/deployment path
- Stefan: contacted to clarify export/access to original AEM assets for the B2B migration scope, including preservation of `/content/...` paths and available metadata
- Contentful Migration / Landing Page Builder: first concrete consumer and MVP validation path

## Decisions

- Use original AEM assets as the canonical migration source where possible; crawler renditions are evidence, not the master asset.
- Preserve AEM path structure in S3 where practical to support reliable mapping.
- Treat original AEM asset files as the migration source; crawler-visible renditions are evidence only and should be correlated back to the original source before final S3 migration.
- A spreadsheet/URL manifest may support mapping and metadata, but it does not replace exporting the original image files.
- Use Scout's existing image scaler for production delivery rather than training users to manually resize images before upload.
- Keep the first MVP small: S3 asset -> scaler URL -> LP Builder works.
- Advanced cropping is not part of the MVP.
- Use the existing `is24-cms` AWS account for the pilot instead of requesting a new Marketing AWS account now.
- Create the bucket through CloudFormation / infrastructure as code rather than manually in the AWS web interface.
- Do not create a GitHub repository or choose an infrastructure location before John specifies the preferred setup.

## Risks and Open Questions

- Which existing or new GitHub repository should contain the CloudFormation definition?
- What is the exact deployment path from GitHub/CloudFormation into `is24-cms`?
- What access or role will Dominik need to upload assets and operate the pilot?
- What permissions does John's scaler need on the bucket?
- What bucket name and folder conventions should be used for the pilot and later Marketing-wide use?
- Can Stefan/the AEM side provide a B2B-relevant export of the original image files while preserving `/content/...` paths and, where available, metadata such as ALT text?
- How should the full AEM original-asset export and source mapping be automated at migration scale?
- What should long-term account ownership, cost ownership and governance be once the capability expands beyond the migration MVP?

## Next Steps

1. Wait for John's response after Dominik confirmed GitHub access.
2. Wait for Stefan's response on whether the relevant B2B original AEM assets can be exported with their `/content/...` structure and available metadata preserved.
3. Follow John's preferred repository / CloudFormation / deployment setup rather than creating a parallel infrastructure path independently.
4. Create the minimal S3 bucket together with the permissions required for the image scaler.
5. Let John configure the scaler for the bucket.
6. Run one end-to-end test with an original AEM asset: AEM -> S3 -> scaler/delivery URL -> LP Builder / Contentful.
7. After the pilot works, define the migration-scale asset export/mapping flow and then the broader Marketing Asset Library operating model.

## Last Confirmed

2026-09-18: The asset-source requirement was clarified from the John Ford alignment: original upstream AEM image files should be exported/downloaded and their `/content/...` structure preserved where possible, because crawler-visible renditions may already be transformed. A URL/metadata inventory alone is not sufficient for the S3 migration. Dominik contacted Stefan to clarify the B2B AEM export path and will continue once Stefan responds. The S3/CloudFormation setup remains paused pending John's next technical instruction.